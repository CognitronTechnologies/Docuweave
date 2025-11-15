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
      name: 'Product documentation',
      href: '/services/product-documentation',
      description: 'Developer-first docs that reduce support requests'
    },
    {
      name: 'Developer marketing',
      href: '/services/developer-marketing', 
      description: 'Technical content that builds trust and grows community'
    },
    {
      name: 'Modern docs stack',
      href: '/services/modern-docs-stack',
      description: 'Future-ready documentation infrastructure'
    },
    {
      name: 'Hire technical writers',
      href: '/services/hire-technical-writer',
      description: 'Engineers who write docs developers actually use'
    }
  ];

  useEffect(() => {
    // Remove any dark mode classes to ensure light theme
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <nav className="sticky top-0 bg-gradient-to-r from-white via-blue-50 to-indigo-50 backdrop-blur shadow-md z-30 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight h-16">
            <img src="/new-dark-mode-logo.PNG" alt="Docuweave - Technical Documentation Services for SaaS and Developer Tools" className="h-full max-h-16 w-auto" />
            <span className="hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Docuweave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-text-secondary hover:text-text-primary font-medium transition"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-border z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className={`block p-3 rounded-lg hover:bg-light-secondary transition-colors group ${activePath === service.href ? 'underline text-accent font-bold' : ''}`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="font-medium text-text-primary group-hover:text-accent">
                            {service.name}
                          </div>
                          <div className="text-sm text-text-secondary mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
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

            <Link href="/about" className={`text-text-secondary hover:text-text-primary font-medium transition ${activePath === '/about' ? 'underline text-accent font-bold' : ''}`}>
              About
            </Link>
            <Link href="/blog" className={`text-text-secondary hover:text-text-primary font-medium transition ${activePath === '/blog' ? 'underline text-accent font-bold' : ''}`}>
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
              className="text-text-secondary hover:text-text-primary p-2"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <div className="text-text-primary font-semibold mb-3">Services</div>
                <div className="space-y-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className={`block py-2 text-text-secondary hover:text-text-primary transition ${activePath === service.href ? 'underline text-accent font-bold' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className={`block py-2 text-text-secondary hover:text-text-primary font-medium transition ${activePath === '/about' ? 'underline text-accent font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog"
                className={`block py-2 text-text-secondary hover:text-text-primary font-medium transition ${activePath === '/blog' ? 'underline text-accent font-bold' : ''}`}
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