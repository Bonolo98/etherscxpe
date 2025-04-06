'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional icons

type NavbarProps = {
  setActiveSection: (section: string) => void;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); // Close menu on click (mobile)
  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50 h-20">
      <div className="text-xl font-bold">
        ETHERSCXPE | <span className="font-thin">PREMIUM DESIGN</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button onClick={() => handleClick('services')}>Services</button>
        <button onClick={() => handleClick('pricing')}>Pricing</button>
        <button onClick={() => handleClick('contact')}>Contact</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-start p-4 space-y-4 md:hidden z-40 border-t border-gray-700">
          <button onClick={() => handleClick('services')}>Services</button>
          <button onClick={() => handleClick('pricing')}>Pricing</button>
          <button onClick={() => handleClick('contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
}
