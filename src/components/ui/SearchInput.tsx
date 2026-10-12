'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({
  value,
  onChangeValue,
  placeholder = 'Search Hallownest...',
  className = '',
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search className="absolute left-3.5 h-4 w-4 text-[#A3ACB8]/70 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-[#141922] py-2.5 pl-10 pr-9 text-sm text-[#E7EAF0] placeholder-[#A3ACB8]/60 transition-colors focus:border-[#83BFD0]/50 focus:bg-[#1D2530] focus:outline-none focus:ring-1 focus:ring-[#83BFD0]/40"
        {...props}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChangeValue('')}
          className="absolute right-3 rounded p-0.5 text-[#A3ACB8] hover:text-[#E7EAF0]"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
