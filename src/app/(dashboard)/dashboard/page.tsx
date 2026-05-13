'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SearchBar } from '@/components/dashboard/SearchBar';
import { CategoryFilter } from '@/components/dashboard/CategoryFilter';
import { ToolGrid } from '@/components/dashboard/ToolGrid';
import { MOCK_TOOLS, CATEGORIES } from '@/lib/mock-data';
import { Tool } from '@/types/database';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [tools, setTools] = useState<Tool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('tools')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;
        setTools(data && data.length > 0 ? data : MOCK_TOOLS);
      } catch (error) {
        console.error('Error fetching tools, falling back to mock data:', error);
        setTools(MOCK_TOOLS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTools();
  }, []);

  const filteredTools = tools.filter((tool) => {
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
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-500">Loading AI tools...</p>
          </div>
        ) : (
          <ToolGrid tools={filteredTools} onToolClick={handleToolClick} />
        )}
      </div>
    </div>
  );
}
