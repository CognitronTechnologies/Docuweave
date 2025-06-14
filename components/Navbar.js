import Link from 'next/link'
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    // Check for saved theme in localStorage or default to false
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'true' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };  return (
    <nav className="sticky top-0 bg-bg-primary/80 dark:bg-navy/80 backdrop-blur shadow z-30 border-b border-border dark:border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold text-primary dark:text-white tracking-tight">
            Docuweave
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium transition"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-bg-primary dark:bg-navy rounded-xl shadow-lg border border-border dark:border-navy-light z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg hover:bg-navy-50 dark:hover:bg-navy-light transition-colors group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <div className="font-medium text-text-primary dark:text-white group-hover:text-primary dark:group-hover:text-accent">
                            {service.name}
                          </div>
                          <div className="text-sm text-text-secondary dark:text-gray-300 mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border dark:border-navy-light">
                      <Link
                        href="/#services"
                        className="block text-center py-2 px-4 bg-primary dark:bg-accent text-white rounded-lg hover:bg-accent dark:hover:bg-primary transition font-medium"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View all services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium transition">
              About
            </Link>

            <Link href="/contact">
              <span className="bg-primary dark:bg-accent text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-accent dark:hover:bg-primary transition">
                Contact
              </span>
            </Link>

            <button
              onClick={toggleDarkMode}
              className="bg-primary dark:bg-accent text-white p-2 rounded-full hover:bg-accent dark:hover:bg-primary transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" aria-hidden="true" /> : <MoonIcon className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="bg-primary dark:bg-accent text-white p-2 rounded-full hover:bg-accent dark:hover:bg-primary transition"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <SunIcon className="w-5 h-5" aria-hidden="true" /> : <MoonIcon className="w-5 h-5" aria-hidden="true" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white p-2"
              aria-label="Open Menu"
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border dark:border-navy-light">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <div className="text-text-primary dark:text-white font-semibold mb-3">Services</div>
                <div className="space-y-2 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className="block py-2 text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link 
                href="/contact"
                className="block w-full text-center bg-primary dark:bg-accent text-white py-3 px-6 rounded-full font-semibold shadow hover:bg-accent dark:hover:bg-primary transition"
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