import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const benefits = [
    'Saftige 100% Beef Burger – frisch gegrillt',
    'Knusprige Steinofen-Pizza aus Heilbronn',
    'Frischer Doener, Pide & Lahmacun',
    'Geoeffnet bis 04:00 Uhr am Wochenende',
    'Schnelle Lieferung via Wolt & Uber Eats',
    'Kostenlose Parkplaetze direkt vor der Tuer',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-3">Ueber uns</p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">Streetfood mit Leidenschaft in Heilbronn</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Seit Oktober 2025 bringt Jay & Jai's Grillhaus frischen Wind in die Heilbronner Streetfood-Szene. Unsere Mission: Richtig gutes Essen ohne Kompromisse.</p>
              <p>Wir verwenden nur frische Zutaten fuer unsere Burger, Pizzen und Doener. Unsere langen Oeffnungszeiten machen uns zum perfekten Spot fuer Nachtschwaermer und Feinschmecker.</p>
            </div>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange flex-shrink-0" size={22} />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="grid grid-cols-2 gap-4">
            <img src="/images/standort.jpg" alt="Jay & Jai's Grillhaus Standort Heilbronn"
              className="rounded-2xl h-64 w-full object-cover shadow-md" />
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
              alt="Frische Zutaten Heilbronn" className="rounded-2xl h-64 w-full object-cover shadow-md mt-8" />
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
              alt="Frisch serviertes Essen Heilbronn" className="rounded-2xl h-64 w-full object-cover shadow-md -mt-8" />
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
              alt="Pizza Jay & Jai's Grillhaus Heilbronn" className="rounded-2xl h-64 w-full object-cover shadow-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
