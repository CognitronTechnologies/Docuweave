import Link from 'next/link'
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 flex items-center justify-between py-5 px-8 bg-white/80 backdrop-blur shadow z-30 border-b border-light">
      <Link href="/" className="font-heading text-2xl font-bold text-primary tracking-tight">Docuweave</Link>
      <div className="flex items-center gap-6">
        <Link href="/#services" className="text-dark/80 hover:text-primary font-medium transition">Services</Link>
        <Link href="/about" className="text-dark/80 hover:text-primary font-medium transition">About</Link>
        <Link href="/contact">
          <span className="bg-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-accent transition">Contact</span>
        </Link>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-primary text-white p-2 rounded-full hover:bg-accent transition"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <SunIcon className="w-6 h-6" aria-hidden="true" /> : <MoonIcon className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>
    </nav>
  )
}