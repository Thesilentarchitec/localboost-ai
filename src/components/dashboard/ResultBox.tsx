import React, { useState } from 'react';
import { Copy, RefreshCw, Save, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultBoxProps {
  content: string;
  onRegenerate: () => void;
  onSave: () => void;
  isSaving: boolean;
}

export function ResultBox({ content, onRegenerate, onSave, isSaving }: ResultBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">AI Result</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={onRegenerate}
            className="p-2 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200"
            title="Regenerate"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onSave}
            disabled={isSaving}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm font-bold rounded-lg transition-all",
              "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20 disabled:opacity-50"
            )}
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save Result'}
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="prose prose-slate max-w-none">
          <p className="whitespace-pre-wrap text-slate-700 leading-relaxed text-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
