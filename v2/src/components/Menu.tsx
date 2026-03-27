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
    { id: 'doner', name: 'Doener' },
    { id: 'pide', name: 'Pide' },
    { id: 'schnitzel', name: 'Schnitzel' },
    { id: 'snack', name: 'Snacks' },
    { id: 'salad', name: 'Salate' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-3">Frisch zubereitet</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Unsere Speisekarte</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Von saftigen Burgern ueber knusprige Pizza bis zum frischen Doener – entdecken Sie unsere Vielfalt in Heilbronn.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-white text-gray-500 hover:text-brand-orange border border-gray-200'
              }`}>{cat.name}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div layout key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-serif font-bold text-brand-dark">{item.name}</h3>
                  <span className="text-brand-orange font-bold whitespace-nowrap ml-3">{item.price}</span>
                </div>
                {item.description && <p className="text-gray-500 text-sm mb-4 flex-grow">{item.description}</p>}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags?.map(tag => (
                    <span key={tag} className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                      tag === 'Highlight' || tag === 'Spezialitaet' ? 'bg-orange-100 text-brand-orange' :
                      tag === 'Beliebt' || tag === 'Klassiker' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
                    }`}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 text-center p-6 bg-white rounded-2xl border border-dashed border-orange-200">
          <p className="text-gray-400 italic text-sm">Die vollstaendige Speisekarte ist im Restaurant einsehbar. Lieferung via Wolt & Uber Eats moeglich.</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
