import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useActivePath from '../lib/useActivePath';
import normalizePath from '../lib/normalizePath';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activePath = normalizePath(useActivePath());
  const services = [
    {
      name: 'Product-ready docs',
      href: '/services/core-documentation',
      description: 'Launch-ready API docs, guides & tutorials'
    },
    {
      name: 'Scale team knowledge',
      href: '/services/knowledge-management', 
      description: 'Internal wikis & engineering playbooks'
    },
    {
      name: 'Dev-first content',
      href: '/services/technical-content-marketing',
      description: 'Developer blogs & technical storytelling'
    },
    {
      name: 'Modern docs stack',
      href: '/services/documentation-infrastructure',
      description: 'Docs-as-code & AI-ready systems'
    },
    {
      name: 'Optimize & scale',
      href: '/services/content-strategy',
      description: 'Audits, refactors & content strategy'
    },
    {
      name: 'On-demand expertise',
      href: '/services/custom-advisory',
      description: 'Fractional & embedded support'
    }
  ];

  useEffect(() => {
    // Enforce dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="sticky top-0 bg-navy/80 backdrop-blur shadow z-30 border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-white tracking-tight h-16">
            <img src="/dark-mode-logo.png" alt="Docuweave logo" className="h-full max-h-16 w-auto" />
            <span className="hidden sm:inline">Docuweave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-white font-medium transition"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-navy rounded-xl shadow-lg border border-navy-light z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={`block p-3 rounded-lg hover:bg-navy-light transition-colors group ${activePath === service.href ? 'underline text-accent font-bold' : ''}`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="font-medium text-white group-hover:text-accent">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-300 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-navy-light">
                      <Link
                        href="/#services"
                        className="block text-center py-2 px-4 bg-accent text-white rounded-lg hover:bg-primary transition font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={`text-gray-300 hover:text-white font-medium transition ${activePath === '/about' ? 'underline text-accent font-bold' : ''}`}>
              About
            </Link>
            <Link href="/blog" className={`text-gray-300 hover:text-white font-medium transition ${activePath === '/blog' ? 'underline text-accent font-bold' : ''}`}>
              Blog
            </Link>
            <Link href="/contact">
              <span
                className={`bg-gradient-to-r from-accent to-primary text-white px-5 py-2 rounded-full font-semibold shadow hover:from-primary hover:to-accent transition border border-accent/40 ${activePath === '/contact' ? 'ring-2 ring-primary' : ''}`}
              >
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-navy-light">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <div className="text-white font-semibold mb-3">Services</div>
                <div className="space-y-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`block py-2 text-gray-300 hover:text-white transition ${activePath === service.href ? 'underline text-accent font-bold' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className={`block py-2 text-gray-300 hover:text-white font-medium transition ${activePath === '/about' ? 'underline text-accent font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog"
                className={`block py-2 text-gray-300 hover:text-white font-medium transition ${activePath === '/blog' ? 'underline text-accent font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact"
                className={`block w-full text-center bg-gradient-to-r from-accent to-primary text-white py-3 px-6 rounded-full font-semibold shadow hover:from-primary hover:to-accent transition border border-accent/40 ${activePath === '/contact' ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}