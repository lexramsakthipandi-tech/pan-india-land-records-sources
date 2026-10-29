/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecisionRule, RiskLevel } from '../types';

export const PAN_INDIA_DECISION_RULES: DecisionRule[] = [
  {
    id: 'RULE_UNREGISTERED_PARTITION',
    situation: 'Partition deed executed on non-judicial stamp paper but unregistered, or a release deed that does not specifically describe/schedule the property.',
    category: 'PARTITION',
    passesTitle: false,
    whatPassesTitleRule:
      'Under Section 17(1)(b) of the Registration Act 1908, any instrument creating, declaring, assigning, limiting or extinguishing any right, title or interest in immovable property valued over Rs. 100 must be compulsorily registered. An unregistered partition deed DOES NOT pass title. However, an unregistered "Memorandum of Past Oral Family Settlement" (MoFS) that merely records an already consummated oral partition is admissible solely to establish severance of joint status, provided it does not create rights in praesenti (Kale v. Deputy Director of Consolidation, SC 1976). A release deed without plot schedule is void for uncertainty under Section 29 Indian Contract Act.',
    whatToAskReviewer: [
      'Is the document an actual deed of partition dividing property by metes and bounds in praesenti, or a mere memorandum recording a past oral family partition?',
      'Was the oral family partition followed by individual revenue mutation (Patta/Khata/7-12) in separate names for 12+ years without dispute?',
      'Demand registered Confirmation Deed or registered Deed of Partition signed by all surviving legal heirs.',
      'If release deed lacks schedule, demand a Registered Deed of Rectification incorporating complete schedule with 4 boundaries.',
    ],
    howAppearsInScheduleAndChain:
      'Chain must list the document as "Unregistered Partition/Settlement (Defective Chain)". Schedule cannot rely on this document for root of title until cured by registered confirmation deed or decree of civil court in a partition suit.',
    qualificationWording:
      'Subject to production and verification of Registered Partition Deed / Confirmation Deed executed by all coparceners/heirs. The unregistered partition deed dated [DATE] is hit by Section 49 of the Registration Act 1908 and cannot be relied upon to prove exclusive title in the vendor.',
    riskRating: 'HIGH_RISK',
    statutoryProvisions: ['Registration Act 1908 Sec 17(1)(b)', 'Registration Act 1908 Sec 49', 'Indian Contract Act 1872 Sec 29'],
    governingPrecedents: [
      'Kale v. Deputy Director of Consolidation (1976 3 SCC 119)',
      'Subraya M.N. v. Vittala M.N. (2016 8 SCC 705)',
      'Sita Ram Bhama v. Ramvatar Bhama (2018 15 SCC 130)',
    ],
  },
  {
    id: 'RULE_GPA_SALE_SURAJ_LAMP',
    situation: 'Property sold or purchased via General Power of Attorney (GPA), Agreement to Sell (ATS) and Will (colloquially SA-GPA-WILL transfer).',
    category: 'POA',
    passesTitle: false,
    whatPassesTitleRule:
      'Under the landmark Supreme Court ruling in Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana (2012 1 SCC 656) and reaffirmed in Shakeel Ahmed v. Syed Akhlaq Hussain (2023 INSC 965), an Agreement for Sale or a General Power of Attorney DOES NOT convey any title or interest in immovable property. Title passes ONLY by a duly stamped and registered Deed of Conveyance (Section 54 TPA). A GPA holder can execute a registered sale deed on behalf of the principal only if the GPA is registered and remains unrevoked at the date of execution.',
    whatToAskReviewer: [
      'Has the principal died prior to the execution of the sale deed? (Death of principal terminates GPA under Section 201 Contract Act).',
      'Was the GPA registered under Section 32/33 of the Registration Act, and does it contain specific, unequivocal powers to alienate/sell and receive consideration?',
      'Has the GPA been revoked by notice or public advertisement prior to deed execution?',
      'Is the transaction an indirect sale where vendor claims title solely under a GPA and ATS without a registered conveyance?',
    ],
    howAppearsInScheduleAndChain:
      'If conveyance was executed by registered GPA holder during principal lifetime with explicit authority: "Conveyance executed by [A] through his registered GPA agent [B] vide GPA Doc No. [X]". If title is claimed solely on GPA/ATS: Mark as "FATAL DEFECT - No Legal Title Transferred".',
    qualificationWording:
      'Title claimed under General Power of Attorney / Agreement to Sell without registered conveyance deed is defective and invalid in law under Suraj Lamp (2012 1 SCC 656). Bank cannot accept mortgage without regular registered conveyance deed executed by original title holder.',
    riskRating: 'DEFECTIVE',
    statutoryProvisions: ['Transfer of Property Act 1882 Sec 54', 'Indian Contract Act 1872 Sec 201', 'Registration Act 1908 Sec 32, 33'],
    governingPrecedents: [
      'Suraj Lamp & Industries v. State of Haryana (2012 1 SCC 656)',
      'Shakeel Ahmed v. Syed Akhlaq Hussain (2023 INSC 965)',
      'Ghanshyam v. Yogendra Rathi (2023 7 SCC 361)',
    ],
  },
  {
    id: 'RULE_WILL_WITHOUT_PROBATE',
    situation: 'Vendor claims title under an unregistered or registered Will executed by deceased owner, without obtaining probate or letters of administration.',
    category: 'WILL',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'Under Section 213 read with Section 57 of the Indian Succession Act 1925, probate or Letters of Administration is MANDATORY ONLY if the Will is made by a Hindu, Buddhist, Sikh or Jaina within the local limits of the ordinary original civil jurisdiction of High Courts of Calcutta, Madras, or Bombay (Presidency Towns), or if the immovable property situated within these limits. Outside presidency towns (e.g. Bangalore, Hyderabad, Delhi, UP), probate is NOT compulsory. However, a Will does not confer absolute marketable title unless all class-I legal heirs provide registered consent/NOC or affadavits disclaiming rights.',
    whatToAskReviewer: [
      'Is the property situated within the jurisdiction of Mumbai, Chennai, or Kolkata? If YES, probate is legally mandatory; absence of probate is a fatal title defect.',
      'If situated outside presidency towns: Have all class-I legal heirs who would inherit on intestacy executed a Registered Relinquishment Deed / Release Deed?',
      'Is there any probate revocation or civil dispute filed questioning the testamentary capacity or execution of the Will?',
      'Demand death certificate of testator, original Will, and Tahasildar Legal Heir Certificate of the deceased testator.',
    ],
    howAppearsInScheduleAndChain:
      'Listed as: "Devolution under Will dated [DATE] executed by deceased [NAME] in favour of [BENEFICIARY]. (Subject to Probate in Presidency Towns / Release Deeds from excluded legal heirs)".',
    qualificationWording:
      'Subject to obtaining Probate of the Will dated [DATE] from the competent City Civil/High Court [if in presidency town] OR Subject to all surviving Class-I legal heirs executing registered release/relinquishment deed confirming non-challenge to the Will.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Indian Succession Act 1925 Sec 57', 'Indian Succession Act 1925 Sec 213', 'Indian Succession Act 1925 Sec 63'],
    governingPrecedents: [
      'Clarence Pais v. Union of India (2001 4 SCC 325)',
      'Kanta Yadav v. Om Prakash Yadav (2020 14 SCC 102)',
      'Alagammal v. Ganesan (2024 INSC 38)',
    ],
  },
  {
    id: 'RULE_GIFT_EXCLUDING_HEIRS',
    situation: 'Father/Mother gifts ancestral or self-acquired property to one child, completely excluding other sons and daughters.',
    category: 'GIFT',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'Self-Acquired Property: An absolute owner has untrammeled right to gift self-acquired property to any one child under Section 122 TPA, provided the gift deed is registered (Sec 123) and accepted during donor lifetime. Excluded heirs have NO legal claim. Ancestral / Coparcenary Property: A Hindu coparcener CANNOT gift his undivided coparcenary interest without consent of all other coparceners (including daughters post-2005 amendment), except for pious purposes of small value. A gift of entire ancestral property to one child is voidable at the instance of excluded coparceners.',
    whatToAskReviewer: [
      'Was the subject property the self-acquired property of the donor (trace source of purchase consideration), or inherited ancestral property?',
      'Was the gift accepted during donor\'s lifetime and possession delivered (mutated in revenue records)?',
      'Does the gift deed contain any revocation clause or condition under Senior Citizens Act (Maintenance and Welfare of Parents and Senior Citizens Act 2007 Sec 23)?',
      'If ancestral, did all coparceners (sons and daughters) join in the deed as consenting witnesses or co-executants?',
    ],
    howAppearsInScheduleAndChain:
      'If self-acquired: "Clear title via Registered Gift Deed Doc No. [X] dated [Y]". If ancestral: "Defective title / voidable at instance of excluded coparceners".',
    qualificationWording:
      'Verification of the nature of acquisition by donor is required. If ancestral property, excluded legal heirs retain coparcenary interest under Section 6 HSA; deed must be confirmed by all legal heirs.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Transfer of Property Act 1882 Sec 122, 123', 'Hindu Succession Act 1956 Sec 6', 'Senior Citizens Act 2007 Sec 23'],
    governingPrecedents: [
      'Vineeta Sharma v. Rakesh Sharma (2020 9 SCC 1)',
      'S. Sudarshan v. S. Ruckmangathan (2019 SC)',
      'Sudesh Chhikara v. Ramti Devi (2022 SC - Senior Citizens Act)',
    ],
  },
  {
    id: 'RULE_INTESTATE_NO_SUCCESSION_CERT',
    situation: 'Owner died intestate (without will). Surviving spouse and children claim title without Succession Certificate / Legal Heir Certificate.',
    category: 'SUCCESSION',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'Under Hindu Succession Act 1956 Section 8 & 10, property of a male intestate devolves simultaneously upon all Class-I heirs (widow, mother, sons, daughters). Note that a Succession Certificate under Section 370 of Indian Succession Act is issued ONLY for movable debts and securities, NOT for immovable property! For immovable property, the recognized documents are: (1) Tahasildar / Revenue Authority Surviving Legal Heirship Certificate, (2) Family Tree (Vamsha Vriksha) authenticated by Revenue Inspector, and (3) Registered Partition or Release Deed among all Class-I heirs. Absence of all heirs in the sale renders title defective for the missing shares.',
    whatToAskReviewer: [
      'Did the deceased leave a surviving mother? (Mother is a Class-I heir alongside widow and children).',
      'Have any daughters been omitted from the legal heir certificate?',
      'Are all surviving Class-I heirs joining as vendors in the conveyance deed?',
      'Obtain Revenue Legal Heir Certificate, Death Certificate, and an indemnity bond with paper publication.',
    ],
    howAppearsInScheduleAndChain:
      'Devolution by intestate succession from deceased [NAME] onto Class-I legal heirs [LIST ALL HEIRS]. All must join as vendors.',
    qualificationWording:
      'Subject to all Class-I legal heirs joining as co-executants in the conveyance deed. In the absence of any heir, their undivided share remains unconveyed and constitutes a subsisting title cloud.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Hindu Succession Act 1956 Sec 8, 9, 10', 'Indian Succession Act 1925 Sec 370'],
    governingPrecedents: [
      'Vineeta Sharma v. Rakesh Sharma (2020 9 SCC 1)',
      'Arunachala Gounder v. Ponnusamy (2022 11 SCC 520)',
    ],
  },
  {
    id: 'RULE_MINOR_UNDIVIDED_SHARE',
    situation: 'Property owned by or standing in the name of a minor, or minor has an undivided coparcenary interest.',
    category: 'MINOR',
    passesTitle: false,
    whatPassesTitleRule:
      'Under Section 8(2) of the Hindu Minority and Guardianship Act 1956, the natural guardian (father/mother) CANNOT, without the prior permission of the City Civil Court / District Court, sell, mortgage, gift or exchange any part of the immovable property of the minor. Any disposal of immovable property by a natural guardian in contravention of Section 8(2) is VOIDABLE at the instance of the minor within 3 years of attaining majority (Limitation Act Article 60). Exception: In joint family undivided property, Karta can alienate joint property for legal necessity or benefit of estate without court permission, but high scrutiny applies.',
    whatToAskReviewer: [
      'Is the property standing exclusively in the minor\'s name? If YES, obtaining District Court permission under Guardians and Wards Act 1890 / HMGA Section 8 is ABSOLUTELY MANDATORY.',
      'If joint family property alienated by Karta: Is there demonstrable, documentary proof of legal necessity (e.g. paying ancestral debt, medical emergency, educational expense)?',
      'Has the minor attained majority? If yes, did 3 years lapse without challenge, or can the attained major execute a Registered Ratification Deed?',
    ],
    howAppearsInScheduleAndChain:
      'Must state: "Conveyance executed on behalf of minor [NAME] by natural guardian pursuant to Court Order dated [DATE] in Misc Pet No. [X] passed by [COURT]".',
    qualificationWording:
      'Sale of minor\'s exclusive immovable property without prior court permission under Section 8(2) HMGA 1956 is voidable. Bank scrutiny must reject title unless court sanction order is produced.',
    riskRating: 'DEFECTIVE',
    statutoryProvisions: ['Hindu Minority and Guardianship Act 1956 Sec 8', 'Guardians and Wards Act 1890', 'Limitation Act 1963 Art 60'],
    governingPrecedents: [
      'Saroj v. Sunder Singh (2014 15 SCC 727)',
      'Narayanan v. Sapurna (2020 9 SCC 613)',
    ],
  },
  {
    id: 'RULE_CORPORATE_VENDOR_CHARGE',
    situation: 'Property being sold by a Private Limited / Public Limited Company, Trust, LLP, or entity undergoing Corporate Insolvency Resolution (CIRP).',
    category: 'CORPORATE',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'Companies Act 2013: Under Section 180(1)(a), the Board of Directors of a company cannot sell, lease or dispose of the whole or substantially the whole of the undertaking without consent by a SPECIAL RESOLUTION passed by shareholders in a General Meeting. Furthermore, under Section 77/82, any mortgage/charge created on the company asset must be registered on MCA portal (Form CHG-1/CHG-4). Search of MCA portal (Index of Charges) is non-negotiable. IBC 2016: If CIRP initiated under Section 7/9/10, Section 14 imposes an absolute MORATORIUM on transferring corporate debtor assets. Only the Resolution Professional / Liquidator can sell under IBC regulations.',
    whatToAskReviewer: [
      'Demand MCA Index of Charges search report for the vendor company confirming nil charges or satisfaction of previous bank charges (Form CHG-4 / Certificate of Satisfaction).',
      'Obtain Certified Copy of Board Resolution and Shareholders\' Special Resolution under Section 180(1)(a) with extract of Articles of Association.',
      'Check IBBI / NCLT portal to confirm vendor company is not under Section 14 IBC moratorium or winding up petition.',
      'For Trusts: Verify Trust Deed under Section 47 Indian Trusts Act to verify power of alienation; if charitable trust, Charity Commissioner sanction under state Public Trusts Act is mandatory.',
    ],
    howAppearsInScheduleAndChain:
      'Conveyance executed by [COMPANY] through its authorized director [NAME] pursuant to Board Resolution dated [DATE] and Special Resolution dated [DATE], free of MCA charges.',
    qualificationWording:
      'Subject to production of MCA-21 Charge Search Report showing zero encumbrances, certified extract of Section 180(1)(a) Special Resolution, and search on NCLT / IBBI portal ruling out CIRP proceedings.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Companies Act 2013 Sec 180(1)(a)', 'Companies Act 2013 Sec 77, 82', 'Insolvency and Bankruptcy Code 2016 Sec 14, 32A'],
    governingPrecedents: [
      'Tata Consultancy Services v. Cyrus Investments (SC 2021)',
      'Manish Kumar v. Union of India (2021 5 SCC 1 - IBC)',
    ],
  },
  {
    id: 'RULE_AREA_AND_SURVEY_MISMATCH',
    situation: 'Area described in Sale Deed differs from area recorded in Patta/Khata/7-12, or Survey Number was renumbered during Resurvey / UDR.',
    category: 'AREA_MISMATCH',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'Discrepancy Law: If deed area > revenue area, vendor cannot pass better title than authorized by revenue record, and purchaser faces possession dispute for the excess. If deed area < revenue area, vendor passed only the deed extent. Under established law (Roy & Co v. Thakurani; Ram Niwas v. Bano), where boundaries are clear and specific, the boundaries control and prevail over erroneous area measurements. Resurvey: During village resurvey (UDR in TN, Resurvey in KL/KA/MH), old survey numbers are reallocated new survey/sub-division numbers. A Correlation Certificate / Resurvey Cross-Reference Extract from Tahasildar is legally necessary to link the chains.',
    whatToAskReviewer: [
      'Are the four boundaries (North, South, East, West) intact and matched on ground with neighboring owners?',
      'Is the variance within surveying tolerance (<= 1%)? If yes, apply "boundaries prevail over extent" rule.',
      'If variance > 1%, has a Joint Inspection Mahazar and Survey sketch from Taluk Surveyor been produced?',
      'If survey number changed, obtain Resurvey Correlation Certificate (Kagaz-e-Milaap / UDR Correlation Register) from the revenue department.',
    ],
    howAppearsInScheduleAndChain:
      'Schedule must explicitly state both Old Survey No. and New Resurvey No., specifying deed extent, revenue extent, and recital that boundaries govern.',
    qualificationWording:
      'Subject to production of Resurvey Correlation Certificate from Tahasildar reconciling Old Sy No. [X] with New Sy No. [Y]. Boundaries described in Deed Doc No. [Z] shall govern the extent on ground.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Indian Evidence Act 1872 Sec 95, 97', 'Transfer of Property Act 1882 Sec 8'],
    governingPrecedents: [
      'Dinesh Kumar v. State of Haryana (SC)',
      'Subbanna v. Thimmakka (Karnataka HC)',
    ],
  },
  {
    id: 'RULE_PORTION_OF_LARGER_SURVEY',
    situation: 'Purchased a specific plot / piece of land carved out of a larger survey number without an official sub-division sketch (e.g. 1 Acre out of 5 Acres).',
    category: 'SUB_PLOT',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'A sale of an undivided portion of a larger survey number without sub-division merely confers status of a co-owner in common; it does NOT confer exclusive title or right to any specific demarcated portion on the ground! Under Section 44 TPA, a purchaser of a share acquires only the transferor\'s right to joint possession and to enforce partition. To establish clear, unencumbered exclusive title to a demarcated plot, there MUST be: (1) An approved layout plan from DTCP/BMRDA/HMDA/Town Planning, or (2) An official sub-division order and sketch (11E sketch in KA, FMB sub-division in TN, Hissa sketch in MH).',
    whatToAskReviewer: [
      'Has the revenue authority carried out formal "Phodi" / sub-division assigning a distinct sub-number (e.g. 42/1A)?',
      'Is there an approved 11E sketch / FMB sub-division sketch signed by the ADLR/Surveyor?',
      'Does the vendor possess exclusive, fenced physical possession with clear boundaries acknowledged by all co-sharers?',
      'If no sub-division exists, demand Partition Deed or Joint Demarcation Mahazar among all co-owners of the parent survey number.',
    ],
    howAppearsInScheduleAndChain:
      'Chain must qualify: "Undivided portion out of parent Sy No. [X] - Pending Phodi/Sub-division". Title becomes marketable only upon issuance of separate sub-division record.',
    qualificationWording:
      'The subject property is an un-subdivided portion of parent Survey No. [X]. Exclusive title cannot be guaranteed against co-sharers until official revenue sub-division (Phodi / 11E / FMB) is completed and individual Khata/Patta is issued.',
    riskRating: 'QUALIFIED',
    statutoryProvisions: ['Transfer of Property Act 1882 Sec 44', 'State Land Revenue Codes'],
    governingPrecedents: [
      'Ramdas v. Sitabai (2009 7 SCC 444)',
      'T. Lakshmipathi v. P. Nithyananda Reddy (2003 5 SCC 150)',
    ],
  },
  {
    id: 'RULE_MULTI_FLAT_BUILDER_JDA',
    situation: 'Apartment unit purchased in a multi-story building constructed on parent land under a Joint Development Agreement (JDA) with Power of Attorney.',
    category: 'MULTI_UNIT_JDA',
    passesTitle: 'CONDITIONAL',
    whatPassesTitleRule:
      'In a development project, title flows from: (1) Parent Land Title -> (2) Registered JDA -> (3) Registered General Power of Attorney -> (4) Supplementary Allocation / Sharing Agreement -> (5) RERA Registration & Sanctioned Plan -> (6) Tripartite / Builder Conveyance Deed with proportionate UDS. Crucial legal tests: (a) Does the flat fall under the Developer Share or Landowner Share in the registered Allocation Agreement? If developer sells a landowner-share flat, sale is NULL AND VOID without landowner joining. (b) Is UDS correctly calculated? (c) Has Full Occupancy Certificate (OC) been issued?',
    whatToAskReviewer: [
      'Inspect Registered Supplementary Allocation Deed / Area Sharing Agreement. Confirm whether unit [FLAT NO] is allotted to Developer or Landowner.',
      'If flat is in Landowner share, did Landowner sign the deed or execute a specific registered POA?',
      'Inspect RERA Project Registration on state RERA portal. Check quarterly compliance reports and project completion date.',
      'Inspect Sanctioned Building Plan, Commencement Certificate (CC) and Full Occupancy Certificate (OC). Verify no deviation beyond permissible compounding limit.',
      'Check UDS allocation math: Does total allocated UDS of all flats equal exactly 100% of parent land area?',
      'Verify that car parking is not sold as an independent open unit (Nahalchand Laloochand judgment).',
    ],
    howAppearsInScheduleAndChain:
      'Schedule A: Entire parent land; Schedule B: Proportionate Undivided Share of Land (UDS) conveyed; Schedule C: Super built-up apartment flat with designated car park.',
    qualificationWording:
      'Subject to verification of Registered Allocation Deed confirming vendor\'s entitlement to Unit [X], RERA active registration status, and production of Full Occupancy Certificate (OC) issued by competent planning authority.',
    riskRating: 'CLEAR',
    statutoryProvisions: ['RERA Act 2016 Sec 3, 4, 11, 14', 'State Apartment Ownership Acts', 'Transfer of Property Act 1882 Sec 54'],
    governingPrecedents: [
      'Nahalchand Laloochand v. Panchali Co-op Hsg Soc (2010 9 SCC 536)',
      'Bikram Chatterji v. Union of India (2019 SC - Amrapali)',
      'Newtech Promoters and Developers v. State of UP (2021 SC)',
    ],
  },
  {
    id: 'RULE_SC_ST_RESTRICTED_LAND',
    situation: 'Land originally granted by Government to persons belonging to Scheduled Castes / Scheduled Tribes (e.g. PTCL Act in KA, Panchami in TN, Sec 36A in MH).',
    category: 'RESTRICTED_LAND',
    passesTitle: false,
    whatPassesTitleRule:
      'Alienation of granted/assigned land is governed by strict non-alienation statutory regimes (Karnataka PTCL Act 1978, Tamil Nadu Panchami Land Rules, Maharashtra Land Revenue Code Sec 36A, Rajasthan Tenancy Act Sec 42, UP Revenue Code Sec 157A). ANY alienation without prior statutory sanction from the District Collector / Government is NULL AND VOID AB INITIO. The limitation act does not protect purchasers; the government / Assistant Commissioner has summary powers to resume the land and restore it to the original grantee heirs without compensation, even after 30-50 years!',
    whatToAskReviewer: [
      'Check original grant order / Saguvali Chit / Darkhast register for condition of non-alienation (permanent or 15-year ban).',
      'Was prior written permission from the State Government / District Collector obtained prior to sale?',
      'Search revenue registers for terms like "SC/ST Grant", "Panchami", "Depressed Class Land", "Inam Grant", "Thoti / Talawari Inam".',
      'If granted land, title is permanently defective for commercial/bank mortgage unless valid Collector exemption exists.',
    ],
    howAppearsInScheduleAndChain:
      'FATAL RED FLAG: "Origin of title is Government Grant to SC/ST. Sale void under special alienation act". Title cannot be accepted.',
    qualificationWording:
      'FATAL DEFECT: Property is hit by statutory prohibition on transfer of granted/assigned lands. Title is liable for summary resumption under special state protection acts. Bank must reject the property.',
    riskRating: 'HIGH_RISK',
    statutoryProvisions: ['Karnataka PTCL Act 1978', 'Maharashtra Land Revenue Code Sec 36A', 'Rajasthan Tenancy Act Sec 42', 'Constitution of India Art 244'],
    governingPrecedents: [
      'Manchegowda v. State of Karnataka (1984 3 SCC 301)',
      'Nekkanti Rama Lakshmi v. State of Karnataka (2020 14 SCC 232)',
      'Satyan v. Deputy Commissioner (2020 14 SCC 285)',
    ],
  },
];

export function findMatchingDecisionRules(category?: string, searchTerm?: string): DecisionRule[] {
  return PAN_INDIA_DECISION_RULES.filter((rule) => {
    const matchesCat = !category || category === 'ALL' || rule.category === category;
    const matchesSearch =
      !searchTerm ||
      rule.situation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.whatPassesTitleRule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rule.statutoryProvisions.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
      rule.governingPrecedents.some((pr) => pr.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });
}
