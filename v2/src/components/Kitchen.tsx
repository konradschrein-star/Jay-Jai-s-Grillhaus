import React from 'react';
import { motion } from 'motion/react';
import { Flame, Pizza, Clock } from 'lucide-react';

const Kitchen = () => {
  return (
    <section id="cuisine" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-3">Was wir am besten koennen</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Unsere Spezialitaeten</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Flame, title: 'Saftige Burger', desc: '100% frisches Rindfleisch, taeglich frische Buns und unsere legendaere Jay & Jai Sosse. Vom Classic Beef bis zur Cheese Explosion.', items: ['Classic Beef', 'Cheese Explosion', 'Crispy Chicken', 'BBQ Special'] },
            { icon: Pizza, title: 'Knusprige Pizza', desc: 'Steinofen-Pizza mit frischen Zutaten. Unsere Spezialitaet: Pizza Jay & Jai mit Sucuk, Paprika und extra Kaese.', items: ['Pizza Jay & Jai', 'Margherita', 'Sucuk Spezial', 'Tonno'] },
            { icon: Clock, title: 'Doener & Pide', desc: 'Frischer Doener Kebab und tuerkische Pide aus dem Ofen. Dazu Lahmacun und vieles mehr – auch spaet in der Nacht.', items: ['Doener Kebab', 'Dueruem', 'Lahmacun', 'Pide Variationen'] },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="bg-brand-warm p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                <item.icon className="text-brand-orange" size={28} />
              </div>
              <h3 className="text-2xl font-serif text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.items.map(name => (
                  <span key={name} className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">{name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kitchen;
