/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STATE_LAND_GLOSSARY } from '../data/stateGlossary';
import { AREA_UNITS, convertArea, evaluateAreaDiscrepancy, AreaComparisonResult } from '../utils/areaConverter';
import { Calculator, MapPin, Scale, ArrowRightLeft, FileCheck, Layers, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';

export const StateGlossaryAndAreaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'glossary' | 'converter'>('converter');
  const [selectedStateIndex, setSelectedStateIndex] = useState<number>(0);

  // Converter state
  const [sourceValue, setSourceValue] = useState<number>(1);
  const [sourceUnit, setSourceUnit] = useState<string>('acre');
  const [targetUnit, setTargetUnit] = useState<string>('cent');

  // Discrepancy state
  const [deedValue, setDeedValue] = useState<number>(2400);
  const [deedUnit, setDeedUnit] = useState<string>('sq_ft');
  const [revenueValue, setRevenueValue] = useState<number>(2400);
  const [revenueUnit, setRevenueUnit] = useState<string>('sq_ft');
  const [surveyValue, setSurveyValue] = useState<number>(2385);
  const [surveyUnit, setSurveyUnit] = useState<string>('sq_ft');

  const convertedValue = convertArea(sourceValue, sourceUnit, targetUnit);

  const discrepancyResult: AreaComparisonResult = evaluateAreaDiscrepancy(
    deedValue,
    deedUnit,
    revenueValue,
    revenueUnit,
    surveyValue,
    surveyUnit
  );

  const activeGlossary = STATE_LAND_GLOSSARY[selectedStateIndex] || STATE_LAND_GLOSSARY[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              State Land Record Vocabulary & Area Engine
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Comparative glossary of title, possession and survey records by state, plus a high-precision regional area converter and boundary-vs-extent variance evaluator.
            </p>
          </div>
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setActiveTab('converter')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'converter'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Area Converter & Discrepancy Checker
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'glossary'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              State-by-State Glossary Matrix
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Area Converter & Discrepancy Evaluator */}
      {activeTab === 'converter' && (
        <div className="space-y-6">
          {/* Section A: Regional Area Unit Converter */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-600" />
              Pan-India High-Precision Area Unit Converter
            </h2>
            <p className="text-xs text-slate-500">
              Never confuse regional measures: converts between standard and localized land measures (e.g. UP Pakka Bigha vs Bengal Bigha vs Guntha vs Cent vs Ground).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center pt-2">
              <div className="md:col-span-3 space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">Source Measurement</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={sourceValue}
                    onChange={(e) => setSourceValue(Number(e.target.value))}
                    className="w-1/2 px-3 py-2 text-sm font-mono border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500/20"
                  />
                  <select
                    value={sourceUnit}
                    onChange={(e) => setSourceUnit(e.target.value)}
                    className="w-1/2 px-3 py-2 text-xs border border-slate-300 rounded-md bg-slate-50"
                  >
                    {Object.values(AREA_UNITS).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-[11px] text-slate-500 block truncate">
                  Region: {AREA_UNITS[sourceUnit]?.region}
                </span>
              </div>

              <div className="md:col-span-1 flex justify-center py-2 md:py-0">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
              </div>

              <div className="md:col-span-3 space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700">Converted Output</label>
                <div className="flex gap-2">
                  <div className="w-1/2 px-3 py-2 text-sm font-mono font-bold bg-slate-100 border border-slate-200 rounded-md flex items-center text-slate-900 tabular-nums truncate">
                    {convertedValue.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                  </div>
                  <select
                    value={targetUnit}
                    onChange={(e) => setTargetUnit(e.target.value)}
                    className="w-1/2 px-3 py-2 text-xs border border-slate-300 rounded-md bg-slate-50"
                  >
                    {Object.values(AREA_UNITS).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-[11px] text-slate-500 block truncate">
                  {AREA_UNITS[targetUnit]?.notes}
                </span>
              </div>
            </div>

            {/* Quick Conversion Reference Strip */}
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-600 font-mono">
              <div className="p-2 bg-slate-50 rounded">1 Acre = 43,560 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Cent = 435.60 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Guntha = 1,089 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Ground = 2,400 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 UP Bigha = 27,225 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Bengal Bigha = 14,400 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Kanal = 5,445 Sq Ft</div>
              <div className="p-2 bg-slate-50 rounded">1 Marla = 272.25 Sq Ft</div>
            </div>
          </div>

          {/* Section B: Deed vs Revenue vs Survey Area Discrepancy Evaluator */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-purple-600" />
                  Deed vs Revenue vs Survey Discrepancy Evaluator
                </h2>
                <p className="text-xs text-slate-500">
                  Tests whether physical boundaries prevail over extent under Supreme Court jurisprudence or if a Rectification Deed is legally required.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                <span className="font-semibold text-slate-900 block">1. Sale Deed Area</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={deedValue}
                    onChange={(e) => setDeedValue(Number(e.target.value))}
                    className="w-1/2 px-2.5 py-1.5 font-mono text-xs border border-slate-300 rounded bg-white"
                  />
                  <select
                    value={deedUnit}
                    onChange={(e) => setDeedUnit(e.target.value)}
                    className="w-1/2 text-[11px] border border-slate-300 rounded bg-white"
                  >
                    {Object.values(AREA_UNITS).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-[11px] text-slate-500 block font-mono">
                  = {discrepancyResult.deedSqFt} Sq. Ft.
                </span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                <span className="font-semibold text-slate-900 block">2. Revenue / Patta Area</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={revenueValue}
                    onChange={(e) => setRevenueValue(Number(e.target.value))}
                    className="w-1/2 px-2.5 py-1.5 font-mono text-xs border border-slate-300 rounded bg-white"
                  />
                  <select
                    value={revenueUnit}
                    onChange={(e) => setRevenueUnit(e.target.value)}
                    className="w-1/2 text-[11px] border border-slate-300 rounded bg-white"
                  >
                    {Object.values(AREA_UNITS).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-[11px] text-slate-500 block font-mono">
                  = {discrepancyResult.revenueSqFt} Sq. Ft.
                </span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                <span className="font-semibold text-slate-900 block">3. Ground Survey Area</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={surveyValue}
                    onChange={(e) => setSurveyValue(Number(e.target.value))}
                    className="w-1/2 px-2.5 py-1.5 font-mono text-xs border border-slate-300 rounded bg-white"
                  />
                  <select
                    value={surveyUnit}
                    onChange={(e) => setSurveyUnit(e.target.value)}
                    className="w-1/2 text-[11px] border border-slate-300 rounded bg-white"
                  >
                    {Object.values(AREA_UNITS).map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.name}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-[11px] text-slate-500 block font-mono">
                  = {discrepancyResult.surveySqFt} Sq. Ft.
                </span>
              </div>
            </div>

            {/* Evaluation Results Card */}
            <div
              className={`p-4 rounded-lg border text-xs space-y-2 ${
                discrepancyResult.bankScrutinySeverity === 'CLEAR'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : discrepancyResult.bankScrutinySeverity === 'QUALIFIED'
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm flex items-center gap-1.5">
                  {discrepancyResult.bankScrutinySeverity === 'CLEAR' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  {discrepancyResult.bankScrutinySeverity === 'QUALIFIED' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                  {discrepancyResult.bankScrutinySeverity === 'DEFECTIVE' && <AlertCircle className="w-4 h-4 text-rose-600" />}
                  Variance: {discrepancyResult.variancePercentage}% ({discrepancyResult.maxDiscrepancySqFt} Sq. Ft. delta)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/80 font-semibold border border-slate-200">
                  {discrepancyResult.bankScrutinySeverity}
                </span>
              </div>

              <div>
                <strong className="block mb-0.5">Legal Ratio & Jurisprudence:</strong>
                <p className="leading-relaxed">{discrepancyResult.legalOpinion}</p>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <strong className="block mb-0.5">Recommended Conveyancing Action:</strong>
                <p className="leading-relaxed font-semibold">{discrepancyResult.recommendedAction}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: State-by-State Glossary Matrix */}
      {activeTab === 'glossary' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: State selector */}
          <div className="lg:col-span-4 space-y-1.5">
            {STATE_LAND_GLOSSARY.map((item, idx) => {
              const isSelected = selectedStateIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStateIndex(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{item.state}</span>
                    <span className={`text-[10px] uppercase font-mono ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                      {item.region}
                    </span>
                  </div>
                  <p className={`mt-1 text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.titleProofRecord.split('+')[0]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: State Vocabulary Card */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg p-6 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-[10px] font-mono uppercase font-semibold text-slate-500">
                {activeGlossary.region}
              </span>
              <h2 className="text-xl font-bold text-slate-900">{activeGlossary.state} Land Records Taxonomy</h2>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-blue-600" />
                  Title Proof Record
                </span>
                <p className="font-semibold text-blue-900">{activeGlossary.titleProofRecord}</p>
                <p className="text-slate-600 leading-relaxed text-[11px] mt-1">{activeGlossary.titleProofDescription}</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-600" />
                  Possession & Revenue Record
                </span>
                <p className="font-semibold text-emerald-900">{activeGlossary.possessionRecord}</p>
                <p className="text-slate-600 leading-relaxed text-[11px] mt-1">{activeGlossary.possessionDescription}</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  Cadastral Map / Sketch Record
                </span>
                <p className="font-semibold text-purple-900">{activeGlossary.mapRecord}</p>
                <p className="text-slate-600 leading-relaxed text-[11px] mt-1">{activeGlossary.mapDescription}</p>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  Survey Numbering Scheme
                </span>
                <p className="font-mono text-slate-900 font-semibold">{activeGlossary.numberingScheme}</p>
                <p className="text-slate-600 text-[11px] mt-1">
                  How sub-divisions & plots are indexed in the revenue registry.
                </p>
              </div>
            </div>

            {/* Sub-divisions & Resurvey Mechanisms */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3.5 bg-amber-50/40 border border-amber-200 rounded-lg">
                <span className="font-bold text-amber-900 block mb-1">
                  Sub-Division & Renumbering Rules (Parent vs Hissa / Phodi):
                </span>
                <p className="text-amber-950 leading-relaxed">{activeGlossary.subdivisionMechanism}</p>
              </div>

              <div className="p-3.5 bg-blue-50/40 border border-blue-200 rounded-lg">
                <span className="font-bold text-blue-900 block mb-1">
                  Resurvey & Settlement Impact (Old vs New Correlation):
                </span>
                <p className="text-blue-950 leading-relaxed">{activeGlossary.resurveyImpact}</p>
              </div>
            </div>

            {/* Local Units Table */}
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Local Measurement Units in {activeGlossary.state}
              </span>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                    <tr>
                      <th className="py-2 px-3">Unit Name</th>
                      <th className="py-2 px-3 text-right">In Sq. Feet</th>
                      <th className="py-2 px-3 text-right">In Sq. Yards</th>
                      <th className="py-2 px-3">Usage & Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {activeGlossary.localAreaUnits.map((u, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-semibold text-slate-900">{u.unitName}</td>
                        <td className="py-2 px-3 text-right font-mono tabular-nums">{u.inSqFt.toLocaleString()}</td>
                        <td className="py-2 px-3 text-right font-mono tabular-nums">{u.inSqYards.toLocaleString()}</td>
                        <td className="py-2 px-3 text-slate-600 text-[11px]">{u.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
