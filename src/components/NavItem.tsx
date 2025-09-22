import React from 'react';
// ...existing code...

interface NavItemProps {
  title: string;
  active?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, active = false, onClick, icon }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
          active
            ? 'bg-orange-50 text-orange-700 font-medium border-l-4 border-orange-500 shadow-sm'
            : 'text-gray-600 hover:bg-gray-50 hover:text-amber-50 hover:shadow-sm'
        }`}
      >
        {icon && (
          <span className={`${active ? 'text-orange-500' : 'text-green-400'}`}>
            {icon}
          </span>
        )}
        <span>{title}</span>
      </button>
    </li>
  );
};

export default NavItem;