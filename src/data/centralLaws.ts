/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CentralLawTopic } from '../types';

export const CENTRAL_LAWS_DATA: CentralLawTopic[] = [
  {
    id: 'TPA_1882',
    actTitle: 'Transfer of Property Act, 1882',
    year: 1882,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/2338',
    category: 'TITLE_TRANSFER',
    lawyerCommentary:
      'The Transfer of Property Act 1882 is the cornerstone of conveyancing in India. A transfer of immovable property worth over Rs. 100 can be made only by a registered instrument (Sec 54). An "Agreement for Sale" (ATS) merely creates a personal right to obtain specific performance; it creates no interest in or charge on the land. Key edge cases: Notice of Lis Pendens (Sec 52) which binds subsequent purchasers even without actual notice; Mortgage by deposit of title deeds (Sec 58(f)) which requires delivery of the original root deed; and Part Performance (Sec 53A) which requires registered contract post-2001.',
    crucialSections: [
      {
        section: 'Section 54',
        heading: 'Sale defined and how made',
        legalTest:
          'Sale is a transfer of ownership in exchange for a price paid or promised. Sale of tangible immovable property of value >= Rs. 100 can be made ONLY by a registered instrument. Agreement for sale does not of itself create any interest in or charge on property.',
        edgeCasesCovered: [
          'Agreement to Sell (ATS) vs Conveyance Deed',
          'Conditional sale vs absolute sale',
          'Unpaid vendor lien (Section 55(4)(b)) - failure to pay full price does not invalidate conveyance automatically, creates money charge.',
        ],
        bankScrutinyStandard:
          'Bank requires original registered sale deed with endorsement of Sub-Registrar and proof of payment of full consideration (cheque/NEFT details recited in deed).',
      },
      {
        section: 'Section 52',
        heading: 'Transfer of property pending suit relating thereto (Lis Pendens)',
        legalTest:
          'During active pendency in any Court of any suit or proceeding which is not collusive and in which any right to immovable property is directly and specifically in question, the property cannot be transferred or dealt with so as to affect the rights of any other party thereto under any decree or order.',
        edgeCasesCovered: [
          'Sale executed while a suit for partition or specific performance is pending.',
          'Pendente lite purchaser is bound by the decree as if he were a party to the suit.',
          'State amendments (e.g. Maharashtra & Gujarat) require registration of Notice of Lis Pendens under Indian Registration Act.',
        ],
        bankScrutinyStandard:
          'Search jurisdictional civil courts via e-Courts for pending litigation involving vendor, property survey number, or parent owners. Search period: minimum 13 to 30 years.',
      },
      {
        section: 'Section 58(f)',
        heading: 'Mortgage by Deposit of Title Deeds (Equitable Mortgage)',
        legalTest:
          'In notified towns/cities, where a person delivers to a creditor or his agent documents of title to immovable property with intent to create a security thereon, the transaction is called a mortgage by deposit of title deeds.',
        edgeCasesCovered: [
          'Fraudulent creation of multiple mortgages using color copies or fake loss-of-document FIRs.',
          'Must verify deposit of "original title deeds" (all link documents, not merely the last deed).',
          'Memorandum of deposit: If it embodies the contract of mortgage, it requires stamp duty and registration under state stamp laws.',
        ],
        bankScrutinyStandard:
          'Physical custody of the genuine original primary title deed and prior link documents for 30 years. Cross-verification on CERSAI portal is mandatory.',
      },
      {
        section: 'Section 53A',
        heading: 'Part Performance',
        legalTest:
          'Where any person contracts to transfer immovable property in writing signed by him, and the transferee has, in part performance of contract, taken possession or continues in possession and has done some act in furtherance. Post-2001 Central Amendment, the contract MUST be registered under Section 17(1A) Registration Act.',
        edgeCasesCovered: [
          'Unregistered Agreement to Sell accompanied by delivery of possession does NOT protect transferee against eviction or subsequent bona fide buyers post-2001.',
        ],
        bankScrutinyStandard:
          'No mortgage or credit facility can be extended on mere possession under Section 53A without a registered deed of conveyance.',
      },
      {
        section: 'Section 122 & 123',
        heading: 'Gift and how effected',
        legalTest:
          'Gift is the transfer of certain existing movable or immovable property made voluntarily and without consideration. Transfer of immovable property by gift must be effected by a registered instrument signed by or on behalf of donor and attested by at least two witnesses. Must be accepted during lifetime of donor.',
        edgeCasesCovered: [
          'Gift deed executed but donor dies before donee accepts -> gift is void.',
          'Conditional gift with revocation clauses (Senior Citizens Act 2007 Section 23).',
          'Attempted gift of undivided ancestral coparcenary interest without consent of other coparceners.',
        ],
        bankScrutinyStandard:
          'Verify donor had absolute title, donee accepted during donor lifetime (mutated in revenue records), and no revocation condition exists.',
      },
    ],
    landmarkPrecedents: [
      'Suraj Lamp & Industries Pvt. Ltd. v. State of Haryana (2012 1 SCC 656)',
      'S.K. Golam Lalchand v. Nandu Lal Shaw (2024 SC)',
      'A. Nawab John v. V.N. Subramaniyam (2012 7 SCC 738 - Lis Pendens)',
    ],
  },
  {
    id: 'REG_1908',
    actTitle: 'Registration Act, 1908',
    year: 1908,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/2143',
    category: 'REGISTRATION',
    lawyerCommentary:
      'Registration provides public notice of proprietary interests and prevents fraudulent secret transfers. Section 17 mandates compulsory registration for gifts, sales, partitions, and leases exceeding 1 year. Section 49 is the sanction: an unregistered document affecting immovable property cannot affect the property, confer any power to adopt, or be received as evidence of any transaction affecting such property (except as evidence of collateral transaction or in suit for specific performance). Presentation by Power of Attorney must strictly satisfy Section 32 and 33.',
    crucialSections: [
      {
        section: 'Section 17(1)',
        heading: 'Documents of which registration is compulsory',
        legalTest:
          'Instruments of gift of immovable property; non-testamentary instruments which purport or operate to create, declare, assign, limit or extinguish, whether in present or in future, any right, title or interest of value >= Rs. 100 in immovable property.',
        edgeCasesCovered: [
          'Unregistered partition deeds dividing joint family property by metes and bounds in praesenti are inadmissible to prove title.',
          'Release deeds, relinquishment deeds, and family settlement deeds creating rights in praesenti.',
          'Agreements to sell with possession post-2001 (Section 17(1A)) must be registered.',
        ],
        bankScrutinyStandard:
          'Every link deed in the 30-year chain must be duly registered. Verify registration seal, volume, book, page number, and sub-registrar signature.',
      },
      {
        section: 'Section 49',
        heading: 'Effect of non-registration of documents required to be registered',
        legalTest:
          'No document required by Section 17 to be registered shall affect any immovable property comprised therein, or be received as evidence of any transaction affecting such property, unless it has been registered.',
        edgeCasesCovered: [
          'Collateral purpose exception: Document can be admitted solely to prove character of possession (e.g. permissive vs adverse), but never to prove passing of title.',
          'Missing registration details or fraudulent unregistered rubber stamp seals.',
        ],
        bankScrutinyStandard:
          'Title cannot be accepted on the basis of an unregistered instrument where Section 17 mandated registration.',
      },
      {
        section: 'Section 32 & 33',
        heading: 'Persons to present documents & POA recognized for registration',
        legalTest:
          'A Power of Attorney executed for presenting documents for registration must be executed before and authenticated by the Sub-Registrar within whose district the principal resides (if in India) or authenticated by a Notary Public / Indian Consul (if abroad).',
        edgeCasesCovered: [
          'Deed executed by GPA holder where GPA was not authenticated under Section 33 -> Registration is a nullity and does not pass valid title (Supreme Court in Rajni Tandon v. Dulal Ranjan Ghosh Dastidar).',
        ],
        bankScrutinyStandard:
          'Inspect the original registered GPA and ensure Sub-Registrar authentication under Section 33 with live life-certificate of the principal.',
      },
    ],
    landmarkPrecedents: [
      'Rajni Tandon v. Dulal Ranjan Ghosh Dastidar (2009 14 SCC 782)',
      'Yellapu Uma Maheswari v. Buddha Jagadheeswara Rao (2015 16 SCC 787)',
      'Subraya M.N. v. Vittala M.N. (2016 8 SCC 705)',
    ],
  },
  {
    id: 'STAMP_1899',
    actTitle: 'Indian Stamp Act, 1899 & State Stamp Acts',
    year: 1899,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/2315',
    category: 'STAMP_DUTY',
    lawyerCommentary:
      'Stamp duty is a fiscal statute governing document admissibility. Under Section 35 of the Indian Stamp Act (and state enactments e.g. Maharashtra Stamp Act 1958, Karnataka Stamp Act 1957, Tamil Nadu Stamp Act), an instrument not duly stamped is inadmissible in evidence for any purpose, including collateral purposes, until impounded and deficit duty along with penalty (up to 10x) is paid. Crucial bank issue: While under-stamping is curable by impounding, an under-stamped deed cannot be admitted in court to enforce mortgage or claim title without incurring severe monetary penalties.',
    crucialSections: [
      {
        section: 'Section 33 & 35',
        heading: 'Examination and impounding of under-stamped instruments & inadmissibility',
        legalTest:
          'Every person having authority to receive evidence, and every officer in charge of a public office before whom an instrument chargeable with duty is produced, shall impound the same if not duly stamped. Inadmissible in evidence for any purpose whatsoever until deficit duty + 10x penalty is paid.',
        edgeCasesCovered: [
          'Under-stamped instruments cannot be used to prove collateral transactions (unlike Section 49 Registration Act).',
          'Impounding procedure and whether bank can still accept the mortgage.',
          'Arbitration clauses in unstamped agreements: Supreme Court 7-Judge Constitution Bench in In Re: Interplay (2023) held that non-stamping is a curable defect and does not render the underlying contract void ab initio.',
        ],
        bankScrutinyStandard:
          'Check that stamp duty was paid as per the state guideline value (Ready Reckoner / Circle Rate / SRO Guideline Value) in force on the date of execution.',
      },
      {
        section: 'Section 47-A (State Amendments)',
        heading: 'Instruments undervalued - Reference to Collector for market value determination',
        legalTest:
          'If Sub-Registrar believes the market value of property has been falsely stated with intent to evade stamp duty, he may refer the instrument to the Collector (Stamps) for determination of true market value and deficit recovery.',
        edgeCasesCovered: [
          'Pending Section 47A proceedings create a statutory charge on the property for unpaid stamp duty.',
          'Original deed often retained by SRO / Collector until 47A deficit is cleared.',
        ],
        bankScrutinyStandard:
          'Ensure the registered deed does not carry an endorsement of "Pending Reference under Section 47A". Demand clearance certificate from Collector (Stamps).',
      },
    ],
    landmarkPrecedents: [
      'In Re: Interplay between Arbitration Agreements and Indian Stamp Act (2023 INSC 1066 - 7 Judge Bench)',
      'SMS Tea Estates Pvt. Ltd. v. Chandmari Tea Co. Pvt. Ltd. (overruled in part by Interplay)',
      'Government of Andhra Pradesh v. P. Laxmi Devi (2008 4 SCC 720)',
    ],
  },
  {
    id: 'SUCCESSION_1956_1925',
    actTitle: 'Hindu Succession Act 1956 (Amended 2005) & Indian Succession Act 1925',
    year: 1956,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/1702',
    category: 'SUCCESSION',
    lawyerCommentary:
      'Devolution of property on death without a deed is the largest source of property title litigation in India. Post-2005 amendment to Section 6 of HSA, a daughter is a coparcener by birth in the same manner as a son. The 3-Judge Supreme Court bench in Vineeta Sharma (2020) settled that daughter acquires coparcenary right by birth, regardless of whether the father was alive on September 9, 2005. Under Indian Succession Act 1925, probate is mandatory only in Kolkata, Mumbai, and Chennai. For intestate succession, all Class-I heirs must execute the conveyance deed.',
    crucialSections: [
      {
        section: 'Section 6 HSA 1956',
        heading: 'Devolution of interest in coparcenary property (2005 Amendment)',
        legalTest:
          'In a Joint Hindu Family governed by Mitakshara law, the daughter of a coparcener shall by birth become a coparcener in her own right in the same manner as the son, and have the same rights and liabilities.',
        edgeCasesCovered: [
          'Vineeta Sharma v. Rakesh Sharma: Daughter has equal coparcenary rights by birth; father need not have been alive on 09.09.2005.',
          'Safe harbor clause: Registered partitions or court decrees executed prior to 20 December 2004 are saved and cannot be reopened.',
          'Oral partitions before 2004 are NOT saved unless backed by public records or court decree.',
        ],
        bankScrutinyStandard:
          'In any ancestral property chain, all married and unmarried daughters (or their heirs if deceased) must join as co-vendors or execute registered release deeds.',
      },
      {
        section: 'Section 8, 9 & 10 HSA',
        heading: 'General rules of succession in case of males dying intestate',
        legalTest:
          'Property of a male Hindu dying intestate devolves simultaneously upon Class-I heirs: Son, Daughter, Widow, Mother, and children of predeceased children.',
        edgeCasesCovered: [
          'Mother of deceased is a Class-I heir alongside widow and children.',
          'Second wife: Marriage during subsistence of first marriage is void; second wife gets no share, but children of second marriage are legitimate heirs under Section 16 HSA (Supreme Court in Revanasiddappa v. Mallikarjun 2023).',
        ],
        bankScrutinyStandard:
          'Tahasildar Legal Heir Certificate / Surviving Family Tree verified by revenue officer. All Class-I heirs must sign.',
      },
      {
        section: 'Section 57 & 213 ISA 1925',
        heading: 'Probate of Will requirements',
        legalTest:
          'No right as executor or legatee can be established in any Court of Justice, unless a Court of competent jurisdiction has granted probate of the Will or letters of administration. Applies ONLY to wills made within Mumbai, Chennai, or Kolkata or affecting property situated therein.',
        edgeCasesCovered: [
          'Outside presidency towns (Bangalore, Delhi, Hyderabad, UP), probate is not compulsory, but bank may require NOC from all natural heirs.',
          'Muslim Personal Law: A Muslim cannot bequeath more than 1/3 of net estate by will without consent of other heirs; Hiba (oral gift) requires declaration, acceptance, and delivery of possession.',
        ],
        bankScrutinyStandard:
          'If property in Mumbai, Kolkata or Chennai, demand Certified Copy of Probate Order. If elsewhere, demand Registered Release Deeds from all excluded Class-I heirs.',
      },
    ],
    landmarkPrecedents: [
      'Vineeta Sharma v. Rakesh Sharma (2020 9 SCC 1 - 3 Judge Bench)',
      'Revanasiddappa v. Mallikarjun (2023 INSC 784 - Children of void marriage)',
      'Arunachala Gounder v. Ponnusamy (2022 11 SCC 520 - Self-acquired property of female)',
    ],
  },
  {
    id: 'BENAMI_1988_2016',
    actTitle: 'Prohibition of Benami Property Transactions Act, 1988 (Amended 2016)',
    year: 1988,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/2262',
    category: 'BENAMI',
    lawyerCommentary:
      'The Benami Act prohibits transactions where property is transferred to one person for a consideration paid or provided by another person. Section 4 prohibits suits or claims by the real owner to recover benami property. The 2016 amendment created an aggressive confiscation mechanism. Crucial exceptions for property scrutiny: (1) Property held by Karta / member of HUF for the benefit of coparceners, (2) Property held in fiduciary capacity (trustee, partner, director), (3) Property purchased in name of spouse or child with known sources.',
    crucialSections: [
      {
        section: 'Section 2(9) & Section 3',
        heading: 'Definition of Benami transaction & Prohibition',
        legalTest:
          'A transaction where property is transferred to, or held by, a person, and the consideration for such property has been provided, or paid by, another person, and the property is held for immediate or future benefit of the person who provided the consideration.',
        edgeCasesCovered: [
          'Property purchased by husband in wife\'s name: Presumed legitimate gift / settlement if purchased from known income sources.',
          'Property purchased in driver\'s or employee\'s name -> Benami, subject to provisional attachment by Initiating Officer (IT Dept).',
          'Supreme Court in Union of India v. Ganpati Dealcom (2022) held criminal provisions of 2016 amendment cannot apply retrospectively before 25.10.2016.',
        ],
        bankScrutinyStandard:
          'Verify KYC of purchaser and trace bank statement showing that purchase consideration originated from the borrower/purchaser\'s legitimate tax-paid bank accounts.',
      },
    ],
    landmarkPrecedents: [
      'Union of India v. Ganpati Dealcom Pvt. Ltd. (2022 11 SCC 92)',
      'P. Leelavathi v. V. Shankaranarayana Rao (2019 8 SCC 347)',
    ],
  },
  {
    id: 'CORPORATE_IBC_WAQF',
    actTitle: 'Companies Act 2013, IBC 2016, Indian Trusts Act & Waqf Act 1995',
    year: 2013,
    indiaCodeRef: 'https://www.indiacode.nic.in/handle/123456789/2114',
    category: 'CORPORATE_IBC',
    lawyerCommentary:
      'Transfers by artificial legal entities (companies, trusts, LLPs, statutory boards) require strict ultra vires checks. A company can sell an undertaking only with a Special Resolution under Section 180(1)(a) Companies Act. If the company is under Insolvency (IBC 2016), Section 14 imposes a statutory moratorium prohibiting all asset transfers; any sale during CIRP is null and void unless executed by the NCLT-appointed Resolution Professional. Waqf property cannot be sold without prior sanction of State Waqf Board under Section 51 Waqf Act.',
    crucialSections: [
      {
        section: 'Section 180(1)(a) Companies Act 2013',
        heading: 'Restrictions on powers of Board to sell undertaking',
        legalTest:
          'The Board of Directors shall exercise the power to sell, lease or otherwise dispose of the whole or substantially the whole of the undertaking of the company only with the consent of the company by a special resolution.',
        edgeCasesCovered: [
          'Sale executed by Managing Director without Board Resolution and Shareholders\' Special Resolution is ultra vires.',
          'MCA-21 Form CHG-1 filing check to verify bank charges.',
        ],
        bankScrutinyStandard:
          'Certified copy of Board Resolution, Form MGT-14 filed with RoC for Section 180(1)(a) special resolution, and Search Report from Practicing Company Secretary.',
      },
      {
        section: 'Section 14 & 32A IBC 2016',
        heading: 'Moratorium and Clean Slate for Corporate Debtor',
        legalTest:
          'From insolvency commencement date until CIRP completion, all alienation, encumbrance or disposal of debtor assets is prohibited. Under Section 32A, once a Resolution Plan is approved by NCLT, corporate debtor starts with a clean slate free of prior attachments.',
        edgeCasesCovered: [
          'Deed executed by promoter after Section 7/9/10 admission by NCLT is null and void.',
          'Sale of liquidation asset must be through official liquidator via e-auction certificate.',
        ],
        bankScrutinyStandard:
          'Verify NCLT cause list and IBBI records to ensure vendor company is not undergoing insolvency or liquidation.',
      },
      {
        section: 'Section 51 Waqf Act 1995',
        heading: 'Alienation of Waqf property to be void without sanction',
        legalTest:
          'Any sale, gift, exchange, mortgage or transfer of any immovable property which is waqf property shall be VOID AB INITIO unless made with the prior sanction of the Board.',
        edgeCasesCovered: [
          'Purchaser buying land without knowing it was notified as Waqf property in the official gazette acquires zero title.',
        ],
        bankScrutinyStandard:
          'Cross-check property survey number against State Waqf Board Register of Properties and Section 22A prohibited list.',
      },
    ],
    landmarkPrecedents: [
      'Manish Kumar v. Union of India (2021 5 SCC 1 - IBC)',
      'Ghanshyam Mishra & Sons v. Edelweiss ARC (2021 9 SCC 657 - Clean Slate)',
      'Madrasa-e-Alia v. Andhra Pradesh State Wakf Board (SC)',
    ],
  },
];
