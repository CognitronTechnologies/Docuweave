import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-navy shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-white">Docuweave</div>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <div
        className={`mt-4 md:mt-0 ${
          menuOpen ? 'block' : 'hidden'
        } md:flex gap-4 text-white font-medium`}
      >
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/services" className="hover:text-blue-400">
          Services
        </Link>
        <Link href="/portfolio" className="hover:text-blue-400">
          Portfolio
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}