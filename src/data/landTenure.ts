/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LandTenureRestriction } from '../types';

export const LAND_TENURE_DATA: LandTenureRestriction[] = [
  {
    id: 'TENURE_AGRI_CONVERSION',
    category: 'AGRICULTURAL_CEILING',
    title: 'Agricultural Land Non-Agricultural (NA) Conversion & Ceiling Laws',
    applicableStates: 'All States (Maharashtra, Karnataka, UP, Gujarat, Tamil Nadu, Telangana, etc.)',
    statutoryBasis:
      'State Land Revenue Codes (e.g., Sec 44 Maharashtra Land Revenue Code; Sec 95 Karnataka Land Revenue Act; Sec 80 UP Revenue Code; Sec 65 Gujarat Land Revenue Code; Tamil Nadu Town & Country Planning Act).',
    restrictionSummary:
      'Agricultural land cannot be put to non-agricultural (residential, commercial, or industrial) use without obtaining an official order of conversion from the competent authority (District Collector / Sub-Divisional Magistrate / Deputy Commissioner). In many states (Maharashtra, Gujarat, previously Karnataka), non-agriculturists are statutorily barred from purchasing agricultural land without prior permission.',
    consequencesOfViolation:
      'Unauthorized conversion invites penal land revenue, demolition of structures, and in severe cases, vesting of the land in the State Government under tenancy/reform enactments without compensation. Building plans approved on un-converted agricultural land are illegal.',
    dueDiligenceChecklist: [
      'Demand original Official Conversion Order issued by the Deputy Commissioner / Collector.',
      'Verify Challan payment of NA conversion premium / fine / development charges.',
      'Check if Conversion Order contains restrictive conditions (e.g., must construct within 2 years, or restricted to specific industrial use).',
      'Verify that mutation has been effected from Agricultural Pahani/7-12 to Non-Agricultural Khata / Property Card.',
      'Confirm land ceiling declaration: Vendor holding does not violate state agricultural land ceiling limits.',
    ],
    sampleRedFlags: [
      'Residential layout developed on land still shown as "Dry / Wet Agriculture" in RTC / 7-12 / Khatauni.',
      'Conditional conversion order where development lapsed due to non-commencement within stipulated period.',
      'Purchase by a software company or private firm of agricultural land without Section 109 / Section 63 exemption.',
    ],
  },
  {
    id: 'TENURE_SC_ST_ASSIGNED',
    category: 'SCHEDULED_LANDS',
    title: 'Scheduled Castes / Scheduled Tribes Granted Land (PTCL, Panchami, Sec 36A)',
    applicableStates: 'Karnataka (PTCL Act), Tamil Nadu (Panchami), Maharashtra (Sec 36A MLRC), Rajasthan (Sec 42), UP (Sec 157A/98), AP/TS (POT Act 1977)',
    statutoryBasis:
      'Karnataka PTCL Act 1978; Tamil Nadu Land Administration Standing Orders (Panchami); Maharashtra Land Revenue Code Sec 36A; Rajasthan Tenancy Act Sec 42; UP Revenue Code 2006 Sec 98; Andhra Pradesh Assigned Lands (POT) Act 1977.',
    restrictionSummary:
      'Lands assigned or granted by the Government to Depressed Classes, Scheduled Castes, or Scheduled Tribes carry a permanent statutory prohibition or strict conditional embargo against alienation to non-SC/ST individuals. Any transfer executed without prior written sanction of the State Government / District Collector is declared NULL AND VOID AB INITIO.',
    consequencesOfViolation:
      'The Assistant Commissioner / Collector has statutory powers to initiate suo-motu resumption proceedings, evict the purchaser without compensation, and restore the land to the original grantee or their legal heirs. Limitation Act does not cure title even after 30 to 50 years!',
    dueDiligenceChecklist: [
      'Trace root of title to the original Government Grant Order / Saguvali Chit / Darkhast Register.',
      'Check if the original grantee belonged to SC/ST or Depressed Class community.',
      'Verify whether prior written permission of the State Government was obtained prior to executing the conveyance.',
      'Check if the land appears in the Section 22A Prohibited Properties List on the registration department portal.',
      'In Karnataka, ensure non-applicability of PTCL Act by obtaining an official Non-PTCL Endorsement from the Assistant Commissioner.',
    ],
    sampleRedFlags: [
      'Pahani / RTC contains remarks like "SC Grant", "Darkhast", "Saguvali Chit", "Panchami", or "Harijan Allotment".',
      'Gaps in the chain where land was acquired cheaply from rural communities in 1970s-1990s without government sanction.',
      'Pending proceedings before the Assistant Commissioner / Revenue Divisional Officer for cancellation of sale deeds.',
    ],
  },
  {
    id: 'TENURE_GOVT_PORAMBOKE_INAM',
    category: 'GOVT_LAND',
    title: 'Government Lands, Poramboke, Gairan, Gram Sabha & Inam Abolition Lands',
    applicableStates: 'All States (TN Poramboke, MH Gairan/Gauchar, UP Gram Sabha, KA Government Kharab, TS/AP Kharij Khata)',
    statutoryBasis:
      'State Land Revenue Codes; Inam Abolition Acts (e.g. Karnataka Personal and Certain Miscellaneous Inams Abolition Act 1954; TN Inam Abolition Acts); Supreme Court ruling in Jagpal Singh v. State of Punjab (2011).',
    restrictionSummary:
      'Common communal lands belonging to the State or Village Community—such as Grazing pasture (Gairan/Gauchar/Gomal), Waterbodies (Eri, Kulam, Pokhari, Tank), Village common roads, and Poramboke/Kharab land—cannot be transferred, gifted, or encroached by private individuals. Under Inam Abolition Acts, inam land vest in the State, and only an occupant who was granted a formal Ryotwari Patta / Occupancy Right by the Special Deputy Commissioner acquires title.',
    consequencesOfViolation:
      'Immediate demolition, eviction under Public Premises Eviction Acts, criminal trespass prosecution, and cancellation of pattas. Supreme Court in Jagpal Singh directed all State Governments to ruthlessly evict all encroachers of Gram Sabha / common lands.',
    dueDiligenceChecklist: [
      'Check Classification column in A-Register / 7-12 / Khatauni / Jamabandi for words like "Sarkari", "Gairan", "Kharab-A/B", "Poramboke", "Gram Sabha", or "Shamilat Deh".',
      'For Kharab land in Karnataka: "A-Kharab" (unfit for agriculture but belongs to owner) vs "B-Kharab" (public utility land belonging to Government that can NEVER be alienated).',
      'For Inam lands: Demand production of Certified Copy of the Inam Abolition Land Tribunal Order granting Occupancy Rights / Form 7A / Form 10.',
      'Inspect FMB sketch and Bhu-Naksha to verify no lake/stream/cart-track buffer encroachment.',
    ],
    sampleRedFlags: [
      'Property built on or adjacent to lakes, streams, rajanevele (stormwater drains), or water catchment areas.',
      'Vendor producing an unregistered patta from a local village Panchayat head without Tahasildar backing.',
      'Layout roads or open spaces carved out of "B-Kharab" or "Gairan" land.',
    ],
  },
  {
    id: 'TENURE_DEVELOPMENT_AUTHORITY',
    category: 'LEASEHOLD_FREEHOLD',
    title: 'Development Authority Leasehold Lands & Freehold Conversion',
    applicableStates: 'Delhi (DDA), Maharashtra (MHADA, CIDCO), Karnataka (BDA, KIADB), UP (NOIDA, Greater NOIDA, YEIDA), Haryana (HSVP/HUDA)',
    statutoryBasis:
      'Delhi Development Act 1957; Maharashtra Housing and Area Development Act 1976; New Bombay Disposal of Land Regulations (CIDCO); Karnataka Industrial Areas Development Act 1966.',
    restrictionSummary:
      'Properties allotted by urban development authorities (DDA, CIDCO, MHADA, NOIDA, KIADB) are initially leased on 99-year or 30-year leasehold basis. The allottee is a lessee, NOT an absolute owner. Sale or assignment requires: (1) Authority Transfer Permission / NOC, (2) Payment of Unearned Increase (typically 50% of the difference between original premium and market price), or (3) Formal conversion to Freehold via execution and registration of a Conveyance Deed.',
    consequencesOfViolation:
      'The authority can cancel the allotment, forfeit premiums, and re-enter upon the land. Transfer through GPA or unregistered agreements confers zero title and leaves property vulnerable to seal/cancellation.',
    dueDiligenceChecklist: [
      'Verify original Allotment Letter, Possession Letter, and Registered Perpetual Lease Deed.',
      'Check if the lease has been converted into FREEHOLD by production of Registered Conveyance Deed executed by the Authority.',
      'If still leasehold: Has the Authority granted written Transfer Permission? Have ground rent and unearned increase dues been fully paid?',
      'In NOIDA / Greater NOIDA: Verify Tripartite Sub-Lease Deed and check that developer has cleared full land dues with NOIDA Authority (preventing registry freeze).',
      'In KIADB industrial lands: Check if 10-year lock-in period has expired and absolute sale deed has been executed by KIADB.',
    ],
    sampleRedFlags: [
      'Property sold on GPA without DDA Conveyance Deed.',
      'NOIDA flat where builder has defaulted on thousands of crores to the Authority, preventing registration of sub-lease deeds for buyers.',
      'Industrial plot used for residential or commercial activities without Change of Land Use (CLU) approval.',
    ],
  },
  {
    id: 'TENURE_LAND_ACQUISITION',
    category: 'ACQUISITION',
    title: 'Land Acquisition Clouds (RFCTLARR Act 2013, Section 11 & 19 Notifications)',
    applicableStates: 'All States (Central Act 30 of 2013 and State Acquisition Rules)',
    statutoryBasis:
      'Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 (RFCTLARR); National Highways Act 1956; Metro Railways Act.',
    restrictionSummary:
      'Once a Preliminary Notification under Section 11 of RFCTLARR Act 2013 (or Sec 4(1) of old 1894 Act) is published in the Official Gazette, any transaction, sale, encumbrance or construction carried out by the landowner on the notified land is void against the Government. The land vests in the State free from all encumbrances once award is passed and possession taken under Section 38/40.',
    consequencesOfViolation:
      'The purchaser acquires no title against the acquiring body and cannot challenge the acquisition or demand higher compensation; the state demolishes structures and takes possession without reimbursing the private purchaser.',
    dueDiligenceChecklist: [
      'Obtain Land Acquisition Non-Encumbrance / Non-Acquisition Certificate from Special Land Acquisition Officer (SLAO) / District Collectorate.',
      'Search Gazette notifications for infrastructure corridors, Metro, Highways (NHAI Sec 3A/3D notifications), Railways, and Ring Roads.',
      'Scrutinize Section 24(2) RFCTLARR claims: If acquisition was initiated under 1894 Act, verify whether compensation was deposited in Court and physical possession taken (Supreme Court Constitution Bench in Indore Development Authority 2020).',
    ],
    sampleRedFlags: [
      'Encumbrance Certificate does not always reflect acquisition notifications until the final award is registered!',
      'Property located along planned greenfield expressway, bypass road, or industrial corridor.',
      'Vendor in a hurry to sell agricultural land situated in the outskirts of an expanding city.',
    ],
  },
  {
    id: 'TENURE_EVACUEE_ENEMY_CEILING',
    category: 'GOVT_LAND',
    title: 'Evacuee Property, Enemy Property Act 1968 & Urban Land Ceiling (ULC)',
    applicableStates: 'Pan-India (Enemy properties concentrated in UP, Delhi, Mumbai, Bengal, Kerala, Bihar)',
    statutoryBasis:
      'Enemy Property Act, 1968 (Amended 2017); Administration of Evacuee Property Act 1950; Urban Land (Ceiling and Regulation) Act 1976 (repealed in most states).',
    restrictionSummary:
      'Enemy Property: Immovable assets belonging to nationals of Pakistan and China vest in the Custodian of Enemy Property for India (CEPI). Under the 2017 amendment, the law of succession does not apply to enemy properties, and transfers made by enemy nationals or their descendants are null and void ab initio. Urban Land Ceiling (ULC): Excess vacant land declared surplus under ULC Act 1976 vested in the State; where repeal act was adopted without saving possession, status must be verified.',
    consequencesOfViolation:
      'Properties vesting in CEPI are subject to summary takeover by the Ministry of Home Affairs. Commercial banks cannot finance or auction enemy property.',
    dueDiligenceChecklist: [
      'Cross-check property against the Custodian of Enemy Property for India (CEPI) official inventory and district gazette.',
      'If land was previously subject to ULC proceedings, demand production of ULC Clearance / Non-surplus Certificate issued by competent authority.',
    ],
    sampleRedFlags: [
      'Property ancestral lineage traced to individuals who migrated to Pakistan in 1947 or 1965.',
      'ULC Section 10(5) possession notices on record without valid Repeal Act restoration.',
    ],
  },
];
