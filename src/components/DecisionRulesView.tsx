/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PAN_INDIA_DECISION_RULES, findMatchingDecisionRules } from '../utils/decisionRules';
import { DecisionRule, RiskLevel } from '../types';
import { Search, AlertCircle, CheckCircle2, AlertTriangle, ShieldAlert, ArrowRight, HelpCircle, FileText, Bookmark } from 'lucide-react';

export const DecisionRulesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeRuleId, setActiveRuleId] = useState<string>(PAN_INDIA_DECISION_RULES[0].id);

  const filteredRules = findMatchingDecisionRules(selectedCategory, searchTerm);
  const activeRule: DecisionRule =
    PAN_INDIA_DECISION_RULES.find((r) => r.id === activeRuleId) || filteredRules[0] || PAN_INDIA_DECISION_RULES[0];

  const getRiskBadge = (risk: RiskLevel) => {
    switch (risk) {
      case 'CLEAR':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            Title Passes / Clear
          </span>
        );
      case 'QUALIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            Conditional / Requires Qualification
          </span>
        );
      case 'DEFECTIVE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-rose-100 text-rose-900 border border-rose-300">
            <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
            Defective / Title Cloud
          </span>
        );
      case 'HIGH_RISK':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-red-100 text-red-950 border border-red-400">
            <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
            Fatal Defect / Bank Reject
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Legal Reviewer Decision Rules Engine
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Statutory tests translated into actionable scrutiny rules: <span className="font-semibold text-slate-900">Situation → What Passes Title → What to Ask Reviewer → How it Appears in Schedule & Chain</span>.
        </p>

        {/* Filters */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search edge case (e.g. unregistered partition, Suraj Lamp, minor share, area mismatch, will)..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-700"
          >
            <option value="ALL">All Categories ({PAN_INDIA_DECISION_RULES.length})</option>
            <option value="PARTITION">Partitions & Releases</option>
            <option value="POA">Power of Attorney & Suraj Lamp</option>
            <option value="WILL">Wills & Probate</option>
            <option value="GIFT">Gifts & Settlements</option>
            <option value="SUCCESSION">Intestate Heirs & Succession</option>
            <option value="MINOR">Minors' Interests</option>
            <option value="CORPORATE">Corporate & Insolvency (IBC)</option>
            <option value="AREA_MISMATCH">Area & Resurvey Mismatch</option>
            <option value="SUB_PLOT">Portion of Larger Survey</option>
            <option value="MULTI_UNIT_JDA">Apartments & JDA Sharing</option>
            <option value="RESTRICTED_LAND">SC/ST & Restricted Lands</option>
          </select>
        </div>
      </div>

      {/* 2-Column Split: Rule List vs Deep Scrutiny Rule Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Decision Rules List */}
        <div className="lg:col-span-5 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredRules.map((rule) => {
            const isSelected = activeRule.id === rule.id;
            return (
              <button
                key={rule.id}
                onClick={() => setActiveRuleId(rule.id)}
                className={`w-full text-left p-4 rounded-lg border transition-all text-xs ${
                  isSelected
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-[10px] uppercase font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                    {rule.category}
                  </span>
                  <div>
                    {rule.riskRating === 'CLEAR' && <span className="text-emerald-400 font-bold">Clear</span>}
                    {rule.riskRating === 'QUALIFIED' && <span className="text-amber-400 font-bold">Qualified</span>}
                    {rule.riskRating === 'DEFECTIVE' && <span className="text-rose-400 font-bold">Defective</span>}
                    {rule.riskRating === 'HIGH_RISK' && <span className="text-red-400 font-bold">Fatal Defect</span>}
                  </div>
                </div>
                <p className={`mt-1.5 font-medium line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-100' : 'text-slate-900'}`}>
                  {rule.situation}
                </p>
                <div className={`mt-2 text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {rule.statutoryProvisions.join(' · ')}
                </div>
              </button>
            );
          })}

          {filteredRules.length === 0 && (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-lg text-slate-500 text-sm">
              No decision rules matching your query.
            </div>
          )}
        </div>

        {/* Right: Active Rule Deep Dive Card (Exact Format Requested) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
          {/* Top Status & Situation */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase">
                {activeRule.category}
              </span>
              {getRiskBadge(activeRule.riskRating)}
            </div>
            <h2 className="text-base font-bold text-slate-900 leading-snug">
              {activeRule.situation}
            </h2>
          </div>

          {/* 1. What Passes Title Rule */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              1. What Passes Title (Statutory Standard)
            </h3>
            <div className="p-3.5 bg-emerald-50/50 border border-emerald-200/80 rounded-lg text-xs text-slate-800 leading-relaxed">
              {activeRule.whatPassesTitleRule}
            </div>
          </div>

          {/* 2. What to Ask the Reviewer */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-slate-800">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              2. What to Ask the Reviewer / Demands to Raise
            </h3>
            <div className="p-3.5 bg-amber-50/40 border border-amber-200/70 rounded-lg space-y-2 text-xs text-slate-800">
              {activeRule.whatToAskReviewer.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 shrink-0">Q{idx + 1}:</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. How it Appears in Schedule & Chain */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-slate-800">
              <FileText className="w-4 h-4 text-blue-600" />
              3. How it Appears in the Schedule and Chain of Title
            </h3>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed font-mono">
              {activeRule.howAppearsInScheduleAndChain}
            </div>
          </div>

          {/* 4. Bank Qualification Standard Wording */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 text-slate-800">
              <Bookmark className="w-4 h-4 text-purple-600" />
              4. Standard Bank Disclaimer / Qualification Wording
            </h3>
            <div className="p-3.5 bg-purple-50/40 border border-purple-200/70 rounded-lg text-xs text-purple-950 italic leading-relaxed">
              "{activeRule.qualificationWording}"
            </div>
          </div>

          {/* Statutes & Precedents Citations */}
          <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-1">
                Statutory Provisions
              </span>
              <div className="flex flex-wrap gap-1">
                {activeRule.statutoryProvisions.map((stat, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px]">
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-1">
                Governing Supreme Court Precedents
              </span>
              <ul className="space-y-1 text-slate-700 font-medium text-[11px]">
                {activeRule.governingPrecedents.map((prec, i) => (
                  <li key={i} className="truncate" title={prec}>
                    · {prec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
