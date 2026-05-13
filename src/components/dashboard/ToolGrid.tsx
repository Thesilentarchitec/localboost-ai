import React from 'react';
import { ToolCard } from './ToolCard';
import { Tool } from '@/types/database';

interface ToolGridProps {
  tools: Tool[];
  onToolClick: (tool: Tool) => void;
}

export function ToolGrid({ tools, onToolClick }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-slate-900">No tools found</h3>
        <p className="text-slate-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <ToolCard 
          key={tool.id} 
          tool={tool} 
          onClick={onToolClick} 
        />
      ))}
    </div>
  );
}
