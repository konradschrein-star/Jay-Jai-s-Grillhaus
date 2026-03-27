import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop"
          alt="Saftiger Burger – Jay & Jai's Grillhaus Heilbronn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-4">Burger &middot; Pizza &middot; Doener &middot; Heilbronn</p>
          <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-tight">
            Jay & Jai's<br />Grillhaus
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
            Frisch vom Grill, direkt auf den Teller. Streetfood-Qualitaet bis spaet in die Nacht in Heilbronn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menu" className="btn-primary w-full sm:w-auto">Speisekarte</a>
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-secondary w-full sm:w-auto !text-white !border-white/50 hover:!bg-white hover:!text-brand-dark">
              <Phone className="mr-2" size={18} />Jetzt bestellen
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Taeglich geoeffnet
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />Heilbronn
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
        <a href="#cuisine"><ChevronDown size={28} /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
