/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CENTRAL_LAWS_DATA } from '../data/centralLaws';
import { LAND_TENURE_DATA } from '../data/landTenure';
import { Search, ExternalLink, ShieldCheck, AlertTriangle, BookOpen, Scale, FileText, ChevronRight } from 'lucide-react';

export const CentralAndTenureLawsView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'central' | 'tenure'>('central');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLawId, setSelectedLawId] = useState<string>(CENTRAL_LAWS_DATA[0].id);
  const [selectedTenureId, setSelectedTenureId] = useState<string>(LAND_TENURE_DATA[0].id);

  const filteredCentralLaws = CENTRAL_LAWS_DATA.filter(
    (l) =>
      !searchTerm ||
      l.actTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.crucialSections.some((s) => s.section.toLowerCase().includes(searchTerm.toLowerCase()) || s.heading.toLowerCase().includes(searchTerm.toLowerCase())) ||
      l.lawyerCommentary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTenure = LAND_TENURE_DATA.filter(
    (t) =>
      !searchTerm ||
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.applicableStates.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.restrictionSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.dueDiligenceChecklist.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeLaw = CENTRAL_LAWS_DATA.find((l) => l.id === selectedLawId) || filteredCentralLaws[0] || CENTRAL_LAWS_DATA[0];
  const activeTenure = LAND_TENURE_DATA.find((t) => t.id === selectedTenureId) || filteredTenure[0] || LAND_TENURE_DATA[0];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Statutory Foundations & Land Tenure Restrictions
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Central Acts that decide whether a document passes title, paired with State Land Tenure restrictions that limit alienation.
            </p>
          </div>
          {/* Segmented Sub-Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveSubTab('central')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeSubTab === 'central'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1. Central Acts & Bare Act Scrutiny
            </button>
            <button
              onClick={() => setActiveSubTab('tenure')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeSubTab === 'tenure'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              2. Land Tenure & Alienation Prohibitions
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative max-w-xl">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              activeSubTab === 'central'
                ? 'Search section, act, lis pendens, probate, stamp duty, benami...'
                : 'Search tenure, NA conversion, PTCL, Panchami, DDA leasehold, acquisition...'
            }
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
      </div>

      {/* View 1: Central Laws */}
      {activeSubTab === 'central' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Central Acts */}
          <div className="lg:col-span-4 space-y-2">
            {filteredCentralLaws.map((law) => {
              const isSelected = activeLaw.id === law.id;
              return (
                <button
                  key={law.id}
                  onClick={() => setSelectedLawId(law.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                      {law.category} · {law.year}
                    </span>
                    <span className="text-[11px] font-semibold">
                      {law.crucialSections.length} Sections
                    </span>
                  </div>
                  <h3 className={`mt-1 font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {law.actTitle}
                  </h3>
                  <p className={`mt-1 line-clamp-2 text-[11px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {law.lawyerCommentary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Law Deep Dive Scrutiny */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {activeLaw.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-1">{activeLaw.actTitle}</h2>
              </div>
              <a
                href={activeLaw.indiaCodeRef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>India Code Bare Act</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              </a>
            </div>

            {/* Lawyer's Commentary */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs leading-relaxed text-slate-800">
              <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Senior Conveyancing Lawyer Commentary & Scope
              </span>
              <p>{activeLaw.lawyerCommentary}</p>
            </div>

            {/* Crucial Sections Scrutiny Accordion/Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Crucial Sections, Legal Tests & Bank Scrutiny Standards
              </h3>
              <div className="space-y-3">
                {activeLaw.crucialSections.map((sec, idx) => (
                  <div key={idx} className="p-4 bg-white border border-slate-200 rounded-lg space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-sm font-bold text-slate-900">
                        {sec.section} — {sec.heading}
                      </span>
                    </div>

                    <div className="text-xs text-slate-800">
                      <span className="font-semibold text-slate-900 block mb-0.5">Statutory Test:</span>
                      <p className="text-slate-700 leading-relaxed">{sec.legalTest}</p>
                    </div>

                    <div className="text-xs bg-amber-50/50 p-2.5 rounded border border-amber-200/60">
                      <span className="font-semibold text-amber-900 block mb-1">Edge Cases Handled:</span>
                      <ul className="space-y-0.5 text-slate-800">
                        {sec.edgeCasesCovered.map((edge, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-600 font-bold">›</span>
                            <span>{edge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-xs bg-slate-50 p-2.5 rounded border border-slate-200">
                      <span className="font-semibold text-slate-900 block mb-0.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Bank Scrutiny Requirement:
                      </span>
                      <p className="text-slate-700">{sec.bankScrutinyStandard}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmark Precedents */}
            <div className="pt-3 border-t border-slate-200 text-xs">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-2">
                Leading Judicial Precedents
              </span>
              <div className="space-y-1">
                {activeLaw.landmarkPrecedents.map((prec, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-slate-800 font-medium">
                    <Scale className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{prec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 2: Land Tenure Restrictions */}
      {activeSubTab === 'tenure' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Tenure List */}
          <div className="lg:col-span-4 space-y-2">
            {filteredTenure.map((tenure) => {
              const isSelected = activeTenure.id === tenure.id;
              return (
                <button
                  key={tenure.id}
                  onClick={() => setSelectedTenureId(tenure.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-semibold uppercase ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                      {tenure.category}
                    </span>
                  </div>
                  <h3 className={`mt-1 font-bold text-sm leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {tenure.title}
                  </h3>
                  <p className={`mt-1 text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {tenure.applicableStates}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tenure Deep Dive */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono uppercase font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                {activeTenure.category}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">{activeTenure.title}</h2>
              <p className="text-xs text-slate-600 mt-1">
                <strong>Applicable Jurisdictions:</strong> {activeTenure.applicableStates}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">
                Statutory Basis: {activeTenure.statutoryBasis}
              </p>
            </div>

            {/* Restriction Summary */}
            <div className="text-xs space-y-1">
              <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
                Statutory Restriction & Alienation Bar
              </span>
              <p className="text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                {activeTenure.restrictionSummary}
              </p>
            </div>

            {/* Consequences of Violation */}
            <div className="p-3.5 bg-rose-50/50 border border-rose-200 rounded-lg text-xs space-y-1">
              <span className="font-bold text-rose-950 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Legal Consequences of Violation
              </span>
              <p className="text-rose-900 leading-relaxed">
                {activeTenure.consequencesOfViolation}
              </p>
            </div>

            {/* Due Diligence Checklist */}
            <div className="space-y-2">
              <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
                Due Diligence Verification Checklist
              </span>
              <div className="space-y-1.5 text-xs text-slate-800">
                {activeTenure.dueDiligenceChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-slate-50 rounded border border-slate-100">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Red Flags */}
            <div className="space-y-2">
              <span className="font-bold text-rose-900 block uppercase tracking-wider text-[11px]">
                Frequent Fatal Red Flags Found in Scrutiny
              </span>
              <div className="space-y-1 text-xs">
                {activeTenure.sampleRedFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-rose-50/40 rounded border border-rose-200/60 text-rose-950">
                    <span className="text-rose-600 font-bold">⚠</span>
                    <span>{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
