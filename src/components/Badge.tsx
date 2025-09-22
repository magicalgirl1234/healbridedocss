import React from 'react';
import { customColors } from './Sidebar';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = customColors.brandPrimary, className = '' }) => {
  return (
    <span 
      className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
};

export default Badge;