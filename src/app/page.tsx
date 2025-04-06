'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import LayoutGridDemo from './components/layout-grid-demo';

export default function Home() {
  const [activeSection, setActiveSection] = useState('services');

  return (
    <main className="min-h-screen bg-white">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === 'services' && (
        <div className="pt-10">
          <LayoutGridDemo />
        </div>
      )}

      {activeSection === 'pricing' && (
        <div className="pt-10 min-h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-4xl font-bold">Pricing Section</h2>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="pt-10 min-h-screen flex items-center justify-center bg-gray-200">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </div>
      )}
    </main>
  );
}
