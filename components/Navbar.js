import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-navy shadow-lg relative z-20">
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">Docuweave</div>
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-accent rounded"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-navy/90 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <div
        className={`transition-all duration-300 md:static md:flex md:gap-4 md:bg-transparent md:shadow-none md:translate-y-0 md:opacity-100 md:pointer-events-auto
          absolute left-0 right-0 bg-navy shadow-lg rounded-b-lg mt-2 md:mt-0 flex flex-col md:flex-row gap-6 text-white font-medium px-8 py-6 md:p-0 z-30
          ${menuOpen ? 'top-full opacity-100 pointer-events-auto' : 'top-[-400px] opacity-0 pointer-events-none'}`}
        style={{ minWidth: '60%' }}
      >
        <Link href="/" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/services" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link href="/portfolio" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}