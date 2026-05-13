'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '@/components/dashboard/SearchBar';
import { CategoryFilter } from '@/components/dashboard/CategoryFilter';
import { ToolGrid } from '@/components/dashboard/ToolGrid';
import { MOCK_TOOLS, CATEGORIES } from '@/lib/mock-data';
import { Tool } from '@/types/database';

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = MOCK_TOOLS.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleToolClick = (tool: Tool) => {
    router.push(`/tools/${tool.id}`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back!</h1>
        <p className="text-slate-500 mt-2">Choose an AI tool to get started with your content creation.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          {selectedCategory === 'All' ? 'All Tools' : `${selectedCategory} Tools`}
        </h2>
        <ToolGrid tools={filteredTools} onToolClick={handleToolClick} />
      </div>
    </div>
  );
}
