import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop"
          alt="Saftiger Burger mit Käse – Jay & Jai's Grillhaus Heilbronn"
          className="w-full h-full object-cover grayscale-[0.2]"
          width="2072"
          height="1380"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/40 to-brand-dark/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-6 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-black mb-4 md:mb-6 leading-[0.9] uppercase tracking-tighter">
            Jay & Jai's <br />
            <span className="text-brand-orange">Grillhaus</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-tight font-medium">
            Wo's knuspert, brutzelt und richtig schmeckt. <br />
            Burger, Pizza & Döner bis 04:00 Uhr in Heilbronn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#menu" className="btn-primary w-full sm:w-auto text-lg">
              Menü ansehen
            </a>
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-secondary w-full sm:w-auto text-lg">
              <Phone className="mr-2" size={20} />
              Jetzt bestellen
            </a>
          </div>

          <div className="mt-10 md:mt-12 text-white/60 text-sm flex flex-wrap items-center justify-center gap-6 font-bold uppercase tracking-widest">
            <span className="flex items-center">
              <span className="w-3 h-3 bg-brand-orange rounded-full mr-2 animate-pulse"></span>
              Frisch vom Grill
            </span>
            <span className="flex items-center">
              <MapPin size={18} className="mr-2 text-brand-orange" />
              Heilbronn – Großgartacher Str.
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <a href="#cuisine">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
