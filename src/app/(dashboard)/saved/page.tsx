'use client';

import React, { useState, useEffect } from 'react';
import { ToolRun } from '@/types/database';
import { ResultBox } from '@/components/dashboard/ResultBox';
import { Sparkles, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function SavedResultsPage() {
  const [runs, setToolRuns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRuns = async () => {
      try {
        const response = await fetch('/api/tool-runs');
        const data = await response.json();
        setToolRuns(data.data || []);
      } catch (error) {
        console.error('Failed to fetch runs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRuns();
  }, []);

  if (isLoading) {
    return <div className="p-8 text-center text-slate-500">Loading saved results...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Saved Results</h1>
        <p className="text-slate-500 mt-2">Access your previously generated AI content.</p>
      </div>

      {runs.length === 0 ? (
        <div className="p-12 bg-white border border-slate-200 rounded-2xl border-dashed flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No saved results yet</h3>
          <p className="text-slate-500 mt-1 max-w-xs">Start using our AI tools and save your favorite generations to see them here.</p>
          <Link href="/dashboard" className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
            Browse Tools
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {runs.map((run) => (
            <div key={run.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm text-blue-600">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{run.tools?.name || 'Unknown Tool'}</h3>
                    <p className="text-xs text-slate-500">Generated on {new Date(run.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <Link 
                  href={`/tools/${run.tool_id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Try again
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              <div className="p-6">
                <p className="text-slate-700 whitespace-pre-wrap line-clamp-4 text-sm leading-relaxed">
                  {run.output_data}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-2">
                    {Object.entries(run.input_data).slice(0, 2).map(([key, value]: [string, any]) => (
                      <span key={key} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium uppercase tracking-tight">
                        {key}: {String(value)}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(run.output_data);
                      alert('Copied to clipboard!');
                    }}
                    className="text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Copy full text
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
