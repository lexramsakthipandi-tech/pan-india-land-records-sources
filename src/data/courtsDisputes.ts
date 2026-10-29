/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourtPrecedent } from '../types';

export const SUPREME_COURT_BENCHMARKS: CourtPrecedent[] = [
  {
    id: 'SC_SURAJ_LAMP',
    caseName: 'Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana',
    citation: '(2012) 1 SCC 656 / AIR 2012 SC 206',
    court: 'Supreme Court of India (3-Judge Bench)',
    year: 2011,
    subject: 'Transfer of property by General Power of Attorney (GPA), Agreement to Sell (ATS) and Will',
    ratioDecidendi:
      'Immovable property can be legally and lawfully transferred/conveyed ONLY by a registered deed of conveyance. Transactions of the nature of "GPA sales" or "SA/GPA/WILL transfers" do NOT convey title and do not amount to transfer, nor can they be recognized as valid modes of transfer of immovable property. A power of attorney is not an instrument of transfer in regard to any right, title or interest in an immovable property. However, genuine transactions where an owner enters into an agreement for sale and authorizes an agent to execute the registered sale deed on his behalf are preserved.',
    applicationInDueDiligence:
      'FATAL TITLE DEFECT: Any chain where ownership is claimed merely by possessing an Agreement to Sell, GPA and Will without a regular registered Conveyance Deed must be outright rejected by bank scrutiny. Purchaser has no legal title.',
    reviewedChecklist:
      'Check whether the vendor is claiming title as a purchaser under a GPA/ATS or whether the vendor holds a registered conveyance executed by a GPA holder during the lifetime of the principal with specific power to sell.',
  },
  {
    id: 'SC_VINEETA_SHARMA',
    caseName: 'Vineeta Sharma v. Rakesh Sharma & Ors.',
    citation: '(2020) 9 SCC 1 / 2020 INSC 483',
    court: 'Supreme Court of India (3-Judge Bench)',
    year: 2020,
    subject: 'Hindu Succession Act 1956 (Section 6) - Coparcenary Rights of Daughters',
    ratioDecidendi:
      'Daughters have equal coparcenary rights in joint Hindu family property by birth under Section 6 of the Hindu Succession Act, 1956 as amended by Act 39 of 2005. The coparcenary status is conferred by birth and is not dependent on whether the coparcener/father was living or dead on the date of amendment (09.09.2005). The rights can be claimed in any ancestral property, subject only to the statutory exception that partitions effected before 20th December 2004 by registered deed or court decree are saved.',
    applicationInDueDiligence:
      'In any chain involving Hindu ancestral or coparcenary property, all living daughters (regardless of marital status or year of birth) and legal heirs of predeceased daughters MUST be made co-executants or execute registered Release Deeds. Partition deeds executed orally or unregistered prior to 2004 are vulnerable to challenge.',
    reviewedChecklist:
      'Demand genealogical family tree authenticated by Tahasildar. Verify that every daughter or her legal heirs have signed the partition/sale deed. Confirm whether any ancestral property partition was executed and registered prior to 20.12.2004.',
  },
  {
    id: 'SC_SHAKEEL_AHMED',
    caseName: 'Shakeel Ahmed v. Syed Akhlaq Hussain',
    citation: '2023 INSC 965 / (2024) 12 SCC 350',
    court: 'Supreme Court of India (2-Judge Bench)',
    year: 2023,
    subject: 'Reaffirmation of Suraj Lamp - Unregistered Agreement to Sell cannot confer title in possession suit',
    ratioDecidendi:
      'Reiterated with full force that no title in immovable property passes without a registered deed of conveyance. A suit for possession based on an unregistered Agreement to Sell and Power of Attorney is not maintainable under Section 54 TPA and Section 17 Registration Act. Even if possession was delivered, the document cannot be relied upon in the absence of registration.',
    applicationInDueDiligence:
      'Eliminates any residual doubt regarding post-2012 GPA claims. Reaffirms that no bank or institution can create a valid mortgage on property held through unregistered ATS/GPA.',
    reviewedChecklist:
      'Reject any loan proposal where the root document is an unregistered Agreement to Sell or unregistered Power of Attorney.',
  },
  {
    id: 'SC_NAHALCHAND',
    caseName: 'Nahalchand Laloochand Pvt. Ltd. v. Panchali Co-op Hsg. Soc.',
    citation: '(2010) 9 SCC 536 / AIR 2010 SC 3607',
    court: 'Supreme Court of India (2-Judge Bench)',
    year: 2010,
    subject: 'Sale of open and stilt car parking spaces in residential apartments',
    ratioDecidendi:
      'Stilt parking spaces and open parking spaces within a building or layout are "common areas and facilities" under apartment ownership and housing acts (MOFA / RERA). A promoter has NO right to sell or dispose of open parking spaces or stilt parking spaces as independent "flats" or separate real estate units for independent consideration. Once the building is completed, common areas vest in the co-operative housing society / apartment association.',
    applicationInDueDiligence:
      'In apartment diligence, verify that car parking is allotted as an appurtenant right / easementary convenience attached to the specific flat, and NOT sold as an independent standalone parcel on which a separate title deed or sub-lease was created.',
    reviewedChecklist:
      'Inspect the Builder-Buyer Agreement and Sale Deed: Ensure car park is earmarked within the Schedule of the flat and not deeded as an independent commercial sale.',
  },
  {
    id: 'SC_KALE_FAMILY_SETTLEMENT',
    caseName: 'Kale & Others v. Deputy Director of Consolidation',
    citation: '(1976) 3 SCC 119 / AIR 1976 SC 807',
    court: 'Supreme Court of India (3-Judge Bench)',
    year: 1976,
    subject: 'Admissibility of Unregistered Family Settlements / Memorandum of Past Partition',
    ratioDecidendi:
      'A family arrangement must be bona fide and entered into to resolve family disputes and preserve peace. If the family arrangement is oral, it requires no registration. A subsequent "Memorandum of Family Settlement" which merely records the terms of a prior oral partition already acted upon does NOT require registration under Section 17 Registration Act. However, if the memorandum itself creates or extinguishes rights in immovable property in praesenti, it MUST be registered, failing which it is inadmissible under Section 49.',
    applicationInDueDiligence:
      'When an unregistered family settlement is presented in the chain: Scrutinize whether the deed language operates in the present ("we hereby divide") or refers to past history ("we record that in 1985 we orally partitioned and have been in separate possession"). If past history with continuous revenue mutation for 12+ years, title is qualified but defensible.',
    reviewedChecklist:
      'Examine the phrasing of the family settlement memorandum. Verify continuous independent revenue entries (Pahani/7-12) for over 12 years in the respective separate names.',
  },
  {
    id: 'SC_MANCHEGOWDA',
    caseName: 'Manchegowda & Ors. v. State of Karnataka & Ors.',
    citation: '(1984) 3 SCC 301 / AIR 1984 SC 1151',
    court: 'Supreme Court of India (Constitution Bench)',
    year: 1984,
    subject: 'Constitutional validity of Karnataka PTCL Act 1978 & Resumption of SC/ST Granted Lands',
    ratioDecidendi:
      'Upheld the constitutional validity of Section 4 and 5 of the PTCL Act. Any transfer of granted land in contravention of the terms of grant or without prior government permission is null and void. The State has the power to resume the land without paying compensation to subsequent purchasers, even if the transfer took place prior to the enactment or several decades have elapsed. Subsequent rulings (Nekkanti Rama Lakshmi 2020) clarified that resumption proceedings must be initiated within a reasonable time, but title remains clouded.',
    applicationInDueDiligence:
      'High-risk scrutiny: Banks will reject any title originating from a Government SC/ST grant where alienation occurred without state sanction. Revenue clearance certificate is mandatory.',
    reviewedChecklist:
      'Check Saguvali Chit / Grant Certificate conditions. Verify whether a formal Non-PTCL Endorsement has been issued by the Assistant Commissioner.',
  },
  {
    id: 'SC_CELIR_SARFAESI',
    caseName: 'Celir LLP v. Bafna Motors (Mumbai) Pvt. Ltd. & Ors.',
    citation: '(2024) 2 SCC 1 / 2023 INSC 847',
    court: 'Supreme Court of India (2-Judge Bench)',
    year: 2023,
    subject: 'Extinguishment of Borrower\'s Right of Redemption under Section 13(8) SARFAESI Act',
    ratioDecidendi:
      'Post-2016 amendment to Section 13(8) of the SARFAESI Act, the borrower\'s right to redeem the secured asset is extinguished on the very date the bank publishes the notice for public auction. The borrower cannot tender dues or stall the sale after auction notice publication. The auction purchaser who deposits the full bid amount acquires an indefeasible right to receive the Sale Certificate.',
    applicationInDueDiligence:
      'For properties purchased in a SARFAESI bank auction: Confirms that the Sale Certificate issued by the Authorized Officer under Security Interest (Enforcement) Rules 2002 confers absolute title once registered, immune to belated redemption suits by defaulting borrowers.',
    reviewedChecklist:
      'Inspect 13(2) Demand Notice, 13(4) Possession Notice, Public Auction Notification, and Registered Sale Certificate issued under SARFAESI.',
  },
  {
    id: 'SC_JAGPAL_SINGH',
    caseName: 'Jagpal Singh & Ors. v. State of Punjab & Ors.',
    citation: '(2011) 11 SCC 396 / AIR 2011 SC 1123',
    court: 'Supreme Court of India (2-Judge Bench)',
    year: 2011,
    subject: 'Protection and Eviction of Encroachers from Gram Sabha / Village Common Lands',
    ratioDecidendi:
      'Common village land (Gomala, Gairan, Shamlat Deh, ponds, catchment areas, cremation grounds) is reserved for the collective benefit of villagers and cannot be alienated or regularized in favor of private encroachers. State Governments were issued a binding mandamus to prepare schemes for speedy eviction of illegal occupants of village common land without exception.',
    applicationInDueDiligence:
      'Any property carved out of or adjacent to Gram Sabha, Gairan, or village lake beds must be subjected to strict survey verification. Regularization orders issued by local panchayats without statutory authority are ultra vires.',
    reviewedChecklist:
      'Check old village settlement maps (Aks Shajra / FMB). Verify that the survey number is not classified as Gram Sabha or communal utility.',
  },
];
