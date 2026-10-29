/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { PAN_INDIA_PORTALS } from '../data/portalDirectory';
import { Search, ExternalLink, ShieldCheck, AlertTriangle, FileCheck, Layers, MapPin, CheckCircle2 } from 'lucide-react';

export const PortalDirectoryView: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPortalId, setSelectedPortalId] = useState<string>(PAN_INDIA_PORTALS[0].id);

  const filteredPortals = useMemo(() => {
    return PAN_INDIA_PORTALS.filter((portal) => {
      const matchState = selectedState === 'ALL' || portal.id === selectedState;
      const matchQuery =
        !searchQuery ||
        portal.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.portalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        portal.documentsProvided.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())) ||
        portal.searchModes.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
        portal.caveatsAndPitfalls.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchState && matchQuery;
    });
  }, [selectedState, searchQuery]);

  const activePortal = useMemo(() => {
    return PAN_INDIA_PORTALS.find((p) => p.id === selectedPortalId) || filteredPortals[0] || PAN_INDIA_PORTALS[0];
  }, [selectedPortalId, filteredPortals]);

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Pan-India Land Records & Encumbrance Certificate Directory
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Official state sub-registrar registries, computerized Record of Rights (RoR), online EC search engines, CERSAI security interests, and RERA registries.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Official State Government & Statutory Portals</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state, document (EC, 7/12, Patta, Index II), survey term, or caveat..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-700"
          >
            <option value="ALL">All Jurisdictions ({PAN_INDIA_PORTALS.length})</option>
            {PAN_INDIA_PORTALS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.state}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main 2-Column Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: State List */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredPortals.map((portal) => {
            const isSelected = activePortal.id === portal.id;
            return (
              <button
                key={portal.id}
                onClick={() => setSelectedPortalId(portal.id)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all text-xs ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-semibold text-sm ${isSelected ? 'text-amber-400' : 'text-slate-900'}`}>
                    {portal.state}
                  </span>
                  <span className={`text-[10px] uppercase font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {portal.yearsAvailableOnline.split(';')[0]}
                  </span>
                </div>
                <div className={`mt-1 font-medium truncate ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                  {portal.portalName}
                </div>
                <div className={`mt-2 flex flex-wrap gap-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  <span>{portal.documentsProvided.length} Key Records</span>
                  <span>·</span>
                  <span>{portal.searchModes.length} Search Modes</span>
                </div>
              </button>
            );
          })}

          {filteredPortals.length === 0 && (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-lg text-slate-500 text-sm">
              No state portals matching query "{searchQuery}".
            </div>
          )}
        </div>

        {/* Right Column: Portal Deep Dive Scrutiny Card */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-6">
          {/* Header of Active Portal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900">{activePortal.state}</h2>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                  {activePortal.department}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-amber-800">
                {activePortal.portalName}
              </p>
            </div>
            <a
              href={activePortal.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold shadow-xs transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>Launch Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>

          {/* Key 4 Records Quadrant */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Essential Land Records Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                  Primary Title Proof
                </span>
                <p className="mt-1 text-slate-700">{activePortal.keyRecords.titleProof}</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  Possession / Revenue Record
                </span>
                <p className="mt-1 text-slate-700">{activePortal.keyRecords.possessionRecord}</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  Map / Cadastral Sketch
                </span>
                <p className="mt-1 text-slate-700">{activePortal.keyRecords.mapRecord}</p>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  Numbering Scheme
                </span>
                <p className="mt-1 text-slate-700">{activePortal.keyRecords.numberingScheme}</p>
              </div>
            </div>
          </div>

          {/* Search Modes & Documents Available */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Permissible Search Criteria
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activePortal.searchModes.map((mode, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">›</span>
                    <span>{mode}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Downloadable & Searchable Records
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activePortal.documentsProvided.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Encumbrance Certificate (EC) Scrutiny Notes */}
          <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-lg">
            <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              Encumbrance Certificate (EC) Search Methodology & Span
            </h3>
            <p className="text-xs text-amber-950 leading-relaxed mt-1">
              {activePortal.ecSearchNotes}
            </p>
            <div className="mt-2 text-xs text-amber-800 font-mono">
              Online Digitization Span: <strong className="text-slate-900">{activePortal.yearsAvailableOnline}</strong>
            </div>
          </div>

          {/* Caveats and Common Pitfalls */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-rose-800">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              State-Specific Caveats, Exceptions & Pitfalls
            </h3>
            <div className="space-y-2">
              {activePortal.caveatsAndPitfalls.map((pitfall, idx) => (
                <div key={idx} className="p-3 bg-rose-50/40 border border-rose-200/60 rounded text-xs text-rose-950 leading-relaxed">
                  <span className="font-semibold text-rose-900 mr-1.5">Caveat #{idx + 1}:</span>
                  {pitfall}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
