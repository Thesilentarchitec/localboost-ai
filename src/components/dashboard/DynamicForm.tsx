import React from 'react';
import { InputField } from '@/types/database';
import { cn } from '@/lib/utils';

interface DynamicFormProps {
  fields: InputField[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isGenerating: boolean;
}

export function DynamicForm({ fields, values, onChange, onSubmit, isGenerating }: DynamicFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="space-y-1.5">
          <label 
            htmlFor={field.name}
            className="text-sm font-semibold text-slate-700"
          >
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={4}
              className={cn(
                "block w-full px-4 py-3 rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all",
                "resize-none"
              )}
              value={values[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              className="block w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={values[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            >
              <option value="">Select an option...</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className="block w-full px-4 py-3 rounded-xl border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={values[field.name] || ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isGenerating}
        className={cn(
          "w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg shadow-blue-500/20",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Content'
        )}
      </button>
    </form>
  );
}
