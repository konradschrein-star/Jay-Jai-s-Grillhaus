import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const benefits = [
    'Saftige 100% Beef Burger – frisch gegrillt',
    'Knusprige Steinofen-Pizza aus Heilbronn',
    'Frischer Döner & Pide Variationen',
    'Geöffnet bis 04:00 Uhr am Wochenende',
    'Schnelle Lieferung via Wolt & Uber Eats',
    'Kostenlose Parkplätze direkt vor der Tür',
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 uppercase tracking-tighter">
              Über <span className="text-brand-orange">Jay & Jai's</span> – Streetfood mit Leidenschaft in Heilbronn
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Seit Oktober 2025 bringt Jay & Jai's Grillhaus frischen Wind in die Heilbronner Streetfood-Szene.
                Unsere Mission: Richtig gutes Essen ohne Kompromisse – egal ob mittags oder nachts um drei.
              </p>
              <p>
                Wir glauben an Qualität. Deshalb verwenden wir nur frische Zutaten für unsere Burger, Pizzen und Döner.
                Unsere langen Öffnungszeiten machen uns zum perfekten Spot für Nachtschwärmer und Feinschmecker in Heilbronn.
              </p>
              <p>
                Ob Sie bei uns vor Ort in der Großgartacher Straße essen oder bequem über Wolt oder Uber Eats bestellen –
                wir garantieren Ihnen den vollen Jay & Jai's Geschmack: Heiß, saftig und knusprig.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-1 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-brand-orange flex-shrink-0" size={28} />
                  <span className="font-black text-white uppercase tracking-widest text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/standort.jpg"
                alt="Jay & Jai's Grillhaus Standort in Heilbronn – Großgartacher Straße"
                className="rounded-none h-64 w-full object-cover shadow-lg border-2 border-brand-orange/20"
                width="400"
                height="256"
              />
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
                alt="Frische Zutaten für Burger und Pizza bei Jay & Jai's Heilbronn"
                className="rounded-none h-64 w-full object-cover shadow-lg mt-8 border-2 border-brand-orange/20"
                width="400"
                height="256"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
                alt="Frisch serviertes Essen – Streetfood Qualität in Heilbronn"
                className="rounded-none h-64 w-full object-cover shadow-lg -mt-8 border-2 border-brand-orange/20"
                width="400"
                height="256"
              />
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
                alt="Knusprige Pizza – Jay & Jai's Grillhaus Heilbronn"
                className="rounded-none h-64 w-full object-cover shadow-lg border-2 border-brand-orange/20"
                width="400"
                height="256"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
