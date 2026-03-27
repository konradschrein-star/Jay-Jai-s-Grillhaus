import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <a href="#home" className={`text-2xl font-serif ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
            Jay & Jai's
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`nav-link ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>{link.name}</a>
            ))}
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-primary !py-2.5 !px-5 !text-sm">
              <Phone className="mr-1.5" size={16} />Bestellen
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a href={`tel:${RESTAURANT_DATA.phone}`} className={`p-2.5 rounded-xl ${scrolled ? 'bg-brand-orange text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
              <Phone size={18} />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-700' : 'text-white'}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full rounded-b-2xl">
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 hover:text-brand-orange hover:bg-orange-50 font-medium">{link.name}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
