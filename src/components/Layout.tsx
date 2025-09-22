import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  // We could sync active route with Sidebar later via context or props.
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeSection={''} onSectionChange={() => {}} />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
