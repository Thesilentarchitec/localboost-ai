import React from 'react';
import { Lock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumLockProps {
  onUpgrade?: () => void;
}

export function PremiumLock({ onUpgrade }: PremiumLockProps) {
  return (
    <div className="relative">
      {/* Blurred background preview */}
      <div className="filter blur-md select-none pointer-events-none opacity-40 space-y-6">
        <div className="h-10 bg-slate-200 rounded-lg w-1/3"></div>
        <div className="h-32 bg-slate-100 rounded-xl"></div>
        <div className="h-12 bg-slate-200 rounded-xl"></div>
      </div>

      {/* Overlay CTA */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl shadow-blue-500/10 border-t-4 border-t-blue-600">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Tool</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            This tool is part of our Premium library. Upgrade to get access to all advanced AI workflows.
          </p>

          <button
            onClick={onUpgrade}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/25 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Upgrade to Pro (€49/month)
          </button>
          
          <p className="mt-4 text-xs text-slate-400">
            Cancel anytime. 7-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
