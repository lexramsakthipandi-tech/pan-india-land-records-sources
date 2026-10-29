/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SUPREME_COURT_BENCHMARKS } from '../data/courtsDisputes';
import { Search, Gavel, Scale, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';

export const CourtPrecedentsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCaseId, setSelectedCaseId] = useState<string>(SUPREME_COURT_BENCHMARKS[0].id);

  const filteredCases = SUPREME_COURT_BENCHMARKS.filter(
    (c) =>
      !searchQuery ||
      c.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.citation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.ratioDecidendi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeCase =
    SUPREME_COURT_BENCHMARKS.find((c) => c.id === selectedCaseId) || filteredCases[0] || SUPREME_COURT_BENCHMARKS[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Leading Supreme Court Property Jurisprudence Benchmarks
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Binding precedent ratios relied upon by bank panel advocates and title reviewers to validate chains and reject defective titles.
        </p>

        {/* Search */}
        <div className="mt-4 relative max-w-xl">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search landmark rulings: Suraj Lamp, Vineeta Sharma, Nahalchand, SARFAESI..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
      </div>

      {/* 2-Column Split: Cases List vs Case Deep Scrutiny Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredCases.map((c) => {
            const isSelected = activeCase.id === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCaseId(c.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all text-xs ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[10px] font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                    {c.court} · {c.year}
                  </span>
                </div>
                <h3 className={`mt-1 font-bold text-sm leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {c.caseName}
                </h3>
                <span className={`font-mono text-[11px] block mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {c.citation}
                </span>
                <p className={`mt-1.5 line-clamp-2 text-[11px] ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                  {c.subject}
                </p>
              </button>
            );
          })}

          {filteredCases.length === 0 && (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-lg text-slate-500 text-sm">
              No judgment matching query "{searchQuery}".
            </div>
          )}
        </div>

        {/* Right Column: Case Scrutiny Details */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-[10px] font-mono uppercase font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              {activeCase.court} · Year {activeCase.year}
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-1">{activeCase.caseName}</h2>
            <p className="text-xs font-mono font-semibold text-amber-800 mt-0.5">{activeCase.citation}</p>
            <p className="text-xs text-slate-600 mt-2 font-medium">
              <strong>Legal Subject:</strong> {activeCase.subject}
            </p>
          </div>

          {/* Ratio Decidendi */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-slate-900">
              <Scale className="w-4 h-4 text-slate-700" />
              Ratio Decidendi (Binding Principle of Law)
            </span>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
              {activeCase.ratioDecidendi}
            </div>
          </div>

          {/* Application in Due Diligence */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Application in Due Diligence & Bank Scrutiny
            </span>
            <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-lg text-xs text-emerald-950 leading-relaxed font-medium">
              {activeCase.applicationInDueDiligence}
            </div>
          </div>

          {/* Reviewed Checklist */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-purple-900">
              <Bookmark className="w-4 h-4 text-purple-600" />
              Actionable Checklist for Scrutinizing Lawyer
            </span>
            <div className="p-4 bg-purple-50/40 border border-purple-200 rounded-lg text-xs text-purple-950 leading-relaxed">
              {activeCase.reviewedChecklist}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
