/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, Download, FileText, Code2, Database } from 'lucide-react';
import { PAN_INDIA_PORTALS } from '../data/portalDirectory';
import { CENTRAL_LAWS_DATA } from '../data/centralLaws';
import { LAND_TENURE_DATA } from '../data/landTenure';
import { STATE_LAND_GLOSSARY } from '../data/stateGlossary';
import { APARTMENT_PROJECT_STAGES } from '../data/apartmentsProjects';
import { SUPREME_COURT_BENCHMARKS } from '../data/courtsDisputes';
import { BANK_SCRUTINY_GUIDELINES } from '../data/bankScrutiny';
import { PAN_INDIA_DECISION_RULES } from '../utils/decisionRules';
import { AREA_UNITS } from '../utils/areaConverter';

export const TrainingCorpusView: React.FC = () => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const getFullTrainingCorpus = () => {
    return {
      metadata: {
        corpusTitle: 'Pan-India Real Estate Title Scrutiny, Land Records & Encumbrance Training Dataset',
        jurisdiction: 'Republic of India (Central Laws + 15+ State Land Revenue Regimes)',
        version: '2026.1',
        primarySources: [
          'India Code (indiacode.nic.in)',
          'Supreme Court of India (main.sci.gov.in / Judgments Information System)',
          'State Registration & Stamps Departments (Inspector General of Registration)',
          'State Revenue & Land Records Directorates (Bhoomi, Mahabhulekh, Banglarbhumi, Bhulekh UP, etc.)',
          'CERSAI Central Registry (cersai.org.in)',
          'State RERA Portals (MahaRERA, K-RERA, TNRERA, UP-RERA, HRERA)',
          'Reserve Bank of India Master Directions & Bank Legal Scrutiny Manuals (SBI, HDFC, ICICI)',
        ],
      },
      centralLawsPassingTitle: CENTRAL_LAWS_DATA,
      landTenureAndRestrictions: LAND_TENURE_DATA,
      stateLandRecordGlossary: STATE_LAND_GLOSSARY,
      areaUnitsAndConversionFactors: AREA_UNITS,
      apartmentsProjectsAndRERA: APARTMENT_PROJECT_STAGES,
      supremeCourtPrecedents: SUPREME_COURT_BENCHMARKS,
      bankScrutinyManualsAndCersai: BANK_SCRUTINY_GUIDELINES,
      decisionRulesEngine: PAN_INDIA_DECISION_RULES,
      statePortalsDirectory: PAN_INDIA_PORTALS,
    };
  };

  const jsonString = JSON.stringify(getFullTrainingCorpus(), null, 2);

  const handleCopy = (format: 'json') => {
    navigator.clipboard.writeText(jsonString);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pan_india_title_scrutiny_training_corpus.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Raw Training Corpus & Machine-Readable Sources
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Complete, verified structured data for training your legal AI models, knowledge graphs, or ingestion pipelines.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy('json')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md shadow-xs transition-colors"
            >
              {copiedFormat === 'json' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedFormat === 'json' ? 'Copied JSON!' : 'Copy Raw JSON'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-md shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Download Dataset (.json)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dataset Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 bg-white border border-slate-200 rounded-lg">
          <span className="text-[10px] text-slate-500 uppercase block font-semibold">Central Statutes & Acts</span>
          <span className="text-base font-bold text-slate-900 font-mono">7 Frameworks</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-lg">
          <span className="text-[10px] text-slate-500 uppercase block font-semibold">State Land Portals</span>
          <span className="text-base font-bold text-slate-900 font-mono">{PAN_INDIA_PORTALS.length} Registries</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-lg">
          <span className="text-[10px] text-slate-500 uppercase block font-semibold">Decision Rules Scrutiny</span>
          <span className="text-base font-bold text-slate-900 font-mono">{PAN_INDIA_DECISION_RULES.length} Edge Cases</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-lg">
          <span className="text-[10px] text-slate-500 uppercase block font-semibold">SC Precedents & Ratios</span>
          <span className="text-base font-bold text-slate-900 font-mono">{SUPREME_COURT_BENCHMARKS.length} Benchmarks</span>
        </div>
      </div>

      {/* Code / JSON Viewer */}
      <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden shadow-xs">
        <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="font-mono font-semibold text-slate-200">pan_india_title_scrutiny_training_corpus.json</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">{(jsonString.length / 1024).toFixed(1)} KB UTF-8</span>
        </div>
        <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[600px] leading-relaxed">
          {jsonString}
        </pre>
      </div>
    </div>
  );
};
