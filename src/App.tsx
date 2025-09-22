import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './sections/Overview';
import Architecture from './sections/Architecture';
import Quickstart from './sections/Quickstart';
import StepByStep from './sections/StepByStep';
import ApiReference from './sections/ApiReference';
import Authentication from './sections/Authentication';
import Configuration from './sections/Configuration';
import Glossary from './sections/Glossary';

const NamasteApiDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'architecture':
        return <Architecture />;
      case 'quickstart':
        return <Quickstart />;
      case 'step-by-step':
        return <StepByStep />;
      case 'api-reference':
        return <ApiReference />;
      case 'authentication':
        return <Authentication />;
      case 'configuration':
        return <Configuration />;
      case 'glossary':
        return <Glossary />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="ml-64 p-8">
        {renderSection()}
      </main>
    </div>
  );
};

export default NamasteApiDocs;