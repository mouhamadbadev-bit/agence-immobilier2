import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs font-medium text-[#e5c185]/70">{label}</label>}
      <input
        className={`bg-[#030c08] border border-[#e5c185]/20 rounded-xl px-4 py-2.5 text-[#f5ebd9] placeholder-[#888888] text-sm focus:outline-none focus:border-[#e5c185] transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}