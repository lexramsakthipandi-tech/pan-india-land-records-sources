/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StateLandVocabulary } from '../types';

export const STATE_LAND_GLOSSARY: StateLandVocabulary[] = [
  {
    state: 'Tamil Nadu',
    region: 'South India',
    titleProofRecord: 'Registered Sale Deed / Settlement Deed (SRO) + Computerized Patta',
    titleProofDescription:
      'In Tamil Nadu, the Registered Conveyance Deed constitutes the primary instrument of title. The Patta issued by the Tahasildar certifies that the holder is recognized by the State as the revenue owner (Ryotwari holder).',
    possessionRecord: 'Patta & Chitta (e-Services Tamil Nadu)',
    possessionDescription:
      'Patta contains the Pattadar name, Patta Number, District, Taluk, Village, Survey Number, Sub-division, and Extent in Hectares/Ares. Chitta displays the classification of land (Nanja/Wet or Punja/Dry) and tax assessment.',
    mapRecord: 'Field Measurement Book (FMB) Sketch / TSLR Sketch',
    mapDescription:
      'FMB sketch records the precise boundary lines, ladder lines, tie lines, and offset measurements of each sub-divided survey field. In Corporation / Municipal areas, Town Survey Land Register (TSLR) sketch governs.',
    numberingScheme: 'Survey No. / Sub-division No. (e.g. 142/1A, 142/1B, 142/2). Urban: Ward, Block, Town Survey (T.S.) No.',
    subdivisionMechanism:
      'When land is sold in parts, an online application for Patta Transfer with Sub-division (Navin Patta) is filed. Revenue Surveyor inspects site, measures with FMB, assigns sub-division number (e.g. 142/1 -> 142/1A and 142/1B), and issues new Patta.',
    resurveyImpact:
      'The UDR (Updating Registry Scheme) conducted between 1979 and 1987 renumbered many survey fields and corrected errors. Legal due diligence must correlate Pre-UDR Survey Numbers with Post-UDR Survey Numbers to avoid missing ancestral claims.',
    localAreaUnits: [
      { unitName: 'Ground', inSqFt: 2400, inSqYards: 266.67, notes: 'Standard urban residential plot measurement in Chennai & suburban layouts.' },
      { unitName: 'Cent', inSqFt: 435.6, inSqYards: 48.4, notes: '1/100th of an Acre. Ubiquitous across Tamil Nadu and Kerala.' },
      { unitName: 'Acre', inSqFt: 43560, inSqYards: 4840, notes: 'Standard agricultural land measure (100 Cents).' },
      { unitName: 'Kuzhi / Kuzi', inSqFt: 144, inSqYards: 16, notes: 'Traditional agrarian measure in Tanjore and Madurai districts.' },
    ],
  },
  {
    state: 'Maharashtra',
    region: 'Western India',
    titleProofRecord: 'Registered Sale Deed with Index II + City Survey Property Card (Sanad)',
    titleProofDescription:
      'In Maharashtra, the Registered Deed accompanied by Index-II is the primary title document. For urban Mumbai, Pune, Nagpur, the City Survey Property Card (Malmatta Patrak) issued by Land Records department is conclusive proof of municipal holding.',
    possessionRecord: '7/12 Extract (Saat-Baara) & 8A Khata (Rural); Property Card (Urban)',
    possessionDescription:
      '7/12 Extract contains Village Form VII (Rights of Holders, Tenure, Encumbrances, Itar Hakka) and Village Form XII (Crop inspection and actual cultivator). Village Form 8A shows the total land holding and land revenue liability of the Khatedar.',
    mapRecord: 'Cadastral Map / K-Prat / Mojni Map',
    mapDescription:
      'Village Naksha and individual Mojni Sheet prepared by the Taluka Inspector of Land Records (TILR). Contains precise compass bearings and Gat boundaries.',
    numberingScheme: 'Gat Number / Survey Number & Hissa Number (e.g. Gat No. 45 Hissa No. 2). Urban: CTS No. (City Survey Number) / Final Plot (FP) No.',
    subdivisionMechanism:
      'Sub-division of a Gat or Survey number creates a new "Hissa". Must be formally surveyed by TILR through "Hissa Mojni" to prevent boundary overlap.',
    resurveyImpact:
      'Consolidation of Holdings (Ekatrikaran) converted old survey numbers into new "Gat Numbers". A Gat Book correlation extract is required to trace history prior to consolidation.',
    localAreaUnits: [
      { unitName: 'Guntha', inSqFt: 1089, inSqYards: 121, notes: '1/40th of an Acre. Standard unit across Maharashtra and Karnataka.' },
      { unitName: 'Acre', inSqFt: 43560, inSqYards: 4840, notes: 'Consists of 40 Gunthas.' },
      { unitName: 'Sq. Meter', inSqFt: 10.7639, inSqYards: 1.196, notes: 'Primary unit in urban Property Cards and development plans.' },
      { unitName: 'Bigha (Vidarbha)', inSqFt: 27225, inSqYards: 3025, notes: 'Used in eastern districts of Maharashtra (Vidarbha region).' },
    ],
  },
  {
    id: 'karnataka',
    state: 'Karnataka',
    region: 'South India',
    titleProofRecord: 'Registered Sale Deed with Kaveri Endorsement + A-Khata / e-Aasthi Certificate',
    titleProofDescription:
      'Registered Sale Deed under Kaveri 2.0. In BBMP / urban limits, A-Khata (Certificate and Extract issued under Section 114 of KMC Act) certifies municipal assessment and approved title.',
    possessionRecord: 'RTC (Record of Rights, Tenancy & Crops / Pahani) on Bhoomi',
    possessionDescription:
      'RTC contains 16 columns: Column 2 (Survey No & Hissa), Column 3 (Total Extent & Kharab), Column 9 (Owner name with mutation MR Number), Column 10 (Nature of acquisition), Column 11 (Other Rights / Bank Mortgages), Column 12 (Cultivator & Crop details).',
    mapRecord: 'Tippan / Akarband / Village Cadastral Map / 11E Sketch',
    mapDescription:
      'Tippan is the original survey measurement book. Akarband shows land revenue assessment. 11E Sketch is a pre-registration survey sketch mandatory for agricultural sub-divisions.',
    numberingScheme: 'Survey No. / Hissa No. (e.g. 45/2, 45/3A). Urban: Ward No. / Property Identification (PID) No. / e-Khata No.',
    subdivisionMechanism:
      'Sub-division is called "Phodi". Under modern Karnataka law, an applicant must obtain an 11E Sketch from the ADLR before registering a sale deed for a portion of a survey number.',
    resurveyImpact:
      'LRUP (Land Records Upgradation Project) and Resurvey operations re-allocated Durasti numbers. Any dispute between old survey number and durasti number requires verification of Wasoolbaqui register.',
    localAreaUnits: [
      { unitName: 'Guntha (Gunta)', inSqFt: 1089, inSqYards: 121, notes: '1/40th of an Acre. Universal in Karnataka layouts and farms.' },
      { unitName: 'Acre', inSqFt: 43560, inSqYards: 4840, notes: 'Consists of 40 Guntas.' },
      { unitName: 'Cent', inSqFt: 435.6, inSqYards: 48.4, notes: 'Commonly used in Dakshina Kannada & Udupi coastal districts.' },
    ],
  },
  {
    state: 'Telangana & Andhra Pradesh',
    region: 'South / Deccan',
    titleProofRecord: 'Registered Conveyance Deed + Dharani / Meebhoomi e-Pattadar Passbook',
    titleProofDescription:
      'In Telangana, registered sale deed is recorded in the Dharani integrated land ledger. In AP, Meebhoomi digital 1-B Record of Rights and electronic Pattadar Passbook confirm owner rights.',
    possessionRecord: 'Pahani (TS) / Adangal (AP) & 1-B Namuna',
    possessionDescription:
      'Pahani / Adangal records survey number, extent, pattadar name, enjoyer/possessor (Khabjadar) name, water source, and nature of rights. 1-B is the comprehensive ownership statement.',
    mapRecord: 'Village Cadastral Map / Tippan / FMB',
    mapDescription:
      'Cadastral maps prepared during Nizam era (in TS) or Madras Presidency survey (in AP) depicting traverse lines, field boundaries, and village boundaries.',
    numberingScheme: 'Survey No. / Sub-division / Khata Number (e.g. Sy No. 201/AA). Urban: Assessment No. / Door No.',
    subdivisionMechanism:
      'Mutation and sub-division on Dharani / Meebhoomi through online survey slot booking and issuance of new sub-division survey number.',
    resurveyImpact:
      'YSR Jagananna Bhu Hakku Bhu Raksha (AP Comprehensive Re-survey using drones and CORS network) is currently creating new Land Parcel Identification Numbers (LPIN).',
    localAreaUnits: [
      { unitName: 'Gunta', inSqFt: 1089, inSqYards: 121, notes: '40 Guntas = 1 Acre. Standard in Telangana & Rayalaseema.' },
      { unitName: 'Cent', inSqFt: 435.6, inSqYards: 48.4, notes: '100 Cents = 1 Acre. Universal in Coastal Andhra districts.' },
      { unitName: 'Sq. Yard (Gaj)', inSqFt: 9, inSqYards: 1, notes: 'Primary measurement unit for residential plots in Hyderabad/HMDA and Amaravati.' },
      { unitName: 'Ankanam', inSqFt: 72, inSqYards: 8, notes: 'Traditional unit in Nellore and Tirupati districts (1 Ankanam = 72 sq ft).' },
    ],
  },
  {
    state: 'Uttar Pradesh',
    region: 'North India',
    titleProofRecord: 'Registered Sale Deed (Bainama) + Khatauni (UP Bhulekh)',
    titleProofDescription:
      'Registered Sale Deed executed on stamp paper at Sub-Registrar office. Title is perfected in revenue records by obtaining "Dakhil Kharij" (Mutation) and recording the buyer\'s name in the Khatauni.',
    possessionRecord: 'Khatauni & Khasra (UP Revenue Code 2006)',
    possessionDescription:
      'Khatauni is the computerized Record of Rights containing 14 columns, including tenure category (Bhumidhar with transferable rights vs non-transferable), Khata number, Gata numbers, area, and orders of courts/tahasildar.',
    mapRecord: 'Bhu-Naksha / Aks Shajra',
    mapDescription:
      'Cloth map (Shajra) of the village showing exact boundary lines (Mendh), road paths, canals, and field numbers (Gata numbers).',
    numberingScheme: 'Gata Number / Khasra Number (e.g. Gata No. 250 min / saalim). Urban: Plot No. / Sector / Block.',
    subdivisionMechanism:
      'Partition of holding is conducted under Section 116 of UP Revenue Code 2006 through Sub-Divisional Officer (SDO/SDM). Khasra is then divided into sub-numbers.',
    resurveyImpact:
      'Chakbandi (Consolidation of Holdings) under UP Consolidation of Holdings Act 1953: Re-arranged fragmented plots into rectangular Chaks, generating CH-41 (Khasra Chakbandi) and CH-45 (Khatauni Chakbandi). Trace CH-23 to CH-45.',
    localAreaUnits: [
      { unitName: 'Pakka Bigha', inSqFt: 27225, inSqYards: 3025, notes: 'Standard Bigha in Western UP (Meerut, Aligarh, Bulandshahr). 1 Bigha = 20 Biswa.' },
      { unitName: 'Kaccha Bigha', inSqFt: 9075, inSqYards: 1008.33, notes: 'Exactly 1/3 of Pakka Bigha. Common in Rohilkhand and rural pockets.' },
      { unitName: 'Biswa (Pakka)', inSqFt: 1361.25, inSqYards: 151.25, notes: '1/20th of a Pakka Bigha.' },
      { unitName: 'Biswansi', inSqFt: 68.0625, inSqYards: 7.5625, notes: '1/20th of a Biswa.' },
      { unitName: 'Sq. Yard (Gaj)', inSqFt: 9, inSqYards: 1, notes: 'Standard unit for residential plots and circle rates.' },
    ],
  },
  {
    state: 'West Bengal',
    region: 'Eastern India',
    titleProofRecord: 'Registered Deed of Conveyance + L.R. Khatian (Porcha)',
    titleProofDescription:
      'Registered Deed of Conveyance under Registration Act. Mutation in Land & Land Reforms Department produces the Computerized L.R. Khatian confirming owner rights.',
    possessionRecord: 'L.R. Khatian & Plot (Daag) Information',
    possessionDescription:
      'Khatian contains Mouza, J.L. No., Khatian No., Raiyat name, Father/Husband name, share, land classification (Bastu, Sali, Danga, Pukur), and encumbrance remarks.',
    mapRecord: 'Mouza Sheet Map',
    mapDescription:
      'Cadastral settlement sheet maps of each Mouza depicting all Daags (plot boundaries), waterbodies, and village pathways.',
    numberingScheme: 'Mouza Name / J.L. No. / L.R. Khatian No. / L.R. Plot (Daag) No.',
    subdivisionMechanism:
      'Partition requires mutation application before Revenue Officer / BL&LRO (Block Land and Land Reforms Officer) who allocates a batta (sub-divided Daag) number.',
    resurveyImpact:
      'Historical Chain: Cadastral Survey (C.S. ~1920s) -> Revisional Survey (R.S. ~1950s) -> Land Reforms Survey (L.R. ~1980s). An advocate must check the "Correlation Register" linking C.S. Daag -> R.S. Daag -> L.R. Daag!',
    localAreaUnits: [
      { unitName: 'Bengal Bigha', inSqFt: 14400, inSqYards: 1600, notes: '1 Bigha = 20 Kathas = 3 Bighas make approximately 1 Acre.' },
      { unitName: 'Katha (Kottah)', inSqFt: 720, inSqYards: 80, notes: '1 Katha = 720 Sq. Ft. = 16 Chataks. Universal in Kolkata and suburbs.' },
      { unitName: 'Chatak', inSqFt: 45, inSqYards: 5, notes: '1/16th of a Katha. Smallest urban fractional measure.' },
      { unitName: 'Decimil (Satak)', inSqFt: 435.6, inSqYards: 48.4, notes: '1/100th of an Acre. Used in rural Bengal revenue records.' },
    ],
  },
  {
    state: 'Punjab & Haryana',
    region: 'North India',
    titleProofRecord: 'Registered Sale Deed (Vasika) + Sanctioned Inteqal (Mutation)',
    titleProofDescription:
      'Registered Sale Deed (Vasika) verified at Sub-Registrar/Tehsildar office. Title is reflected in the official Record of Rights through sanctioned mutation (Inteqal).',
    possessionRecord: 'Jamabandi & Khasra Girdawari',
    possessionDescription:
      'Jamabandi prepared quadrennially (every 4 years). Column 4 lists owner (Malik) and Column 5 lists cultivator (Kashtkar). Khasra Girdawari records biannual crop harvest and physical possessor.',
    mapRecord: 'Aks Shajra (Field Map) / Musavi',
    mapDescription:
      'Cloth map of the village showing rectangular Murabba and Killa plots, watercourses (Khaal), and village roads (Phirni).',
    numberingScheme: 'Murabba Number / Killa Number / Khasra Number (e.g. Murabba 45 Killa 12/2).',
    subdivisionMechanism:
      'Takseem (Partition) proceedings before Tehsildar / Assistant Collector 1st Grade under Punjab Land Revenue Act 1887. Mode of partition (Tariqa Takseem) divides Killas.',
    resurveyImpact:
      'Consolidation (Murabbabandi): Traditional irregular fields were converted into standardized 25-Acre squares (Murabbas) containing 25 Killas of 1 Acre each.',
    localAreaUnits: [
      { unitName: 'Kanal', inSqFt: 5445, inSqYards: 605, notes: '8 Kanals = 1 Acre. Universal in Punjab, Haryana, Himachal & J&K.' },
      { unitName: 'Marla', inSqFt: 272.25, inSqYards: 30.25, notes: '1/8th of a Kanal. 1 Marla = 9 Sarsahi.' },
      { unitName: 'Ghumao (Acre)', inSqFt: 43560, inSqYards: 4840, notes: 'Consists of 8 Kanals or 160 Marlas.' },
      { unitName: 'Biswa', inSqFt: 1361.25, inSqYards: 151.25, notes: 'Used in southern Haryana (Gurugram, Faridabad).' },
    ],
  },
  {
    state: 'Kerala',
    region: 'South India',
    titleProofRecord: 'Registered Janmam Deed / Sale Deed + Thandaper Account Certificate',
    titleProofDescription:
      'Registered conveyance deed registered at SRO. Perfected by revenue transfer (Pokkuvaravu) resulting in Thandaper Account issuance in the Village Office.',
    possessionRecord: 'Basic Tax Register (BTR) & Land Tax Receipt (Thandaper)',
    possessionDescription:
      'BTR records Old Survey No, Re-survey No, Block No, Thandaper No, Pattadar name, Extent in Hectares/Ares, and Land Classification (Nilam/Wet or Purayidam/Garden).',
    mapRecord: 'FMB (Field Measurement Book) Sketch & Re-survey Map',
    mapDescription:
      'Detailed field sketches showing tie lines and boundaries of individual sub-divisions.',
    numberingScheme: 'Re-survey No. / Sub-division / Block No. (Reconciled with Old Survey No.).',
    subdivisionMechanism:
      'Sub-division handled by Village Officer and Taluk Surveyor upon mutation application; allocates new sub-division slash number.',
    resurveyImpact:
      'Statewide Re-survey in Kerala has led to numerous discrepancies between Old Survey area and Re-survey area. Checking the "Correlation Register" (Wasoolbaqui) is non-negotiable.',
    localAreaUnits: [
      { unitName: 'Cent', inSqFt: 435.6, inSqYards: 48.4, notes: '1/100th of an Acre. Universal in Kerala.' },
      { unitName: 'Acre', inSqFt: 43560, inSqYards: 4840, notes: '100 Cents.' },
      { unitName: 'Perch', inSqFt: 272.25, inSqYards: 30.25, notes: 'Colonial measure occasionally found in Travancore plantation deeds.' },
    ],
  },
];
