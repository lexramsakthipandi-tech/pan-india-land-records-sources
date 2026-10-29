/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BANK_SCRUTINY_GUIDELINES, SAMPLE_LSR_REPORT } from '../data/bankScrutiny';
import { LSRReportData } from '../types';
import { Printer, ShieldCheck, AlertTriangle, FileText, Plus, Trash2, CheckCircle2, Bookmark, Landmark, Sparkles } from 'lucide-react';

export const BankLsrGeneratorView: React.FC = () => {
  const [report, setReport] = useState<LSRReportData>(SAMPLE_LSR_REPORT);
  const [activeBankGuidelineIndex, setActiveBankGuidelineIndex] = useState<number>(0);
  const [newQualificationText, setNewQualificationText] = useState<string>('');

  const currentGuideline = BANK_SCRUTINY_GUIDELINES[activeBankGuidelineIndex];

  const handlePrint = () => {
    window.print();
  };

  const handleAddChainEntry = () => {
    const newEntry = {
      serialNo: report.chainOfTitle.length + 1,
      dateOfDocument: new Date().toISOString().split('T')[0],
      docNoAndYear: 'Doc No. Pending/2026',
      natureOfDeed: 'Proposed Deed of Conveyance',
      executantVendor: 'Current Registered Owner',
      claimantPurchaser: report.borrowerName,
      extentCovered: report.extentDeed,
      originalProduced: true,
      verificationStatus: 'VERIFIED' as const,
    };
    setReport({ ...report, chainOfTitle: [...report.chainOfTitle, newEntry] });
  };

  const handleRemoveChainEntry = (index: number) => {
    const updated = report.chainOfTitle.filter((_, idx) => idx !== index);
    setReport({ ...report, chainOfTitle: updated });
  };

  const handleAddQualification = (text: string) => {
    if (!text.trim()) return;
    setReport({ ...report, qualificationsAndRemarks: [...report.qualificationsAndRemarks, text.trim()] });
    setNewQualificationText('');
  };

  const handleRemoveQualification = (index: number) => {
    const updated = report.qualificationsAndRemarks.filter((_, idx) => idx !== index);
    setReport({ ...report, qualificationsAndRemarks: updated });
  };

  return (
    <div className="space-y-6">
      {/* Top Header (no-print) */}
      <div className="border-b border-slate-200 pb-5 no-print">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Bank Legal Scrutiny Report (LSR) & Search Generator
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Standard format for SBI, HDFC Bank, ICICI Bank and public sector banks: root of title, 30-year flow, EC verification, and standard qualifications.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print / Export Legal Opinion</span>
            </button>
          </div>
        </div>

        {/* Bank Guideline Selector Pill Strip */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 mr-1">Bank Format Standard:</span>
          {BANK_SCRUTINY_GUIDELINES.map((guide, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBankGuidelineIndex(idx)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors font-medium ${
                activeBankGuidelineIndex === idx
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {guide.bankName} ({guide.minSearchPeriodYears} Yrs Search)
            </button>
          ))}
        </div>
      </div>

      {/* Scrutiny Guideline Card (no-print) */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-xs space-y-3 no-print">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-slate-700" />
            {currentGuideline.bankName} Scrutiny Requirements & Non-Negotiable Rejections
          </h2>
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            CERSAI Central Search Mandatory: {currentGuideline.cersaiMandate ? 'YES' : 'NO'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
            <span className="font-bold text-slate-900 block">Mandatory Root Documents:</span>
            <ul className="space-y-1 text-slate-700">
              {currentGuideline.mandatoryDocuments.slice(0, 4).map((d, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-rose-50/50 rounded border border-rose-200 space-y-1">
            <span className="font-bold text-rose-950 block">Instant Rejections / Red Flags:</span>
            <ul className="space-y-1 text-rose-900">
              {currentGuideline.nonNegotiableRejections.slice(0, 3).map((r, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Insert Standard Bank Qualifications */}
        <div className="pt-2">
          <span className="text-[11px] font-semibold text-slate-500 block mb-1">
            Click to Insert Bank Standard Qualification Wording:
          </span>
          <div className="flex flex-wrap gap-2">
            {currentGuideline.standardQualifications.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleAddQualification(sq.recommendedDrafting)}
                className="text-left px-2.5 py-1 text-xs bg-slate-100 hover:bg-amber-100 border border-slate-300 rounded text-slate-800 transition-colors"
                title={sq.recommendedDrafting}
              >
                + {sq.scenario}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FORMAL PRINTABLE LEGAL SCRUTINY REPORT (LSR) CANVAS */}
      <div className="bg-white border border-slate-300 rounded-lg p-8 shadow-sm space-y-6 text-slate-900 print:border-none print:shadow-none print:p-0">
        {/* Formal Header */}
        <div className="text-center border-b-2 border-slate-900 pb-4">
          <h2 className="text-lg font-bold tracking-wide uppercase">
            LEGAL SCRUTINY REPORT & TITLE SEARCH CERTIFICATE
          </h2>
          <p className="text-xs text-slate-600 uppercase mt-0.5">
            Prepared for: {report.bankName} ({report.branchName})
          </p>
          <div className="flex justify-between items-center text-xs mt-3 text-slate-700 font-mono">
            <span>Report Ref: <strong className="text-slate-900">{report.reportNumber}</strong></span>
            <span>Date: <strong className="text-slate-900">{report.dateOfReport}</strong></span>
          </div>
        </div>

        {/* 1. Advocate & Applicant Header Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1.5 p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-slate-900 uppercase block text-[11px]">Advocate on Bank Panel:</span>
            <div>Name: <strong>{report.advocateName}</strong></div>
            <div>Bar Council Reg No: <span className="font-mono">{report.barRegistrationNo}</span></div>
            <div>Bank / Branch: {report.bankName}, {report.branchName}</div>
          </div>

          <div className="space-y-1.5 p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-slate-900 uppercase block text-[11px]">Borrower & Owner Particulars:</span>
            <div>Loan Application Ref: <span className="font-mono font-semibold">{report.loanApplicationNo}</span></div>
            <div>Borrower / Mortgagor: <strong>{report.borrowerName}</strong></div>
            <div>Registered Owner: <strong>{report.propertyOwnerName}</strong></div>
          </div>
        </div>

        {/* 2. Description of Property & Boundaries */}
        <div className="space-y-2 text-xs">
          <h3 className="font-bold uppercase text-[11px] text-slate-800 border-b border-slate-200 pb-1">
            I. Property Schedule & Demarcated Boundaries
          </h3>
          <p className="font-medium text-slate-800 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-200">
            {report.propertyAddress}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px]">Survey / Plot No.</span>
              <strong>{report.surveyNumber}</strong>
            </div>
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px]">Sub-Division / Hissa</span>
              <strong>{report.subDivisionNo}</strong>
            </div>
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px]">Deed Extent & UDS</span>
              <strong>{report.extentDeed}</strong>
            </div>
            <div className="p-2 bg-slate-50 rounded border border-slate-200">
              <span className="text-slate-500 block text-[10px]">Revenue Extent</span>
              <strong>{report.extentRevenue}</strong>
            </div>
          </div>

          {/* 4 Boundaries Box */}
          <div className="p-3 bg-slate-50 rounded border border-slate-200 grid grid-cols-2 gap-2 text-xs">
            <div><strong>North:</strong> {report.boundaries.north}</div>
            <div><strong>South:</strong> {report.boundaries.south}</div>
            <div><strong>East:</strong> {report.boundaries.east}</div>
            <div><strong>West:</strong> {report.boundaries.west}</div>
          </div>
        </div>

        {/* 3. Chronological Chain of Title (Flow of Title) */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1">
            <h3 className="font-bold uppercase text-[11px] text-slate-800">
              II. Chronological Tracing & Flow of Title (30-Year Chain)
            </h3>
            <button
              onClick={handleAddChainEntry}
              className="no-print text-xs text-amber-700 hover:text-amber-800 font-semibold"
            >
              + Add Link Document
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded">
              <thead className="bg-slate-100 font-semibold text-slate-700 text-[11px]">
                <tr>
                  <th className="py-2 px-2.5">S.No</th>
                  <th className="py-2 px-2.5">Doc No. & Date</th>
                  <th className="py-2 px-2.5">Nature of Deed</th>
                  <th className="py-2 px-2.5">Vendor / Executant</th>
                  <th className="py-2 px-2.5">Purchaser / Claimant</th>
                  <th className="py-2 px-2.5">Original Produced?</th>
                  <th className="py-2 px-2.5 no-print">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {report.chainOfTitle.map((link, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-2 px-2.5 font-bold">{link.serialNo}</td>
                    <td className="py-2 px-2.5 font-mono">
                      <div>{link.docNoAndYear}</div>
                      <div className="text-[10px] text-slate-500">{link.dateOfDocument}</div>
                    </td>
                    <td className="py-2 px-2.5 font-medium">{link.natureOfDeed}</td>
                    <td className="py-2 px-2.5">{link.executantVendor}</td>
                    <td className="py-2 px-2.5 font-semibold text-slate-900">{link.claimantPurchaser}</td>
                    <td className="py-2 px-2.5">
                      <span className="font-mono text-[11px] text-emerald-700 font-semibold">
                        {link.originalProduced ? 'YES (Original)' : 'NO (Certified Copy)'}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 no-print">
                      <button
                        onClick={() => handleRemoveChainEntry(idx)}
                        className="text-slate-400 hover:text-rose-600"
                        title="Delete link"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Encumbrance Certificate & Revenue Scrutiny */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1.5">
            <h4 className="font-bold uppercase text-[11px] text-slate-800">
              III. Encumbrance Certificate (EC) Verification
            </h4>
            <div>Certificate No: <span className="font-mono font-semibold">{report.ecDetails.ecNumber}</span></div>
            <div>Period Searched: <strong className="font-mono">{report.ecDetails.periodFrom} to {report.ecDetails.periodTo}</strong></div>
            <div>Jurisdictional SRO: {report.ecDetails.issuingSro}</div>
            <div>Finding: <strong className="text-emerald-700">{report.ecDetails.nilOrEntries}</strong></div>
            <p className="text-[11px] text-slate-700 leading-relaxed mt-1">{report.ecDetails.details}</p>
          </div>

          <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1.5">
            <h4 className="font-bold uppercase text-[11px] text-slate-800">
              IV. Revenue & Project Approvals Scrutiny
            </h4>
            <div>Revenue Record: <strong>{report.revenueRecordsScrutiny.recordType}</strong> ({report.revenueRecordsScrutiny.khataOrPattaNo})</div>
            <div>RERA Registration No: <span className="font-mono">{report.projectApprovals.reraRegNo}</span></div>
            <div>Plan Approval No: <span className="font-mono">{report.projectApprovals.planApprovalNo}</span></div>
            <div>Occupancy Certificate: <strong className="text-slate-900">{report.projectApprovals.occupancyCertNo}</strong></div>
            <div>UDS Calculated: <span className="font-mono font-semibold">{report.projectApprovals.udsCalculatedSqFt} Sq. Ft.</span></div>
          </div>
        </div>

        {/* 5. Specific Qualifications, Disclaimers & Reservations */}
        <div className="space-y-2 text-xs">
          <h3 className="font-bold uppercase text-[11px] text-slate-800 border-b border-slate-200 pb-1">
            V. Specific Qualifications, Reservations & Disclaimers
          </h3>
          <div className="space-y-1.5">
            {report.qualificationsAndRemarks.map((qual, idx) => (
              <div key={idx} className="p-2.5 bg-amber-50/50 rounded border border-amber-200/80 text-slate-800 flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-800 shrink-0">{idx + 1}.</span>
                  <span className="leading-relaxed">{qual}</span>
                </div>
                <button
                  onClick={() => handleRemoveQualification(idx)}
                  className="no-print text-slate-400 hover:text-rose-600 shrink-0 p-0.5"
                  title="Remove qualification"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Add custom qualification inline (no-print) */}
          <div className="flex gap-2 pt-1 no-print">
            <input
              type="text"
              value={newQualificationText}
              onChange={(e) => setNewQualificationText(e.target.value)}
              placeholder="Type custom qualification or click one of the bank preset buttons above..."
              className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded focus:ring-1 focus:ring-amber-500"
            />
            <button
              onClick={() => handleAddQualification(newQualificationText)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-semibold whitespace-nowrap"
            >
              Add Note
            </button>
          </div>
        </div>

        {/* 6. Final Scrutiny Opinion */}
        <div className="p-4 bg-slate-900 text-white rounded-lg space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold uppercase text-xs tracking-wider text-amber-400">
              VI. Final Title Scrutiny Opinion
            </h3>
            <select
              value={report.finalOpinion}
              onChange={(e) => setReport({ ...report, finalOpinion: e.target.value as any })}
              className="no-print px-2.5 py-1 text-xs bg-slate-800 text-amber-300 border border-slate-700 rounded font-semibold"
            >
              <option value="CLEAR_MARKETABLE">Clear, Marketable & Unencumbered</option>
              <option value="SUBJECT_TO_CONDITIONS">Clear Subject to Conditions / Qualifications</option>
              <option value="DEFECTIVE_NOT_RECOMMENDED">Defective / Not Recommended</option>
            </select>
          </div>

          <div className="text-xs leading-relaxed text-slate-200">
            {report.finalOpinion === 'CLEAR_MARKETABLE' && (
              <p>
                <strong>CERTIFICATE:</strong> On scrutiny of the original title deeds, chain documents for 30 years, revenue records, and encumbrance certificates, I hereby certify that the applicant/mortgagor{' '}
                <strong className="text-white">{report.propertyOwnerName}</strong> holds a <span className="text-emerald-400 font-bold underline">CLEAR, VALID, AND MARKETABLE TITLE</span> in the schedule property, free from all visible encumbrances, attachments, and claims. The property is fit for the creation of a valid Equitable Mortgage under Section 58(f) of the Transfer of Property Act 1882 in favor of {report.bankName}.
              </p>
            )}

            {report.finalOpinion === 'SUBJECT_TO_CONDITIONS' && (
              <p>
                <strong>QUALIFIED CERTIFICATE:</strong> The title of the vendor is clear and marketable, <span className="text-amber-400 font-bold underline">SUBJECT STRICTLY TO SATISFACTION OF PRE-DISBURSEMENT CONDITIONS</span> set forth in Section V above. The Bank must obtain and verify the highlighted documents before disbursement of the loan.
              </p>
            )}

            {report.finalOpinion === 'DEFECTIVE_NOT_RECOMMENDED' && (
              <p>
                <strong>ADVERSE TITLE OPINION:</strong> The title to the schedule property is <span className="text-rose-400 font-bold underline">DEFECTIVE AND NOT MARKETABLE</span> due to fatal defects noted in the chain. The property is NOT RECOMMENDED for mortgage or financial accommodation.
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-end text-xs text-slate-400">
            <div>
              <div>Place: Bengaluru</div>
              <div>Date: {report.dateOfReport}</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-white">{report.advocateName}</div>
              <div>Advocate & Legal Advisor to {report.bankName}</div>
              <div className="font-mono text-[11px] text-slate-400">{report.barRegistrationNo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
