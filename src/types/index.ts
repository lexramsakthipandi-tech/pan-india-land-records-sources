/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type RiskLevel = 'CLEAR' | 'QUALIFIED' | 'DEFECTIVE' | 'HIGH_RISK';

export interface StatePortal {
  id: string;
  state: string;
  portalName: string;
  department: string;
  officialUrl: string;
  searchModes: string[];
  documentsProvided: string[];
  keyRecords: {
    titleProof: string;
    possessionRecord: string;
    mapRecord: string;
    numberingScheme: string;
  };
  ecSearchNotes: string;
  caveatsAndPitfalls: string[];
  digitalSignatureAccepted: boolean;
  yearsAvailableOnline: string;
}

export interface CentralLawTopic {
  id: string;
  actTitle: string;
  year: number;
  indiaCodeRef: string;
  category: 'TITLE_TRANSFER' | 'REGISTRATION' | 'STAMP_DUTY' | 'SUCCESSION' | 'EASEMENTS_LIMITATION' | 'BENAMI' | 'CORPORATE_IBC';
  crucialSections: {
    section: string;
    heading: string;
    legalTest: string;
    edgeCasesCovered: string[];
    bankScrutinyStandard: string;
  }[];
  lawyerCommentary: string;
  landmarkPrecedents: string[];
}

export interface LandTenureRestriction {
  id: string;
  category: 'AGRICULTURAL_CEILING' | 'SCHEDULED_LANDS' | 'GOVT_LAND' | 'LEASEHOLD_FREEHOLD' | 'ACQUISITION' | 'ENVIRONMENTAL';
  title: string;
  applicableStates: string;
  statutoryBasis: string;
  restrictionSummary: string;
  consequencesOfViolation: string;
  dueDiligenceChecklist: string[];
  sampleRedFlags: string[];
}

export interface StateLandVocabulary {
  state: string;
  region: string;
  titleProofRecord: string;
  titleProofDescription: string;
  possessionRecord: string;
  possessionDescription: string;
  mapRecord: string;
  mapDescription: string;
  numberingScheme: string;
  subdivisionMechanism: string;
  resurveyImpact: string;
  localAreaUnits: {
    unitName: string;
    inSqFt: number;
    inSqYards: number;
    notes: string;
  }[];
}

export interface ApartmentProjectScrutiny {
  id: string;
  stageName: string;
  issuingAuthority: string;
  requiredDocuments: string[];
  verificationProcedure: string;
  statutoryMandate: string;
  keyLegalRisks: string[];
}

export interface CourtPrecedent {
  id: string;
  caseName: string;
  citation: string;
  court: string;
  year: number;
  subject: string;
  ratioDecidendi: string;
  applicationInDueDiligence: string;
  reviewedChecklist: string;
}

export interface DecisionRule {
  id: string;
  situation: string;
  category: 'PARTITION' | 'POA' | 'WILL' | 'GIFT' | 'SUCCESSION' | 'MINOR' | 'CORPORATE' | 'AREA_MISMATCH' | 'RESURVEY' | 'SUB_PLOT' | 'MULTI_UNIT_JDA' | 'RESTRICTED_LAND';
  passesTitle: boolean | 'CONDITIONAL';
  whatPassesTitleRule: string;
  whatToAskReviewer: string[];
  howAppearsInScheduleAndChain: string;
  qualificationWording: string;
  riskRating: RiskLevel;
  statutoryProvisions: string[];
  governingPrecedents: string[];
}

export interface BankScrutinyGuideline {
  bankName: string;
  minSearchPeriodYears: number;
  cersaiMandate: boolean;
  mandatoryDocuments: string[];
  nonNegotiableRejections: string[];
  standardQualifications: {
    code: string;
    scenario: string;
    recommendedDrafting: string;
  }[];
}

export interface LSRReportData {
  reportNumber: string;
  dateOfReport: string;
  advocateName: string;
  barRegistrationNo: string;
  bankName: string;
  branchName: string;
  loanApplicationNo: string;
  borrowerName: string;
  propertyOwnerName: string;
  propertyAddress: string;
  surveyNumber: string;
  subDivisionNo: string;
  state: string;
  district: string;
  talukVillage: string;
  extentDeed: string;
  extentRevenue: string;
  extentUnit: string;
  boundaries: {
    north: string;
    south: string;
    east: string;
    west: string;
  };
  chainOfTitle: {
    serialNo: number;
    dateOfDocument: string;
    docNoAndYear: string;
    natureOfDeed: string;
    executantVendor: string;
    claimantPurchaser: string;
    extentCovered: string;
    originalProduced: boolean;
    verificationStatus: 'VERIFIED' | 'COPY_SCRUTINIZED' | 'UNREGISTERED_DEFECT';
  }[];
  ecDetails: {
    ecNumber: string;
    periodFrom: string;
    periodTo: string;
    issuingSro: string;
    nilOrEntries: 'NIL' | 'ENTRIES_FOUND';
    details: string;
  };
  revenueRecordsScrutiny: {
    recordType: string;
    inWhoseName: string;
    khataOrPattaNo: string;
    mutationStatus: string;
  };
  projectApprovals: {
    reraRegNo: string;
    planApprovalNo: string;
    commencementCertNo: string;
    occupancyCertNo: string;
    udsCalculatedSqFt: number;
    flatSuperBuiltUpSqFt: number;
    udsPercentage: number;
  };
  qualificationsAndRemarks: string[];
  finalOpinion: 'CLEAR_MARKETABLE' | 'SUBJECT_TO_CONDITIONS' | 'DEFECTIVE_NOT_RECOMMENDED';
}
