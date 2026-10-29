/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { PortalDirectoryView } from './components/PortalDirectoryView';
import { DecisionRulesView } from './components/DecisionRulesView';
import { MultiPropertyUdsView } from './components/MultiPropertyUdsView';
import { CentralAndTenureLawsView } from './components/CentralAndTenureLawsView';
import { StateGlossaryAndAreaView } from './components/StateGlossaryAndAreaView';
import { CourtPrecedentsView } from './components/CourtPrecedentsView';
import { BankLsrGeneratorView } from './components/BankLsrGeneratorView';
import { TrainingCorpusView } from './components/TrainingCorpusView';
import { Scale, ShieldCheck, MapPin, Building2, Gavel, FileCheck, Layers } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('portals');

  const handleQuickPrint = () => {
    setActiveTab('bank_lsr');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onQuickPrint={handleQuickPrint}
      />

      {/* Main Workspace Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Active Module View */}
        {activeTab === 'portals' && <PortalDirectoryView />}
        {activeTab === 'decision_rules' && <DecisionRulesView />}
        {activeTab === 'multi_property' && <MultiPropertyUdsView />}
        {activeTab === 'central_tenure' && <CentralAndTenureLawsView />}
        {activeTab === 'glossary_area' && <StateGlossaryAndAreaView />}
        {activeTab === 'court_precedents' && <CourtPrecedentsView />}
        {activeTab === 'bank_lsr' && <BankLsrGeneratorView />}
        {activeTab === 'training_corpus' && <TrainingCorpusView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 no-print text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-amber-600" />
            <span className="font-semibold text-slate-800">NyayaBhumi Legal Scrutiny</span>
            <span aria-hidden="true">·</span>
            <span>Pan-India Property Title Verification & Conveyancing Engine</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Transfer of Property Act 1882</span>
            <span aria-hidden="true">·</span>
            <span>Registration Act 1908</span>
            <span aria-hidden="true">·</span>
            <span>RERA 2016</span>
            <span aria-hidden="true">·</span>
            <span>SARFAESI 2002</span>
            <span aria-hidden="true">·</span>
            <span>CERSAI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
