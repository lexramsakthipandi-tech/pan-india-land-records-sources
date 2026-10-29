/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BankScrutinyGuideline, LSRReportData } from '../types';

export const BANK_SCRUTINY_GUIDELINES: BankScrutinyGuideline[] = [
  {
    bankName: 'State Bank of India (SBI)',
    minSearchPeriodYears: 30,
    cersaiMandate: true,
    mandatoryDocuments: [
      'Original Mother Deed / Root Title Document (Minimum 30 years tracing)',
      'All intermediate link conveyance deeds in original',
      'Encumbrance Certificate (Form 15) for minimum 30 years up to date of deposit',
      'Current computerized Patta / Khata Certificate and Khata Extract (e-Khata / A-Khata)',
      'Latest paid Property Tax Assessment Receipt with zero tax arrears',
      'Approved Sanctioned Building Plan and Commencement Certificate (CC)',
      'Full Occupancy Certificate (OC) for completed residential units',
      'CERSAI Search Report reflecting zero subsisting equitable mortgages',
    ],
    nonNegotiableRejections: [
      'Property held on General Power of Attorney / Agreement to Sell without registered conveyance (Suraj Lamp)',
      'Property having B-Khata / temporary tax entry without approved municipal sanction (Karnataka BBMP limits)',
      'Property classified as SC/ST Granted Land (PTCL / Panchami) without statutory government sanction',
      'Pending suit in civil court involving injunction against alienation (Order 39 Rule 1 & 2 CPC)',
      'Subsisting prior equitable mortgage not closed / NOC from existing lender missing',
    ],
    standardQualifications: [
      {
        code: 'QUAL_ORIG_LINK_DEED',
        scenario: 'Intermediate link deed not produced in original (only certified copy provided)',
        recommendedDrafting:
          'Subject to production and deposit of the genuine original registered Sale Deed bearing Doc No. [X] of [YEAR] registered at SRO [LOCATION]. In the event of loss, the borrower must submit a police non-traceable certificate, registered indemnity bond, and two public notices published in national and vernacular newspapers with a 15-day objection period.',
      },
      {
        code: 'QUAL_AREA_NOMINAL',
        scenario: 'Minor discrepancy between Deed extent and Survey extent (<= 1%)',
        recommendedDrafting:
          'A nominal variance of [X] sq. ft. is noted between the conveyance deed and the revenue sketch. Under established law, the four well-defined physical boundaries recited in the title deed prevail over mathematical variance. Recommended to inspect site and verify boundary pillars.',
      },
      {
        code: 'QUAL_PARTIAL_OC',
        scenario: 'Builder possesses Partial OC for Tower A while overall project amenities are under development',
        recommendedDrafting:
          'Occupancy Certificate produced is a Partial OC bearing No. [X] dated [Y] restricted to Wing/Tower [Z]. Creation of equitable mortgage is permissible strictly for units in the cleared tower, subject to builder undertaking to complete fire and common amenities and obtain Full OC within 6 months.',
      },
    ],
  },
  {
    bankName: 'HDFC Bank & ICICI Bank',
    minSearchPeriodYears: 30,
    cersaiMandate: true,
    mandatoryDocuments: [
      'Chain of title documents for 30 years (or from date of layout allotment by statutory body like BDA/DDA/MHADA)',
      'Encumbrance Certificate for 30 years showing nil entries / continuous chain',
      'RERA Project Registration Certificate and CA Escrow compliance report',
      'Registered Joint Development Agreement and Area Allocation Agreement (demarcating developer vs landowner share)',
      'No Objection Certificate (NOC) and Permission to Mortgage (PTM) issued by Builder / Society',
      'CERSAI Asset Search & MCA Company Charge Search (if vendor is a company)',
    ],
    nonNegotiableRejections: [
      'Vendor selling flat falling in Landowner\'s share without Landowner joining as co-executant or registered POA',
      'Un-regularized unauthorized layout / Revenue site lacking DTCP / BDA / Town planning sanction',
      'Prior charge registered on CERSAI portal by another financial institution',
      'Title originating from unprobated will in Mumbai, Chennai, or Kolkata presidency areas',
    ],
    standardQualifications: [
      {
        code: 'QUAL_BUILDER_PTM',
        scenario: 'Mortgage creation during project construction phase',
        recommendedDrafting:
          'Mortgage is recommended subject to execution of Tripartite Agreement between Borrower, Builder and Bank, along with Builder\'s written Permission to Mortgage (PTM) and undertaking to deposit the original conveyance deed and share certificate directly with the Bank upon registration.',
      },
      {
        code: 'QUAL_CERSAI_FILING',
        scenario: 'Mandatory SARFAESI compliance post-disbursement',
        recommendedDrafting:
          'The Bank must ensure online filing of security interest on the CERSAI portal within 30 days of mortgage creation as mandated under Section 23 of the SARFAESI Act 2002 to preserve first-charge priority against third-party creditors.',
      },
    ],
  },
];

export const SAMPLE_LSR_REPORT: LSRReportData = {
  reportNumber: 'LSR/2026/BLR/9482',
  dateOfReport: '2026-10-29',
  advocateName: 'Adv. S. K. Narayanan, B.Sc., LL.B.',
  barRegistrationNo: 'KAR/1429/2004',
  bankName: 'State Bank of India',
  branchName: 'Koramangala Commercial Branch, Bangalore',
  loanApplicationNo: 'HL-2026-89410',
  borrowerName: 'Vikramaditya Sengupta & Ananya Sengupta',
  propertyOwnerName: 'Vikramaditya Sengupta',
  propertyAddress: 'Apartment No. 402, 4th Floor, "Gulmohar Woods", Sy. No. 48/2, Bellandur Village, Varthur Hobli, Bengaluru East Taluk, Karnataka - 560103',
  surveyNumber: '48/2',
  subDivisionNo: '48/2A',
  state: 'Karnataka',
  district: 'Bengaluru Urban',
  talukVillage: 'Varthur Hobli, Bellandur Village',
  extentDeed: '1,450.00 Sq. Ft. Super Built-Up with 435.60 Sq. Ft. UDS',
  extentRevenue: 'Total Parent Land: 2 Acres 10 Guntas (98,010 Sq. Ft.)',
  extentUnit: 'Sq. Ft. & Guntas',
  boundaries: {
    north: 'Private Property in Survey No. 48/1',
    south: '30-feet Main Access Layout Road',
    east: 'Survey No. 49 boundary',
    west: 'Secondary Access Road and Green Buffer',
  },
  chainOfTitle: [
    {
      serialNo: 1,
      dateOfDocument: '1995-04-12',
      docNoAndYear: 'Doc No. 1240/1995',
      natureOfDeed: 'Registered Absolute Sale Deed',
      executantVendor: 'Ramaiah S/o Muniswamappa',
      claimantPurchaser: 'K. V. Subba Rao',
      extentCovered: '2 Acres 10 Guntas in Sy. No. 48/2',
      originalProduced: true,
      verificationStatus: 'VERIFIED',
    },
    {
      serialNo: 2,
      dateOfDocument: '2016-08-20',
      docNoAndYear: 'Doc No. 4512/2016',
      natureOfDeed: 'Registered Joint Development Agreement (JDA)',
      executantVendor: 'K. V. Subba Rao & Legal Heirs (Landowners)',
      claimantPurchaser: 'M/s Gulmohar Infratech Pvt. Ltd. (Developer)',
      extentCovered: 'Entire 2 Acres 10 Guntas for Multi-Story Project',
      originalProduced: true,
      verificationStatus: 'VERIFIED',
    },
    {
      serialNo: 3,
      dateOfDocument: '2017-02-14',
      docNoAndYear: 'Doc No. 892/2017',
      natureOfDeed: 'Registered Supplementary Allocation Agreement',
      executantVendor: 'Landowners and Developer jointly',
      claimantPurchaser: 'Mutual Allocation of Units',
      extentCovered: 'Flat 402 allotted specifically to Developer Share',
      originalProduced: true,
      verificationStatus: 'VERIFIED',
    },
    {
      serialNo: 4,
      dateOfDocument: '2023-11-10',
      docNoAndYear: 'Doc No. 6734/2023',
      natureOfDeed: 'Registered Sale Deed with UDS Conveyance',
      executantVendor: 'M/s Gulmohar Infratech Pvt. Ltd. (Rep by Director)',
      claimantPurchaser: 'Vikramaditya Sengupta',
      extentCovered: 'Flat 402 with 435.60 Sq. Ft. UDS + 1 Covered Car Park',
      originalProduced: true,
      verificationStatus: 'VERIFIED',
    },
  ],
  ecDetails: {
    ecNumber: 'EC/KVR/2026/89412',
    periodFrom: '1995-01-01',
    periodTo: '2026-10-25',
    issuingSro: 'Shivajinagar / Varthur SRO',
    nilOrEntries: 'ENTRIES_FOUND',
    details: 'Entries reflect original 1995 Sale Deed, 2016 JDA, 2017 Allocation Deed, and 2023 Sale Deed in favor of borrower. No subsisting mortgage or court attachment entries found.',
  },
  revenueRecordsScrutiny: {
    recordType: 'BBMP e-Aasthi e-Khata (A-Khata)',
    inWhoseName: 'Vikramaditya Sengupta',
    khataOrPattaNo: 'PID No. 150-W0084-29',
    mutationStatus: 'Duly mutated in municipal corporation records with latest property tax paid for assessment year 2026-27.',
  },
  projectApprovals: {
    reraRegNo: 'PRM/KA/RERA/1251/310/PR/170920/000941',
    planApprovalNo: 'BBMP/Addl.Dir/JDTP/LP/0248/2016-17',
    commencementCertNo: 'BBMP/CC/0114/2017-18',
    occupancyCertNo: 'BBMP/Addl.Dir/JDTP/OC/0082/2022-23 (Full OC Issued)',
    udsCalculatedSqFt: 435.6,
    flatSuperBuiltUpSqFt: 1450,
    udsPercentage: 0.4444,
  },
  qualificationsAndRemarks: [
    'Original Parent Sale Deed dated 12.04.1995 (Doc No. 1240/1995) has been deposited in original with the Bank.',
    'Full Occupancy Certificate (OC) issued by BBMP for the entire building has been scrutinized and verified with municipal records.',
    'CERSAI Asset Search report generated on 25.10.2026 confirms zero encumbrance or subsisting charge by any other bank/NBFC.',
    'Car parking slot marked as B-14 in the Basement is allotted as an appurtenant right to Flat No. 402, compliant with Supreme Court ruling in Nahalchand Laloochand.',
  ],
  finalOpinion: 'CLEAR_MARKETABLE',
};
