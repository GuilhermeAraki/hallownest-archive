import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'spectral' | 'gold' | 'void' | 'crimson';
  children: React.ReactNode;
}

export function Badge({
  className = '',
  variant = 'spectral',
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    spectral: 'border border-[#83BFD0]/30 bg-[#83BFD0]/10 text-[#83BFD0]',
    gold: 'border border-[#C4A77D]/30 bg-[#C4A77D]/10 text-[#C4A77D]',
    void: 'border border-white/10 bg-[#0B0D12] text-[#A3ACB8]',
    crimson: 'border border-[#E58B86]/30 bg-[#E58B86]/10 text-[#E58B86]'
  }[variant];

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
