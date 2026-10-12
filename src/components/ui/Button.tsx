'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'spectral' | 'gold' | 'ghost' | 'outline' | 'void';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'spectral', size = 'md', icon, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83BFD0] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2 gap-2',
      lg: 'text-base px-6 py-2.5 gap-2.5'
    }[size];

    const variantStyles = {
      spectral: 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/30 hover:bg-[#83BFD0]/10 hover:border-[#83BFD0] shadow-sm',
      gold: 'bg-[#1D2530] text-[#C4A77D] border border-[#C4A77D]/30 hover:bg-[#C4A77D]/10 hover:border-[#C4A77D]',
      ghost: 'bg-transparent text-[#A3ACB8] hover:text-[#E7EAF0] hover:bg-[#1D2530]',
      outline: 'border border-white/20 text-[#E7EAF0] hover:bg-[#141922] hover:border-white/40',
      void: 'bg-[#0B0D12] text-[#E7EAF0] border border-white/10 hover:border-white/25'
    }[variant];

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
