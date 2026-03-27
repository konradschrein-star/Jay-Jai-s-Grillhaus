import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuItem['category'] | 'all'>('all');

  const categories = [
    { id: 'all', name: 'Alles' },
    { id: 'burger', name: 'Burger' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'doner', name: 'Döner' },
    { id: 'pide', name: 'Pide' },
    { id: 'schnitzel', name: 'Schnitzel' },
    { id: 'snack', name: 'Snacks' },
    { id: 'salad', name: 'Salate' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tighter">
            Unsere <span className="text-brand-orange">Speisekarte</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Entdecken Sie unsere Vielfalt in Heilbronn. Von saftigen Burgern bis hin zu knusprigen Pizzen und frischem Döner.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-8 py-3 rounded-none text-sm font-black uppercase tracking-widest transition-all border-2 ${
                activeCategory === cat.id
                  ? 'bg-brand-orange border-brand-orange text-brand-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]'
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-brand-gray p-8 rounded-none shadow-xl hover:shadow-brand-orange/10 transition-all duration-300 border border-white/5 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-black text-white uppercase tracking-tight group-hover:text-brand-orange transition-colors">{item.name}</h3>
                  <span className="text-brand-orange font-black text-xl whitespace-nowrap ml-4">{item.price}</span>
                </div>
                {item.description && (
                  <p className="text-gray-400 text-sm mb-6 flex-grow font-medium leading-relaxed">{item.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags?.map(tag => (
                    <span key={tag} className={`text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-none ${
                      tag === 'Highlight' || tag === 'Spezialität' ? 'bg-brand-orange text-brand-dark' :
                      tag === 'Beliebt' || tag === 'Klassiker' ? 'bg-brand-yellow text-brand-dark' : 'bg-white/10 text-white'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center p-8 bg-brand-gray border border-white/10">
          <p className="text-gray-400 italic">
            „Die vollständige Speisekarte ist im Restaurant einsehbar. Alle Gerichte werden frisch für Sie zubereitet. Lieferung via Wolt & Uber Eats möglich."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
