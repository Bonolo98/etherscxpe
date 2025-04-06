'use client';
// import Link from 'next/link';

type NavbarProps = {
  setActiveSection: (section: string) => void;
};

export default function Navbar({ setActiveSection }: NavbarProps) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 h-20">
      <div className="text-xl font-bold">
        ETHERSCXPE | <span className="font-thin">PREMIUM DESIGN</span>
      </div>
      <div className="space-x-4">
        <button onClick={() => setActiveSection('services')}>Services</button>
        <button onClick={() => setActiveSection('pricing')}>Pricing</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </div>
    </nav>
  );
}
