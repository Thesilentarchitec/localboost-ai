import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <button
        onClick={() => onSelect('All')}
        className={cn(
          "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
          selectedCategory === 'All'
            ? "bg-blue-600 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
