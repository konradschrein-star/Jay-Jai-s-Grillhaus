import React from 'react';
import { RESTAURANT_DATA } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Jay & Jai's Grillhaus</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Heilbronns Adresse fuer saftige Burger, knusprige Pizza und frischen Doener.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-300 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Speisekarte</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Ueber uns</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-300 text-sm uppercase tracking-wider">Kontakt</h4>
            <p className="text-sm text-gray-400 mb-2">{RESTAURANT_DATA.address}</p>
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-brand-orange font-bold hover:text-orange-300 transition-colors">{RESTAURANT_DATA.phone}</a>
            <p className="text-sm text-gray-500 mt-3">Mo-Do: 11-23 Uhr | Fr-Sa: 11-04 Uhr | So: 11-22 Uhr</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Jay & Jai's Grillhaus Heilbronn.</p>
          <p className="mt-4 md:mt-0">Webdesign von <a href="https://axtrelis.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Axtrelis.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
