import React from 'react';
import { RESTAURANT_DATA } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-16 mb-16 border-b border-white/5 pb-16">
          <div>
            <h3 className="text-3xl font-serif font-black text-brand-orange mb-6 uppercase tracking-tighter">Jay & Jai's</h3>
            <p className="text-gray-400 text-base leading-relaxed font-medium">
              Heilbronns erste Adresse für saftige Burger, knusprige Pizza und frischen Döner. Streetfood-Qualität, die man schmeckt – bis 04:00 Uhr am Wochenende.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-6 text-white uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Startseite</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Speisekarte</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">Über uns</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Kontakt</a></li>
              <li><a href="#impressum" className="hover:text-brand-orange transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-brand-orange transition-colors">Datenschutz</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 text-white uppercase tracking-[0.2em] text-xs">Kontakt</h4>
            <p className="text-sm text-gray-400 mb-3 font-bold">{RESTAURANT_DATA.address}</p>
            <p className="text-lg text-brand-orange font-black mb-4">
              <a href={`tel:${RESTAURANT_DATA.phone}`} className="hover:text-brand-yellow transition-colors">
                {RESTAURANT_DATA.phone}
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-4">
              <span className="text-gray-600">Öffnungszeiten:</span><br />
              Mo–Do: 11:00–23:00<br />
              Fr–Sa: 11:00–04:00<br />
              So: 11:00–22:00
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p>&copy; {currentYear} Jay & Jai's Grillhaus Heilbronn. Alle Rechte vorbehalten.</p>
          <div className="mt-6 md:mt-0 text-center md:text-right">
            <p className="text-[10px] opacity-60">
              Webdesign von <a href="https://axtrelis.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:text-brand-yellow transition-colors">Axtrelis.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
