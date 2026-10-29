/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ApartmentUnit {
  id: string;
  unitNo: string;
  floor: number;
  towerOrWing: string;
  type: '1BHK' | '2BHK' | '3BHK' | '4BHK' | 'PENTHOUSE' | 'COMMERCIAL';
  carpetAreaSqFt: number;
  superBuiltUpSqFt: number;
  assignedCarParkingType: 'STILT' | 'BASEMENT' | 'OPEN_PODIUM' | 'STACK';
  allottedOwner: string; // 'LANDOWNER' | 'PROMOTER' | 'PURCHASER_NAME'
  deedUdsSqFt?: number; // what is stated in the sale deed
}

export interface UdsCalculationResult {
  unitNo: string;
  superBuiltUpSqFt: number;
  computedUdsSqFt: number;
  computedUdsPercentage: number;
  deedUdsSqFt?: number;
  varianceSqFt: number;
  isCompliant: boolean;
  statusNote: string;
}

export interface ProjectUdsAudit {
  totalParentLandSqFt: number;
  totalProjectSbuaSqFt: number;
  totalAllocatedUdsSqFt: number;
  allocationPercentage: number; // should be 100%
  residualUdsSqFt: number;
  status: 'BALANCED' | 'OVER_ALLOCATED_RISK' | 'UNDER_ALLOCATED_RESIDUAL';
  legalImplication: string;
  carParkingCompliance: {
    openParkingSoldIndependently: boolean;
    legalWarning: string;
  };
  unitAudits: UdsCalculationResult[];
}

/**
 * Calculates theoretical UDS entitlement for an individual apartment flat
 */
export function calculateFlatUds(
  flatSbuaSqFt: number,
  totalProjectSbuaSqFt: number,
  totalParentLandSqFt: number
): { udsSqFt: number; udsPercentage: number } {
  if (totalProjectSbuaSqFt <= 0 || totalParentLandSqFt <= 0 || flatSbuaSqFt <= 0) {
    return { udsSqFt: 0, udsPercentage: 0 };
  }
  const udsPercentage = (flatSbuaSqFt / totalProjectSbuaSqFt) * 100;
  const udsSqFt = (flatSbuaSqFt / totalProjectSbuaSqFt) * totalParentLandSqFt;
  return {
    udsSqFt: Number(udsSqFt.toFixed(2)),
    udsPercentage: Number(udsPercentage.toFixed(4)),
  };
}

/**
 * Audits multi-unit project UDS allocations across all units
 */
export function auditProjectUds(
  totalParentLandSqFt: number,
  totalProjectSbuaSqFt: number,
  units: ApartmentUnit[],
  openParkingSoldIndependently = false
): ProjectUdsAudit {
  let totalAllocatedUds = 0;
  const unitAudits: UdsCalculationResult[] = [];

  for (const unit of units) {
    const { udsSqFt, udsPercentage } = calculateFlatUds(
      unit.superBuiltUpSqFt,
      totalProjectSbuaSqFt,
      totalParentLandSqFt
    );

    const statedDeedUds = unit.deedUdsSqFt ?? udsSqFt;
    const varianceSqFt = Number((statedDeedUds - udsSqFt).toFixed(2));
    const isCompliant = Math.abs(varianceSqFt) <= 1.0; // 1 sq ft tolerance

    totalAllocatedUds += statedDeedUds;

    unitAudits.push({
      unitNo: unit.unitNo,
      superBuiltUpSqFt: unit.superBuiltUpSqFt,
      computedUdsSqFt: udsSqFt,
      computedUdsPercentage: udsPercentage,
      deedUdsSqFt: unit.deedUdsSqFt,
      varianceSqFt,
      isCompliant,
      statusNote: isCompliant
        ? 'UDS matches proportionate share of parent land.'
        : varianceSqFt > 0
        ? `Over-allocated in deed by ${varianceSqFt} sq. ft.`
        : `Under-allocated in deed by ${Math.abs(varianceSqFt)} sq. ft.`,
    });
  }

  const allocationPercentage = Number(
    ((totalAllocatedUds / totalParentLandSqFt) * 100).toFixed(2)
  );
  const residualUdsSqFt = Number(
    (totalParentLandSqFt - totalAllocatedUds).toFixed(2)
  );

  let status: 'BALANCED' | 'OVER_ALLOCATED_RISK' | 'UNDER_ALLOCATED_RESIDUAL' = 'BALANCED';
  let legalImplication = '';

  if (Math.abs(residualUdsSqFt) <= 5.0) {
    status = 'BALANCED';
    legalImplication =
      '100% of the parent land extent has been completely and equitably conveyed to the unit owners. No unallocated land retained by promoter.';
  } else if (residualUdsSqFt < -5.0) {
    status = 'OVER_ALLOCATED_RISK';
    legalImplication =
      `CRITICAL LEGAL RISK: Total deed-conveyed UDS exceeds 100% of parent land by ${Math.abs(residualUdsSqFt)} sq. ft. (${allocationPercentage}%). The promoter has conveyed more land than exists, constituting fraudulent conveyance and creating competing title clouds among purchasers.`;
  } else {
    status = 'UNDER_ALLOCATED_RESIDUAL';
    legalImplication =
      `CAUTION: ${residualUdsSqFt} sq. ft. of parent land (${(100 - allocationPercentage).toFixed(2)}%) remains unconveyed. Check if promoter is attempting to reserve future FSI/FAR or retaining land for Phase-2 development without explicit consent in the JDA / Registered Agreement for Sale.`;
  }

  const carParkingWarning = openParkingSoldIndependently
    ? 'FATAL BANK SCRUTINY RED FLAG: The promoter has sold open / stilt car parking spaces as independent units. The Supreme Court in Nahalchand Laloochand Pvt. Ltd. v. Panchali Co-op Hsg. Soc. (2010 9 SCC 536) held that stilt and open parking areas are common areas and facilities under MOFA / RERA, and cannot be separately sold by the developer.'
    : 'Compliant: Car parking allotted strictly as accessory/appurtenant right to the respective residential apartment.';

  return {
    totalParentLandSqFt,
    totalProjectSbuaSqFt,
    totalAllocatedUdsSqFt: Number(totalAllocatedUds.toFixed(2)),
    allocationPercentage,
    residualUdsSqFt,
    status,
    legalImplication,
    carParkingCompliance: {
      openParkingSoldIndependently,
      legalWarning: carParkingWarning,
    },
    unitAudits,
  };
}
