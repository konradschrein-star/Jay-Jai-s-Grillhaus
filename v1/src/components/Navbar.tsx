import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Unsere Küche', href: '#cuisine' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Über uns', href: '#about' },
    { name: 'Bewertungen', href: '#reviews' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1 lg:py-2' : 'bg-black/20 backdrop-blur-sm py-2 lg:py-4'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-16 gap-x-4 lg:gap-x-8">
          <div className="flex-shrink-0 flex items-center pr-4 lg:pr-8">
            <a href="#home" className={`text-xl lg:text-2xl font-serif font-bold uppercase tracking-tighter ${scrolled ? 'text-brand-orange' : 'text-white'}`}>
              Jay & Jai's <span className={scrolled ? 'text-brand-dark' : 'text-brand-orange'}>Grillhaus</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="flex items-center justify-center bg-brand-orange text-brand-dark w-10 h-10 lg:w-12 lg:h-12 rounded-none font-black hover:bg-brand-yellow transition-all shadow-sm hover:shadow-md active:scale-95"
              title={RESTAURANT_DATA.phone}
            >
              <Phone className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className={`flex items-center justify-center w-10 h-10 rounded-none font-black transition-all active:scale-95 ${scrolled ? 'bg-brand-orange text-brand-dark' : 'bg-white/20 text-white backdrop-blur-sm'}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} p-1`}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="flex items-center space-x-2 px-3 py-3 text-brand-orange font-bold hover:bg-orange-50 rounded-lg transition-colors border border-brand-orange/10 mt-2"
            >
              <Phone size={18} />
              <span>{RESTAURANT_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
