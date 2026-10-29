/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApartmentProjectScrutiny } from '../types';

export const APARTMENT_PROJECT_STAGES: ApartmentProjectScrutiny[] = [
  {
    id: 'STAGE_LAND_CONVERSION_ZONING',
    stageName: '1. Master Plan Zoning & Change of Land Use (CLU) / Conversion',
    issuingAuthority: 'Metropolitan Planning Authority (BMRDA/CMDA/MMRDA/DDA) & District Collector',
    requiredDocuments: [
      'Official Master Plan Land Use Zoning Certificate (Confirming Yellow / Residential or Commercial Zone)',
      'Official Agricultural to Non-Agricultural (NA) Conversion Order issued by Collector/DC',
      'Proof of payment of Conversion Fine / Development Charges',
      'NOC from Pollution Control Board (if near waterbodies / industrial clusters)',
    ],
    verificationProcedure:
      'Inspect the CDP (Comprehensive Development Plan) / Master Plan. If land is zoned Green / Agricultural / Forest / Eco-Sensitive, verify that formal Change of Land Use (CLU) was sanctioned by the State Urban Development Department.',
    statutoryMandate: 'State Town and Country Planning Acts & Land Revenue Codes',
    keyLegalRisks: [
      'Construction on Green Belt without CLU is illegal and subject to demolition without compensation.',
      'Encroachment into buffer zones of lakes (75m in Bangalore National Green Tribunal order; 30m for primary drains).',
    ],
  },
  {
    id: 'STAGE_LAYOUT_SANCTION_GIFT',
    stageName: '2. Layout Plan Sanction & Relinquishment of Roads / Civic Amenities',
    issuingAuthority: 'Local Planning Authority / DTCP / Town Planning Department',
    requiredDocuments: [
      'Sanctioned Layout Plan drawing with official approval seal and number',
      'Registered Gift Deed / Relinquishment Deed surrendering roads, parks, and Civic Amenity (CA) sites to the local municipal body',
      'Khata / Mutation of roads and parks in favor of Municipality / Corporation',
    ],
    verificationProcedure:
      'Confirm that the developer has not sold plots or flats carved out of open spaces or roads designated for public handover in the layout sanction. Verify that roads are physically connected to a recognized public access road.',
    statutoryMandate: 'State Municipal Corporation Acts & Town Planning Rules',
    keyLegalRisks: [
      'Developer attempting to sell or construct over designated Open Space Reservation (OSR) / Park areas.',
      'Non-execution of registered Gift Deed for roads leaves layout un-adoptable by municipal authorities, resulting in refusal of drainage and water connections.',
    ],
  },
  {
    id: 'STAGE_JDA_ALLOCATION',
    stageName: '3. Joint Development Agreement (JDA) & Allocation / Sharing Deed',
    issuingAuthority: 'Sub-Registrar Office (Private bilateral conveyance between Landowner & Promoter)',
    requiredDocuments: [
      'Registered Joint Development Agreement (JDA) with full payment of stamp duty',
      'Registered General Power of Attorney (GPA) executed by Landowner in favor of Promoter',
      'Registered Supplementary Agreement / Allocation Deed / Area Sharing Agreement demarcating specific flat numbers',
      'Joint Endorsement / Confirmation letter regarding handover of possession of development site',
    ],
    verificationProcedure:
      'Cross-check the flat number being purchased against the Allocation Schedule. If the flat is in the Developer Share, ensure GPA contains specific power to sell and receive consideration. If the flat is in the Landowner Share, the Landowner MUST execute the sale deed or execute a specific registered POA.',
    statutoryMandate: 'Indian Contract Act 1872 & Registration Act 1908 Section 17',
    keyLegalRisks: [
      'Developer selling a flat that was allotted to the Landowner under the Allocation Deed (Title is void ab initio without landowner joining).',
      'Cancellation or termination of JDA due to builder default, triggering prolonged litigation between landowner and buyers.',
      'Unregistered JDA / Sharing Agreement: Not recognized in evidence under Section 49 Registration Act.',
    ],
  },
  {
    id: 'STAGE_BUILDING_SANCTION_CC',
    stageName: '4. Sanctioned Building Plan & Commencement Certificate (CC)',
    issuingAuthority: 'Municipal Corporation (BBMP, MCGM/BMC, MCD, GHMC, GCC, etc.)',
    requiredDocuments: [
      'Sanctioned Building Plan (Blueprints approved with building license number)',
      'Commencement Certificate (CC) issued after plinth inspection',
      'NOC from Fire and Emergency Services Department',
      'Airport Authority of India (AAI) Height Clearance NOC',
      'Environmental Clearance (EC) from State Environment Impact Assessment Authority (SEIAA / MoEF)',
    ],
    verificationProcedure:
      'Inspect the Sanctioned Plan: Confirm that the number of floors, building height, setbacks, and total units match what is constructed on site. Verify Commencement Certificate is issued for the specific tower/phase.',
    statutoryMandate: 'National Building Code (NBC) & Municipal Building Bye-Laws',
    keyLegalRisks: [
      'Deviations exceeding 5% permissible limit; unauthorized additional floors constructed without sanction.',
      'Construction commenced without Environmental Clearance where built-up area exceeds 20,000 sq. meters.',
    ],
  },
  {
    id: 'STAGE_RERA_REGISTRATION',
    stageName: '5. RERA Project Registration & Mandatory Disclosures',
    issuingAuthority: 'Real Estate Regulatory Authority (State RERA: MahaRERA, K-RERA, TNRERA, UP-RERA)',
    requiredDocuments: [
      'RERA Registration Certificate with unique alphanumeric Registration Number',
      'Quarterly Progress Reports (QPR) filed on State RERA portal',
      '70% Separate Escrow Bank Account certificate from Chartered Accountant',
      'Approved standard Agreement for Sale format uploaded on RERA portal',
      'Form 4 (Architect Certificate) and Form 5 (CA Certificate) confirming completion percentage',
    ],
    verificationProcedure:
      'Log into the official state RERA portal. Search by project name or promoter. Verify: (1) Registration is currently ACTIVE (not expired, revoked or lapsed); (2) Proposed completion date; (3) Declared encumbrances and bank loans; (4) Number of sanctioned apartments and carpet area disclosures.',
    statutoryMandate: 'Real Estate (Regulation and Development) Act 2016 Sections 3, 4, 11, 14',
    keyLegalRisks: [
      'Project sold without RERA registration (illegal under Section 3; promoter liable for 10% project cost penalty).',
      'RERA registration lapsed without extension, freezing new sales and bank disbursements.',
      'Carpet area discrepancy: RERA mandates pricing and conveyance strictly on Net Usable Carpet Area, prohibiting inflated super built-up area markups.',
    ],
  },
  {
    id: 'STAGE_COMPLETION_OCCUPANCY',
    stageName: '6. Completion Certificate & Full Occupancy Certificate (OC)',
    issuingAuthority: 'Competent Town Planning Authority / Municipal Commissioner',
    requiredDocuments: [
      'Full Occupancy Certificate (OC) / Completion Certificate (CC)',
      'Final Fire Safety NOC (Post-construction inspection)',
      'Consent to Operate (CTO) from State Pollution Control Board for Sewage Treatment Plant (STP)',
      'Permanent Water Connection and Electricity Energization Sanction',
    ],
    verificationProcedure:
      'Scrutinize the Occupancy Certificate to confirm whether it is a "Full OC" for the entire project or a "Partial / Block OC". Verify that the specific apartment flat and tower is covered by the OC schedule.',
    statutoryMandate: 'RERA Act 2016 Section 11(4)(b) & Municipal Corporation Acts',
    keyLegalRisks: [
      'Living in a building without OC is technically illegal and risks utility disconnection (BESCOM, BEST, DJB).',
      'Banks will generally not disburse final loan installments or accept mortgage without Occupancy Certificate.',
      'Partial OC: Builder may abandon pending amenities (clubhouse, STP, second access road) after handing over initial towers.',
    ],
  },
  {
    id: 'STAGE_UDS_DEED_CONVEYANCE',
    stageName: '7. Undivided Share of Land (UDS) & Tripartite Conveyance Deed',
    issuingAuthority: 'Sub-Registrar Office & Apartment Owners Association (CHS / AOA)',
    requiredDocuments: [
      'Registered Deed of Conveyance / Sale Deed with complete Schedule A (Parent Land), Schedule B (UDS), and Schedule C (Flat)',
      'Deed of Declaration under State Apartment Ownership Act (KAOA / Maharashtra Apartment Ownership Act)',
      'Car parking allotment letter (Stilt / Basement)',
      'No Objection Certificate (NOC) from Co-operative Housing Society (if formed)',
    ],
    verificationProcedure:
      'Calculate UDS percentage: Ensure UDS is mathematically proportional to Flat SBUA / Project SBUA. In Maharashtra, verify whether promoter has executed conveyance or if Deemed Conveyance under MOFA Section 11 is needed.',
    statutoryMandate: 'State Apartment Ownership Acts & Registration Act 1908',
    keyLegalRisks: [
      'Under-allocation of UDS: Builder retaining balance UDS to claim future development rights / rooftop construction.',
      'Sale of open parking spaces: Held illegal by Supreme Court in Nahalchand Laloochand.',
    ],
  },
];
