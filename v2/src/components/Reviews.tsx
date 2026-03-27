import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, RESTAURANT_DATA } from '../constants';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-3">Kundenstimmen</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Was unsere Gaeste sagen</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-current" size={22} />)}
            <span className="ml-2 text-xl font-bold text-brand-dark">4.8 / 5</span>
          </div>
          <p className="text-gray-500 text-sm">Basierend auf Google & Wolt Bewertungen</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm relative border border-gray-100 hover:shadow-md transition-all">
              <Quote className="absolute top-6 right-6 text-orange-100" size={40} />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="text-amber-400 fill-current" size={16} />)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-dark">{review.name}</span>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-primary">Jetzt bestellen</a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
