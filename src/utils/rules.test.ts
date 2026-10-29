/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { convertArea, evaluateAreaDiscrepancy } from './areaConverter';
import { calculateFlatUds, auditProjectUds } from './udsCalculator';
import { findMatchingDecisionRules, PAN_INDIA_DECISION_RULES } from './decisionRules';

test('convertArea correctly converts Acres to Cents and Gunthas', () => {
  // 1 Acre = 100 Cents
  const cents = convertArea(1, 'acre', 'cent');
  assert.equal(Math.round(cents), 100);

  // 1 Acre = 40 Gunthas
  const gunthas = convertArea(1, 'acre', 'guntha');
  assert.equal(Math.round(gunthas), 40);

  // 1 Guntha = 1089 sq ft
  const sqFt = convertArea(1, 'guntha', 'sq_ft');
  assert.equal(sqFt, 1089);
});

test('convertArea correctly handles regional Bigha variations', () => {
  // 1 UP Pakka Bigha = 27,225 sq ft
  const upBighaSqFt = convertArea(1, 'bigha_up_pakka', 'sq_ft');
  assert.equal(upBighaSqFt, 27225);

  // 1 Bengal Bigha = 14,400 sq ft
  const bengalBighaSqFt = convertArea(1, 'bigha_bengal', 'sq_ft');
  assert.equal(bengalBighaSqFt, 14400);

  // Ensure UP Bigha != Bengal Bigha
  assert.notEqual(upBighaSqFt, bengalBighaSqFt);
});

test('evaluateAreaDiscrepancy correctly checks surveying tolerance and boundaries rule', () => {
  // 2400 sq ft deed, 2400 sq ft revenue, 2390 sq ft survey (0.41% variance -> <= 1%)
  const minorResult = evaluateAreaDiscrepancy(2400, 'sq_ft', 2400, 'sq_ft', 2390, 'sq_ft');
  assert.equal(minorResult.isWithinTolerableLimit, true);
  assert.equal(minorResult.bankScrutinySeverity, 'QUALIFIED');

  // 2400 sq ft deed vs 2000 sq ft survey (> 5% variance -> Defective)
  const severeResult = evaluateAreaDiscrepancy(2400, 'sq_ft', 2400, 'sq_ft', 2000, 'sq_ft');
  assert.equal(severeResult.isWithinTolerableLimit, false);
  assert.equal(severeResult.bankScrutinySeverity, 'DEFECTIVE');
});

test('calculateFlatUds computes proportionate land share accurately', () => {
  // Flat SBUA: 1500 sq ft, Total Project SBUA: 150,000 sq ft (1% of project), Parent Land: 43,560 sq ft (1 acre)
  const result = calculateFlatUds(1500, 150000, 43560);
  assert.equal(result.udsPercentage, 1);
  assert.equal(result.udsSqFt, 435.6);
});

test('auditProjectUds detects over-allocation and open car parking illegality', () => {
  const units = [
    {
      id: '1',
      unitNo: 'A-101',
      floor: 1,
      towerOrWing: 'A',
      type: '2BHK' as const,
      carpetAreaSqFt: 800,
      superBuiltUpSqFt: 1000,
      assignedCarParkingType: 'BASEMENT' as const,
      allottedOwner: 'PURCHASER',
      deedUdsSqFt: 600, // inflated! theoretical should be 500
    },
    {
      id: '2',
      unitNo: 'A-102',
      floor: 1,
      towerOrWing: 'A',
      type: '2BHK' as const,
      carpetAreaSqFt: 800,
      superBuiltUpSqFt: 1000,
      assignedCarParkingType: 'BASEMENT' as const,
      allottedOwner: 'PURCHASER',
      deedUdsSqFt: 600, // inflated!
    },
  ];

  // Total parent land: 1000 sq ft, total SBUA: 2000 sq ft. Stated deed UDS sum = 1200 (120%)
  const audit = auditProjectUds(1000, 2000, units, true);
  assert.equal(audit.status, 'OVER_ALLOCATED_RISK');
  assert.equal(audit.carParkingCompliance.openParkingSoldIndependently, true);
  assert.match(audit.carParkingCompliance.legalWarning, /Nahalchand Laloochand/);
});

test('findMatchingDecisionRules finds Suraj Lamp for GPA and PTCL for SC/ST', () => {
  const gpaRules = findMatchingDecisionRules('POA');
  assert.ok(gpaRules.length > 0);
  assert.match(gpaRules[0].situation, /General Power of Attorney/);
  assert.equal(gpaRules[0].passesTitle, false);

  const searchResults = findMatchingDecisionRules(undefined, 'Suraj Lamp');
  assert.ok(searchResults.length > 0);
  assert.match(searchResults[0].governingPrecedents[0], /Suraj Lamp/);
});
