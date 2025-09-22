import React from 'react';
import { Book, Code, Database, Globe, HelpCircle, Lock, Play, Server, Settings, Shield, Zap } from 'lucide-react';

// Custom Tailwind theme colors
// eslint-disable-next-line react-refresh/only-export-components
export const customColors = {
  brandBg: '#FAF9F5',
  brandPrimary: '#D97757',
  brandSecondary: '#3D3D3A',
  brandAccent: '#F5F5DC',
  brandMuted: 'rgba(61, 61, 58, 0.6)',
  medicalAyurveda: '#f97316',
  medicalSiddha: '#8b5cf6',
  medicalUnani: '#06b6d4',
  medicalHomeopathy: '#84cc16',
  medicalIcd11: '#6366f1',
  medicalFhir: '#10b981'
};

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const navigationItems: NavItem[] = [
    { id: 'overview', title: 'Overview', icon: <Book size={18} /> },
    { id: 'architecture', title: 'Architecture', icon: <Server size={18} /> },
    { id: 'quickstart', title: 'Quickstart (Demo Mode)', icon: <Play size={18} /> },
    { id: 'step-by-step', title: 'Step-by-Step Guide', icon: <Code size={18} /> },
    { id: 'api-reference', title: 'API Reference', icon: <Zap size={18} /> },
    { id: 'authentication', title: 'Authentication', icon: <Shield size={18} /> },
    { id: 'configuration', title: 'Configuration', icon: <Settings size={18} /> },
    { id: 'glossary', title: 'Glossary & FAQ', icon: <HelpCircle size={18} /> }
  ];

  return (
    <aside className="w-64 bg-white min-h-screen border-r border-gray-200 shadow-sm fixed left-0 top-0 bottom-0 z-10 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold" style={{ color: customColors.brandSecondary }}>
          NAMASTE API Docs
        </h2>
        <p className="text-sm text-gray-500 mt-1">Terminology Service</p>
      </div>
      
      <div className="p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h3>
        <nav>
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left ${
                    activeSection === item.id
                      ? 'bg-orange-50 text-orange-700 font-medium border-l-4 border-orange-500 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
                  }`}
                >
                  <span className={`${activeSection === item.id ? 'text-orange-500' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="p-4 mt-8 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Database size={16} />
              <span>Data Repository</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              <Lock size={16} />
              <span>Authentication Guide</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;