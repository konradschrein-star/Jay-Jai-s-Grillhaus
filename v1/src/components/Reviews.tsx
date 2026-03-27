import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_DATA } from '../constants';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-4 uppercase tracking-tighter">
            Was unsere <span className="text-brand-orange">Gäste</span> sagen
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-brand-orange fill-current" size={28} />
            ))}
            <span className="ml-3 text-2xl font-black text-white">4.8 / 5</span>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Basierend auf Google & Wolt Bewertungen</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-brand-dark p-10 rounded-none shadow-2xl relative border border-white/5 group hover:border-brand-orange/30 transition-all">
              <Quote className="absolute top-6 right-8 text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors" size={64} />
              <div className="flex mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-brand-orange fill-current" size={18} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed text-lg">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-black text-white uppercase tracking-widest text-sm">{review.name}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={`tel:${RESTAURANT_DATA.phone}`}
            className="btn-primary"
          >
            Jetzt bestellen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
