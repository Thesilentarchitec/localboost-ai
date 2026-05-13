import React from 'react';
import { LucideIcon, Lock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tool } from '@/types/database';

interface ToolCardProps {
  tool: Tool;
  onClick: (tool: Tool) => void;
}

export function ToolCard({ tool, onClick }: ToolCardProps) {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[tool.icon] || LucideIcons.Wrench;

  return (
    <div 
      onClick={() => onClick(tool)}
      className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer overflow-hidden"
    >
      {tool.is_premium && (
        <div className="absolute top-4 right-4 text-slate-400">
          <Lock className="w-4 h-4" />
        </div>
      )}
      
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
        "bg-slate-50 group-hover:bg-blue-50"
      )}>
        <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
        {tool.name}
      </h3>
      
      <p className="text-sm text-slate-500 mt-2 line-clamp-2">
        {tool.description}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
          {tool.category}
        </span>
        {tool.is_premium && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100">
            Premium
          </span>
        )}
      </div>
    </div>
  );
}
