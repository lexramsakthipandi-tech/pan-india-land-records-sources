/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AreaUnitDefinition {
  id: string;
  name: string;
  sqFtFactor: number; // multiply unit value by this to get square feet
  region: string;
  notes: string;
}

export const AREA_UNITS: Record<string, AreaUnitDefinition> = {
  sq_ft: {
    id: 'sq_ft',
    name: 'Square Feet (Sq. Ft.)',
    sqFtFactor: 1,
    region: 'All India',
    notes: 'Standard architectural and deed description unit across urban India.',
  },
  sq_yard: {
    id: 'sq_yard',
    name: 'Square Yard (Gaj / Gaz)',
    sqFtFactor: 9,
    region: 'North India (Delhi, UP, HR, PB, RJ)',
    notes: '1 Sq. Yard = 9 Sq. Ft. Commonly termed Gaj in registry deeds.',
  },
  sq_meter: {
    id: 'sq_meter',
    name: 'Square Meter (Sq. M.)',
    sqFtFactor: 10.7639104,
    region: 'National Survey standard',
    notes: '1 Sq. Meter = 10.7639 Sq. Ft. Official unit in RERA and modern surveys.',
  },
  acre: {
    id: 'acre',
    name: 'Acre',
    sqFtFactor: 43560,
    region: 'All India',
    notes: '1 Acre = 43,560 Sq. Ft. = 4,840 Sq. Yards = 100 Cents = 40 Gunthas.',
  },
  cent: {
    id: 'cent',
    name: 'Cent',
    sqFtFactor: 435.6,
    region: 'South India (TN, KL, AP, TS)',
    notes: '1 Cent = 435.6 Sq. Ft. Exactly 1/100th of an Acre. In Tamil Nadu & Kerala standard.',
  },
  guntha: {
    id: 'guntha',
    name: 'Guntha (Gunta)',
    sqFtFactor: 1089,
    region: 'Maharashtra, Karnataka, Gujarat, Telangana',
    notes: '1 Guntha = 1,089 Sq. Ft. Exactly 1/40th of an Acre. 121 Sq. Yards.',
  },
  ground: {
    id: 'ground',
    name: 'Ground',
    sqFtFactor: 2400,
    region: 'Tamil Nadu (Chennai & urban layouts)',
    notes: '1 Ground = 2,400 Sq. Ft. Standard residential plot measure in Chennai/CMDA.',
  },
  bigha_up_pakka: {
    id: 'bigha_up_pakka',
    name: 'Bigha (UP/HR/PB Pakka)',
    sqFtFactor: 27225,
    region: 'Uttar Pradesh, Punjab, Haryana',
    notes: '1 Pakka Bigha = 27,225 Sq. Ft. = 3,025 Sq. Yards = 20 Biswa.',
  },
  bigha_up_kaccha: {
    id: 'bigha_up_kaccha',
    name: 'Bigha (UP/MP Kaccha)',
    sqFtFactor: 9075,
    region: 'Western UP, parts of MP & Rajasthan',
    notes: '1 Kaccha Bigha = 9,075 Sq. Ft. Exactly 1/3 of a Pakka Bigha.',
  },
  bigha_bengal: {
    id: 'bigha_bengal',
    name: 'Bigha (West Bengal & Assam)',
    sqFtFactor: 14400,
    region: 'West Bengal, Assam',
    notes: '1 Bengal Bigha = 14,400 Sq. Ft. = 1,600 Sq. Yards = 20 Kathas (720 sq ft each).',
  },
  katha_bengal: {
    id: 'katha_bengal',
    name: 'Katha (West Bengal)',
    sqFtFactor: 720,
    region: 'West Bengal',
    notes: '1 Katha = 720 Sq. Ft. (1/20 of Bengal Bigha = 16 Chataks).',
  },
  katha_bihar: {
    id: 'katha_bihar',
    name: 'Katha (Bihar)',
    sqFtFactor: 1361.25,
    region: 'Bihar',
    notes: '1 Bihar Katha = 1,361.25 Sq. Ft. (1/20th of Bihar Bigha = 27,225 sq ft).',
  },
  biswa_up: {
    id: 'biswa_up',
    name: 'Biswa (Pakka - UP/HR)',
    sqFtFactor: 1361.25,
    region: 'Uttar Pradesh, Haryana',
    notes: '1 Biswa = 1,361.25 Sq. Ft. = 151.25 Sq. Yards. 1/20 of Pakka Bigha.',
  },
  kanal: {
    id: 'kanal',
    name: 'Kanal',
    sqFtFactor: 5445,
    region: 'Punjab, Haryana, J&K, Himachal',
    notes: '1 Kanal = 5,445 Sq. Ft. = 605 Sq. Yards = 8 Marlas (1/8th of an Acre).',
  },
  marla: {
    id: 'marla',
    name: 'Marla',
    sqFtFactor: 272.25,
    region: 'Punjab, Haryana, J&K',
    notes: '1 Marla = 272.25 Sq. Ft. = 30.25 Sq. Yards = 9 Sarsahi (1/8th of a Kanal).',
  },
  chatak: {
    id: 'chatak',
    name: 'Chatak',
    sqFtFactor: 45,
    region: 'West Bengal',
    notes: '1 Chatak = 45 Sq. Ft. = 5 Sq. Yards (1/16th of a Bengal Katha).',
  },
};

/**
 * Converts value from source unit to target unit
 */
export function convertArea(value: number, fromUnitId: string, toUnitId: string): number {
  if (value < 0 || isNaN(value)) return 0;
  const fromDef = AREA_UNITS[fromUnitId];
  const toDef = AREA_UNITS[toUnitId];
  if (!fromDef || !toDef) return value;
  const sqFt = value * fromDef.sqFtFactor;
  return sqFt / toDef.sqFtFactor;
}

/**
 * Compares Deed Area vs Revenue Record (Patta/RTC/7-12) vs Physical Survey Area
 * Applies legal ratio: 'Boundaries prevail over extent' if discrepancy is within surveying tolerance (<= 1%)
 */
export interface AreaComparisonResult {
  deedSqFt: number;
  revenueSqFt: number;
  surveySqFt: number;
  maxDiscrepancySqFt: number;
  variancePercentage: number;
  isWithinTolerableLimit: boolean; // typically <= 1.0%
  legalOpinion: string;
  recommendedAction: string;
  bankScrutinySeverity: 'CLEAR' | 'QUALIFIED' | 'DEFECTIVE';
}

export function evaluateAreaDiscrepancy(
  deedValue: number,
  deedUnitId: string,
  revenueValue: number,
  revenueUnitId: string,
  surveyValue: number,
  surveyUnitId: string
): AreaComparisonResult {
  const deedSqFt = deedValue * (AREA_UNITS[deedUnitId]?.sqFtFactor || 1);
  const revenueSqFt = revenueValue * (AREA_UNITS[revenueUnitId]?.sqFtFactor || 1);
  const surveySqFt = surveyValue * (AREA_UNITS[surveyUnitId]?.sqFtFactor || 1);

  const values = [deedSqFt, revenueSqFt, surveySqFt].filter((v) => v > 0);
  if (values.length === 0) {
    return {
      deedSqFt: 0,
      revenueSqFt: 0,
      surveySqFt: 0,
      maxDiscrepancySqFt: 0,
      variancePercentage: 0,
      isWithinTolerableLimit: true,
      legalOpinion: 'Insufficient area measurements provided for scrutiny.',
      recommendedAction: 'Input all available deed, revenue, and survey areas.',
      bankScrutinySeverity: 'CLEAR',
    };
  }

  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const maxDiscrepancySqFt = maxVal - minVal;
  const variancePercentage = (maxDiscrepancySqFt / deedSqFt) * 100;
  const isWithinTolerableLimit = variancePercentage <= 1.0;

  let legalOpinion = '';
  let recommendedAction = '';
  let bankScrutinySeverity: 'CLEAR' | 'QUALIFIED' | 'DEFECTIVE' = 'CLEAR';

  if (variancePercentage === 0) {
    legalOpinion = 'Deed, revenue, and survey measurements tally perfectly. Title extent is unquestioned.';
    recommendedAction = 'Proceed with standard title documentation without qualification.';
    bankScrutinySeverity = 'CLEAR';
  } else if (variancePercentage <= 1.0) {
    legalOpinion =
      'Minor surveying variance (within 1.0%). Under settled jurisprudence (Supreme Court in Roy & Co. v. Thakurani; Karnataka HC in Subbanna v. Thimmakka), well-defined boundaries (North, South, East, West) prevail over mathematical measurement discrepancies.';
    recommendedAction =
      'Insert standard bank qualification note acknowledging the nominal variance and asserting that boundary descriptions govern the title.';
    bankScrutinySeverity = 'QUALIFIED';
  } else if (variancePercentage <= 5.0) {
    legalOpinion =
      'Material variance detected between title deed and revenue/survey records. If revenue record area is LESS than deed, vendor cannot convey more than what revenue authorities recognize. If survey area is less, the purchaser loses actual possession.';
    recommendedAction =
      'Obtain a Joint Spot Inspection Mahazar and Survey sketch from Taluk Surveyor (Tahasildar/ADLR). If mismatch arose from clerical error, execute a Registered Rectification Deed or apply for Patta/Khata correction.';
    bankScrutinySeverity = 'QUALIFIED';
  } else {
    legalOpinion =
      'Severe variance (> 5.0%). Cloud on title. High probability of encroachment, unrecorded acquisition, disputed sub-division, or fraudulent inflation of property extent in the conveyance deed.';
    recommendedAction =
      'Demand fresh resurvey, production of original parent partition/layout sketch, and obtain written clarification from Tahasildar. Title cannot be certified as clear until Rectification Deed or Mutation Order reconciles extent.';
    bankScrutinySeverity = 'DEFECTIVE';
  }

  return {
    deedSqFt: Number(deedSqFt.toFixed(2)),
    revenueSqFt: Number(revenueSqFt.toFixed(2)),
    surveySqFt: Number(surveySqFt.toFixed(2)),
    maxDiscrepancySqFt: Number(maxDiscrepancySqFt.toFixed(2)),
    variancePercentage: Number(variancePercentage.toFixed(2)),
    isWithinTolerableLimit,
    legalOpinion,
    recommendedAction,
    bankScrutinySeverity,
  };
}
