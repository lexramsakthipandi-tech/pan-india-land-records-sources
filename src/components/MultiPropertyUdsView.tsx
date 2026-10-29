/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ApartmentUnit, auditProjectUds, calculateFlatUds } from '../utils/udsCalculator';
import { Building2, AlertTriangle, CheckCircle2, ShieldAlert, Plus, Trash2, Calculator, Info, Car } from 'lucide-react';

const INITIAL_UNITS: ApartmentUnit[] = [
  { id: '1', unitNo: 'Tower A - 101', floor: 1, towerOrWing: 'Tower A', type: '2BHK', carpetAreaSqFt: 720, superBuiltUpSqFt: 960, assignedCarParkingType: 'BASEMENT', allottedOwner: 'DEVELOPER', deedUdsSqFt: 384 },
  { id: '2', unitNo: 'Tower A - 102', floor: 1, towerOrWing: 'Tower A', type: '2BHK', carpetAreaSqFt: 720, superBuiltUpSqFt: 960, assignedCarParkingType: 'BASEMENT', allottedOwner: 'DEVELOPER', deedUdsSqFt: 384 },
  { id: '3', unitNo: 'Tower A - 201', floor: 2, towerOrWing: 'Tower A', type: '3BHK', carpetAreaSqFt: 1100, superBuiltUpSqFt: 1440, assignedCarParkingType: 'BASEMENT', allottedOwner: 'LANDOWNER', deedUdsSqFt: 576 },
  { id: '4', unitNo: 'Tower A - 202', floor: 2, towerOrWing: 'Tower A', type: '3BHK', carpetAreaSqFt: 1100, superBuiltUpSqFt: 1440, assignedCarParkingType: 'BASEMENT', allottedOwner: 'LANDOWNER', deedUdsSqFt: 576 },
  { id: '5', unitNo: 'Tower B - 101', floor: 1, towerOrWing: 'Tower B', type: '3BHK', carpetAreaSqFt: 1100, superBuiltUpSqFt: 1440, assignedCarParkingType: 'STILT', allottedOwner: 'DEVELOPER', deedUdsSqFt: 576 },
  { id: '6', unitNo: 'Tower B - 102', floor: 1, towerOrWing: 'Tower B', type: '3BHK', carpetAreaSqFt: 1100, superBuiltUpSqFt: 1440, assignedCarParkingType: 'STILT', allottedOwner: 'DEVELOPER', deedUdsSqFt: 576 },
  { id: '7', unitNo: 'Tower B - 201', floor: 2, towerOrWing: 'Tower B', type: '4BHK', carpetAreaSqFt: 1650, superBuiltUpSqFt: 2160, assignedCarParkingType: 'BASEMENT', allottedOwner: 'DEVELOPER', deedUdsSqFt: 864 },
  { id: '8', unitNo: 'Tower B - 202', floor: 2, towerOrWing: 'Tower B', type: 'PENTHOUSE', carpetAreaSqFt: 2100, superBuiltUpSqFt: 2760, assignedCarParkingType: 'BASEMENT', allottedOwner: 'LANDOWNER', deedUdsSqFt: 1104 },
];

export const MultiPropertyUdsView: React.FC = () => {
  const [parentLandSqFt, setParentLandSqFt] = useState<number>(50000);
  const [projectSbuaSqFt, setProjectSbuaSqFt] = useState<number>(125000);
  const [units, setUnits] = useState<ApartmentUnit[]>(INITIAL_UNITS);
  const [openParkingSoldIndependently, setOpenParkingSoldIndependently] = useState<boolean>(false);

  // New unit form state
  const [newUnitNo, setNewUnitNo] = useState<string>('Tower C - 101');
  const [newSbua, setNewSbua] = useState<number>(1200);
  const [newCarpet, setNewCarpet] = useState<number>(900);
  const [newOwner, setNewOwner] = useState<string>('DEVELOPER');
  const [newParking, setNewParking] = useState<'STILT' | 'BASEMENT' | 'OPEN_PODIUM'>('BASEMENT');

  const auditReport = useMemo(() => {
    return auditProjectUds(parentLandSqFt, projectSbuaSqFt, units, openParkingSoldIndependently);
  }, [parentLandSqFt, projectSbuaSqFt, units, openParkingSoldIndependently]);

  const handleAddUnit = () => {
    const theoreticalUds = calculateFlatUds(newSbua, projectSbuaSqFt, parentLandSqFt).udsSqFt;
    const newUnit: ApartmentUnit = {
      id: Date.now().toString(),
      unitNo: newUnitNo,
      floor: 1,
      towerOrWing: newUnitNo.split('-')[0].trim() || 'Tower A',
      type: newSbua > 2000 ? '4BHK' : newSbua > 1300 ? '3BHK' : '2BHK',
      carpetAreaSqFt: newCarpet,
      superBuiltUpSqFt: newSbua,
      assignedCarParkingType: newParking,
      allottedOwner: newOwner,
      deedUdsSqFt: theoreticalUds,
    };
    setUnits([...units, newUnit]);
  };

  const handleRemoveUnit = (id: string) => {
    setUnits(units.filter((u) => u.id !== id));
  };

  const handleUpdateDeedUds = (id: string, value: number) => {
    setUnits(
      units.map((u) => (u.id === id ? { ...u, deedUdsSqFt: isNaN(value) ? 0 : value } : u))
    );
  };

  const loadPreset = (preset: 'balanced' | 'over_allocated' | 'under_allocated') => {
    if (preset === 'balanced') {
      setParentLandSqFt(50000);
      setProjectSbuaSqFt(125000);
      setOpenParkingSoldIndependently(false);
      // set deed UDS to exact theoretical
      const updated = INITIAL_UNITS.map((u) => {
        const { udsSqFt } = calculateFlatUds(u.superBuiltUpSqFt, 125000, 50000);
        return { ...u, deedUdsSqFt: udsSqFt };
      });
      setUnits(updated);
    } else if (preset === 'over_allocated') {
      setParentLandSqFt(50000);
      setProjectSbuaSqFt(125000);
      setOpenParkingSoldIndependently(true);
      // inflate deed UDS by 25% (Builder scam)
      const updated = INITIAL_UNITS.map((u) => {
        const { udsSqFt } = calculateFlatUds(u.superBuiltUpSqFt, 125000, 50000);
        return { ...u, deedUdsSqFt: Number((udsSqFt * 1.25).toFixed(2)) };
      });
      setUnits(updated);
    } else {
      // Under allocated
      setParentLandSqFt(50000);
      setProjectSbuaSqFt(125000);
      setOpenParkingSoldIndependently(false);
      const updated = INITIAL_UNITS.map((u) => {
        const { udsSqFt } = calculateFlatUds(u.superBuiltUpSqFt, 125000, 50000);
        return { ...u, deedUdsSqFt: Number((udsSqFt * 0.75).toFixed(2)) };
      });
      setUnits(updated);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Multi-Property & Undivided Share of Land (UDS) Audit
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Scrutinize apartment projects, layouts & towers: verify that cumulative UDS conveyed in deeds does not exceed 100% of parent land or leave unallocated residual land.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => loadPreset('balanced')}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs"
            >
              Preset: Balanced Project
            </button>
            <button
              onClick={() => loadPreset('over_allocated')}
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-rose-50 border border-rose-300 text-rose-800 hover:bg-rose-100 shadow-xs"
            >
              Simulate: Over-Allocation Scam
            </button>
          </div>
        </div>
      </div>

      {/* Parent Land & Project Baseline Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-slate-700" />
          Project Parent Land & Sanctioned SBUA Parameters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Parent Land Area (Total Plot Extent in Sq. Ft.)
            </label>
            <input
              type="number"
              value={parentLandSqFt}
              onChange={(e) => setParentLandSqFt(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              ≈ {(parentLandSqFt / 43560).toFixed(2)} Acres / {(parentLandSqFt / 1089).toFixed(2)} Gunthas / {(parentLandSqFt / 435.6).toFixed(2)} Cents
            </span>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Total Project Sanctioned SBUA (All Towers in Sq. Ft.)
            </label>
            <input
              type="number"
              value={projectSbuaSqFt}
              onChange={(e) => setProjectSbuaSqFt(Number(e.target.value))}
              className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
            <span className="text-[11px] text-slate-500 mt-1 block">
              Sum of Super Built-up Area across all sanctioned flats
            </span>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Nahalchand Laloochand Car Parking Compliance
            </label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="parkingCheck"
                checked={openParkingSoldIndependently}
                onChange={(e) => setOpenParkingSoldIndependently(e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
              />
              <label htmlFor="parkingCheck" className="text-xs text-slate-700 font-medium">
                Open / Stilt parking sold as independent commercial units?
              </label>
            </div>
            <span className="text-[11px] text-rose-600 mt-1 block">
              {openParkingSoldIndependently ? 'Flagged illegal under SC precedent' : 'Compliant (Appurtenant common right)'}
            </span>
          </div>
        </div>
      </div>

      {/* Audit Banner */}
      <div
        className={`p-5 rounded-lg border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
          auditReport.status === 'BALANCED'
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : auditReport.status === 'OVER_ALLOCATED_RISK'
            ? 'bg-rose-50 border-rose-300 text-rose-950'
            : 'bg-amber-50 border-amber-300 text-amber-950'
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            {auditReport.status === 'BALANCED' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            ) : auditReport.status === 'OVER_ALLOCATED_RISK' ? (
              <ShieldAlert className="w-5 h-5 text-rose-600" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            )}
            <span className="font-bold text-sm tracking-tight">
              {auditReport.status === 'BALANCED' && 'Audit Status: Balanced & Fully Accounted'}
              {auditReport.status === 'OVER_ALLOCATED_RISK' && 'CRITICAL DEFECT: Over-Allocated UDS Cloud'}
              {auditReport.status === 'UNDER_ALLOCATED_RESIDUAL' && 'CAUTION: Unallocated Residual Land Retained'}
            </span>
          </div>
          <p className="text-xs max-w-3xl leading-relaxed">{auditReport.legalImplication}</p>
          {auditReport.carParkingCompliance.openParkingSoldIndependently && (
            <p className="text-xs font-semibold text-rose-800 mt-1">
              {auditReport.carParkingCompliance.legalWarning}
            </p>
          )}
        </div>

        {/* Metrics Pill Grid */}
        <div className="flex items-center gap-3 shrink-0 text-xs">
          <div className="p-2.5 bg-white/80 rounded border border-slate-200">
            <span className="text-[10px] text-slate-500 block uppercase">Total Allocated UDS</span>
            <span className="font-bold text-sm font-mono tabular-nums text-slate-900">
              {auditReport.totalAllocatedUdsSqFt} sq. ft.
            </span>
          </div>
          <div className="p-2.5 bg-white/80 rounded border border-slate-200">
            <span className="text-[10px] text-slate-500 block uppercase">Share of Parent Land</span>
            <span className="font-bold text-sm font-mono tabular-nums text-slate-900">
              {auditReport.allocationPercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Multi-Property Unit Table */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Scrutinized Unit Inventory ({units.length} Units)
            </h2>
            <p className="text-xs text-slate-500">
              Mathematical test: <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">UDS = (Flat SBUA / Project SBUA) × Parent Land</code>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[11px]">
              <tr>
                <th className="py-2.5 px-3">Unit / Flat</th>
                <th className="py-2.5 px-3">Typology</th>
                <th className="py-2.5 px-3 text-right">Carpet Area</th>
                <th className="py-2.5 px-3 text-right">SBUA</th>
                <th className="py-2.5 px-3 text-right">Theoretical UDS</th>
                <th className="py-2.5 px-3 text-right">Stated Deed UDS</th>
                <th className="py-2.5 px-3 text-right">Variance</th>
                <th className="py-2.5 px-3">Allotted Share</th>
                <th className="py-2.5 px-3">Parking</th>
                <th className="py-2.5 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {auditReport.unitAudits.map((audit) => {
                const unit = units.find((u) => u.unitNo === audit.unitNo)!;
                return (
                  <tr key={unit.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-slate-900">{unit.unitNo}</td>
                    <td className="py-2.5 px-3">{unit.type}</td>
                    <td className="py-2.5 px-3 text-right font-mono tabular-nums">{unit.carpetAreaSqFt} sq ft</td>
                    <td className="py-2.5 px-3 text-right font-mono tabular-nums">{unit.superBuiltUpSqFt} sq ft</td>
                    <td className="py-2.5 px-3 text-right font-mono tabular-nums font-semibold text-slate-900">
                      {audit.computedUdsSqFt} sq ft ({audit.computedUdsPercentage.toFixed(3)}%)
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <input
                        type="number"
                        value={unit.deedUdsSqFt ?? audit.computedUdsSqFt}
                        onChange={(e) => handleUpdateDeedUds(unit.id, Number(e.target.value))}
                        className="w-24 px-2 py-1 text-right font-mono tabular-nums border border-slate-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono tabular-nums">
                      {audit.varianceSqFt === 0 ? (
                        <span className="text-emerald-600 font-semibold">0.00 (Exact)</span>
                      ) : audit.varianceSqFt > 0 ? (
                        <span className="text-rose-600 font-semibold">+{audit.varianceSqFt} sq ft</span>
                      ) : (
                        <span className="text-amber-600 font-semibold">{audit.varianceSqFt} sq ft</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          unit.allottedOwner === 'DEVELOPER'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {unit.allottedOwner}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span className="text-[11px] text-slate-600">{unit.assignedCarParkingType}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => handleRemoveUnit(unit.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Delete unit from audit"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Add Unit Inline Form */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs">
          <span className="font-semibold text-slate-700">Add Unit to Audit:</span>
          <input
            type="text"
            value={newUnitNo}
            onChange={(e) => setNewUnitNo(e.target.value)}
            placeholder="Unit No (e.g. Tower C - 304)"
            className="px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
          />
          <input
            type="number"
            value={newSbua}
            onChange={(e) => setNewSbua(Number(e.target.value))}
            placeholder="SBUA sq ft"
            className="w-24 px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
          />
          <input
            type="number"
            value={newCarpet}
            onChange={(e) => setNewCarpet(Number(e.target.value))}
            placeholder="Carpet sq ft"
            className="w-24 px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
          />
          <select
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            className="px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
          >
            <option value="DEVELOPER">Developer Share</option>
            <option value="LANDOWNER">Landowner Share</option>
          </select>
          <select
            value={newParking}
            onChange={(e) => setNewParking(e.target.value as any)}
            className="px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs"
          >
            <option value="BASEMENT">Basement Parking</option>
            <option value="STILT">Stilt Parking</option>
            <option value="OPEN_PODIUM">Open Podium</option>
          </select>
          <button
            onClick={handleAddUnit}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded font-medium shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Unit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
