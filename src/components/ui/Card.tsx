import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gold' | 'interactive';
  children: React.ReactNode;
}

export function Card({
  className = '',
  variant = 'default',
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'border border-white/10 bg-[#141922]/80 backdrop-blur-sm',
    gold: 'border border-[#C4A77D]/30 bg-[#1D2530]/90 shadow-sm',
    interactive: 'border border-white/10 bg-[#141922]/80 hover:border-[#83BFD0]/40 hover:bg-[#1D2530]/90 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(131,191,208,0.12)] cursor-pointer'
  }[variant];

  return (
    <div
      className={`rounded-lg p-5 ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
