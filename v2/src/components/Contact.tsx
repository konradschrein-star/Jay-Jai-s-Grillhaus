import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-brand-orange font-medium tracking-widest uppercase text-sm mb-3">Besuchen Sie uns</p>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-10">Kontakt & Oeffnungszeiten</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-warm p-3 rounded-xl text-brand-orange"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Adresse</h4>
                  <p className="text-gray-600">{RESTAURANT_DATA.address}</p>
                  <p className="text-sm text-gray-400 mt-1">Kostenlose Parkplaetze vorhanden</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-warm p-3 rounded-xl text-brand-orange"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Telefon</h4>
                  <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-brand-orange text-2xl font-bold hover:underline">{RESTAURANT_DATA.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-warm p-3 rounded-xl text-brand-orange"><Clock size={24} /></div>
                <div className="w-full">
                  <h4 className="font-bold text-lg text-brand-dark mb-3">Oeffnungszeiten</h4>
                  <div className="bg-brand-warm rounded-2xl p-5">
                    <table className="w-full text-sm">
                      <tbody>
                        {RESTAURANT_DATA.openingHours.map((item) => (
                          <tr key={item.day} className="border-b border-orange-100 last:border-0">
                            <td className="py-2.5 font-medium text-gray-700">{item.day}</td>
                            <td className="py-2.5 text-right text-brand-orange font-semibold">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-primary flex-1"><Phone className="mr-2" size={18} />Anrufen</a>
              <a href={RESTAURANT_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1"><Navigation className="mr-2" size={18} />Route</a>
            </div>
          </div>

          <div className="h-[450px] lg:h-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.5!2d9.2170!3d49.1530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGro%C3%9Fgartacher+Stra%C3%9Fe+46%2C+74080+Heilbronn!5e0!3m2!1sde!2sde!4v1"
              width="100%" height="100%" style={{ border: 0, minHeight: '450px' }} allowFullScreen loading="lazy"
              title="Jay & Jai's Grillhaus Heilbronn Standort"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
