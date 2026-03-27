import React from 'react';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_DATA } from '../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white mb-12 uppercase tracking-tighter">
              Kontakt & <br />
              <span className="text-brand-orange">Öffnungszeiten</span>
            </h2>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-brand-gray p-4 rounded-none text-brand-orange border border-white/10">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl text-white uppercase tracking-tight mb-1">Adresse</h4>
                  <p className="text-gray-400 text-lg">{RESTAURANT_DATA.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Kostenlose Parkplätze direkt vor der Tür</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-brand-gray p-4 rounded-none text-brand-orange border border-white/10">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl text-white uppercase tracking-tight mb-1">Telefon</h4>
                  <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-brand-orange text-3xl font-black hover:text-brand-yellow transition-colors">
                    {RESTAURANT_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-brand-gray p-4 rounded-none text-brand-orange border border-white/10">
                  <Clock size={32} />
                </div>
                <div className="w-full">
                  <h4 className="font-black text-xl text-white uppercase tracking-tight mb-4">Öffnungszeiten</h4>
                  <div className="bg-brand-gray border border-white/5 p-6">
                    <table className="w-full text-base">
                      <tbody>
                        {RESTAURANT_DATA.openingHours.map((item) => (
                          <tr key={item.day} className="border-b border-white/5 last:border-0">
                            <td className="py-3 font-black text-white uppercase tracking-widest text-sm">{item.day}</td>
                            <td className="py-3 text-right text-brand-orange font-black">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-brand-yellow font-black mt-6 text-center uppercase tracking-[0.2em] animate-pulse">
                      Heiß & Frisch – Auch spät in der Nacht!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${RESTAURANT_DATA.phone}`} className="btn-primary flex-1">
                <Phone className="mr-2" size={20} />
                Jetzt anrufen
              </a>
              <a
                href={RESTAURANT_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                <Navigation className="mr-2" size={20} />
                Route planen
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[500px] lg:h-auto rounded-none overflow-hidden shadow-2xl relative border-4 border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.5!2d9.2170!3d49.1530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGro%C3%9Fgartacher+Stra%C3%9Fe+46%2C+74080+Heilbronn!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jay & Jai's Grillhaus Heilbronn – Standort auf Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
