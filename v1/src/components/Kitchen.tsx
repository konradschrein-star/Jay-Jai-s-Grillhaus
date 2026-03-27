import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Heart, Users } from 'lucide-react';

const Kitchen = () => {
  return (
    <section id="cuisine" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tighter">
            Unsere <span className="text-brand-orange">Spezialitäten</span>
          </h2>
          <div className="w-32 h-2 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-brand-gray p-10 rounded-none border-l-[12px] border-brand-orange shadow-2xl">
              <div className="flex items-center mb-6">
                <Utensils className="text-brand-orange mr-4" size={36} />
                <h3 className="text-3xl font-serif font-black text-white uppercase tracking-tight">Saftige Burger</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Unsere Burger in Heilbronn sind legendär. 100% frisches Rindfleisch, täglich frisch gebackene Buns und unsere geheime Jay & Jai Soße.
                Vom Klassiker bis zur <strong className="text-brand-orange">Cheese Explosion</strong> – hier wird jeder satt.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm font-bold text-brand-orange uppercase tracking-widest">
                <li>• Classic Beef</li>
                <li>• Cheese Explosion</li>
                <li>• Crispy Chicken</li>
                <li>• BBQ Special</li>
                <li>• Double Trouble</li>
                <li>• Veggie Burger</li>
              </ul>
            </div>

            <div className="bg-brand-gray p-10 rounded-none border-l-[12px] border-brand-yellow shadow-2xl">
              <div className="flex items-center mb-6">
                <Heart className="text-brand-yellow mr-4" size={36} />
                <h3 className="text-3xl font-serif font-black text-white uppercase tracking-tight">Pizza & Döner</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Knusprige Steinofen-Pizza und frischer Döner Kebab. Wir vereinen das Beste aus beiden Welten in Heilbronn.
                Frische Zutaten und traditionelle Zubereitung für den maximalen Geschmack.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm font-bold text-brand-yellow uppercase tracking-widest">
                <li>• Pizza Jay & Jai</li>
                <li>• Sucuk Spezial</li>
                <li>• Döner Kebab</li>
                <li>• Lahmacun</li>
                <li>• Pide Variationen</li>
                <li>• Frische Salate</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1000&auto=format&fit=crop"
              alt="Knusprige Pizza frisch aus dem Ofen – Jay & Jai's Grillhaus Heilbronn"
              className="rounded-none shadow-2xl w-full h-[600px] object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
              width="1000"
              height="600"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-orange text-brand-dark p-8 rounded-none shadow-2xl hidden lg:block border-4 border-white/20">
              <div className="flex items-center space-x-6">
                <Users size={48} className="font-black" />
                <div>
                  <p className="font-black text-2xl uppercase tracking-tighter">Heiß & Schnell</p>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Lieferung bis 04:00 Uhr</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
