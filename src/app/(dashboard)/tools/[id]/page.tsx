'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { DynamicForm } from '@/components/dashboard/DynamicForm';
import { ResultBox } from '@/components/dashboard/ResultBox';
import { PremiumLock } from '@/components/dashboard/PremiumLock';
import { Tool } from '@/types/database';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase';

export default function ToolExecutionPage() {
  const params = useParams();
  const router = useRouter();
  const toolId = params.id as string;
  
  const [tool, setTool] = useState<Tool | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [result, setResult] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .eq('id', toolId)
          .single();

        if (error) throw error;
        setTool(data);
      } catch (error) {
        console.error('Error fetching tool:', error);
        // Could redirect to dashboard if not found
      } finally {
        setIsLoading(false);
      }
    };

    if (toolId) {
      fetchTool();
    }
  }, [toolId]);

  const handleInputChange = (name: string, value: any) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tool) return;

    setIsGenerating(true);
    setResult('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt_template: tool.prompt_template,
          variables: formValues,
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      setResult(data.output_data);
    } catch (error: any) {
      alert('Generation failed: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!tool || !result) return;

    setIsSaving(true);
    try {
      const response = await fetch('/api/tool-runs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool_id: tool.id,
          input_data: formValues,
          output_data: result,
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      alert('Result saved successfully!');
    } catch (error: any) {
      alert('Failed to save result: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Sparkles className="w-8 h-8 text-blue-600 animate-spin mb-4" />
        <p className="text-slate-500 font-medium">Loading tool details...</p>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="p-12 bg-white border border-slate-200 rounded-2xl border-dashed flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-bold text-slate-900">Tool not found</h3>
        <p className="text-slate-500 mt-1">The tool you are looking for does not exist or has been removed.</p>
        <Link href="/dashboard" className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Link 
        href="/dashboard" 
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </Link>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{tool.name}</h1>
            <p className="text-slate-500 mt-1">{tool.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            {tool.category}
          </span>
          {tool.is_premium && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-100">
              Premium
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        {/* Input Section */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Wand2 className="w-5 h-5 text-blue-600" />
              Configure Inputs
            </h2>
            
            {tool.is_premium ? (
              <PremiumLock onUpgrade={() => alert('Upgrade flow coming soon!')} />
            ) : (
              <DynamicForm 
                fields={tool.input_fields}
                values={formValues}
                onChange={handleInputChange}
                onSubmit={handleGenerate}
                isGenerating={isGenerating}
              />
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="lg:col-span-7">
          {result ? (
            <ResultBox 
              content={result} 
              onRegenerate={() => handleGenerate({ preventDefault: () => {} } as any)}
              onSave={handleSave}
              isSaving={isSaving}
            />
          ) : (
            <div className="h-full min-h-[400px] bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Wand2 className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-400">Ready to Generate</h3>
              <p className="text-slate-400 mt-2 max-w-xs mx-auto">
                Fill out the form and click "Generate Content" to see the AI magic happen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
