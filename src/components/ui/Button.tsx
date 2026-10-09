import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center cursor-pointer';
  
  const variants = {
    primary: 'bg-[#e5c185] text-[#030c08] hover:bg-[#d4b074] shadow-lg',
    outline: 'border border-[#e5c185]/40 text-[#f5ebd9] hover:bg-[#e5c185]/10 backdrop-blur-sm',
    gold: 'bg-[#e5c185]/20 border border-[#e5c185]/60 text-[#f5ebd9] hover:bg-[#e5c185]/30'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}