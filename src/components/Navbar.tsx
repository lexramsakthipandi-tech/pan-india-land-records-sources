/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Scale, FileText, Building2, MapPin, Gavel, Landmark, Printer } from 'lucide-react';

export type ActiveTab =
  | 'portals'
  | 'decision_rules'
  | 'multi_property'
  | 'central_tenure'
  | 'glossary_area'
  | 'court_precedents'
  | 'bank_lsr'
  | 'training_corpus';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onQuickPrint?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onQuickPrint }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'portals', label: 'Portals & EC', icon: Landmark },
    { id: 'decision_rules', label: 'Decision Rules', icon: Scale },
    { id: 'multi_property', label: 'Multi-Unit & UDS', icon: Building2 },
    { id: 'central_tenure', label: 'Statutes & Restrictions', icon: FileText },
    { id: 'glossary_area', label: 'Vocabulary & Area', icon: MapPin },
    { id: 'court_precedents', label: 'Precedents', icon: Gavel },
    { id: 'bank_lsr', label: 'Bank LSR', icon: ShieldCheck },
    { id: 'training_corpus', label: 'Raw Training Sources', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 text-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Brand Zone */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shrink-0">
              <Scale className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
                NyayaBhumi
              </span>
            </div>
          </div>

          {/* Navigation Items (Single-line controls) */}
          <nav className="hidden md:flex items-center gap-1 shrink">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-semibold shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-2 shrink-0">
            {onQuickPrint && (
              <button
                onClick={onQuickPrint}
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors whitespace-nowrap"
                title="Print Legal Scrutiny Report"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Print Dossier</span>
              </button>
            )}
            <button
              onClick={() => setActiveTab('bank_lsr')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-xs transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Draft LSR</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1 border-t border-slate-800 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs rounded whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
