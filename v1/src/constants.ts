import { MenuItem, Review } from './types';

export const RESTAURANT_DATA = {
  name: "Jay & Jai's Grillhaus",
  fullName: "Jay & Jai's Grillhaus – Burger, Pizza & Döner Heilbronn",
  address: 'Großgartacher Straße 46, 74080 Heilbronn',
  phone: '+49 7131 7969670',
  email: 'info@jay-jais-grillhaus.de',
  openingHours: [
    { day: 'Mo – Do', time: '11:00 – 23:00' },
    { day: 'Fr – Sa', time: '11:00 – 04:00' },
    { day: 'Sonntag', time: '11:00 – 22:00' },
  ],
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Großgartacher+Straße+46+74080+Heilbronn',
};

export const MENU_ITEMS: MenuItem[] = [
  // Burger
  { id: 'b1', name: 'Classic Beef Burger', description: 'Saftiges Rindfleisch, Salat, Tomate, Zwiebeln, Haussoße', price: '9,50 €', category: 'burger', tags: ['Beliebt'] },
  { id: 'b2', name: 'Cheese Explosion', description: 'Doppelt Käse, Rindfleisch, karamellisierte Zwiebeln, BBQ-Soße', price: '11,20 €', category: 'burger', tags: ['Highlight'] },
  { id: 'b3', name: 'Crispy Chicken Burger', description: 'Knuspriges Hähnchenfilet, Mayo, Eisbergsalat', price: '8,90 €', category: 'burger' },
  { id: 'b4', name: 'BBQ Special Burger', description: 'Rindfleisch, Bacon, BBQ-Soße, Cheddar, Röstzwiebeln', price: '12,50 €', category: 'burger', tags: ['Spezialität'] },
  { id: 'b5', name: 'Double Trouble', description: 'Doppeltes Rindfleisch-Patty, Käse, Jalapeños, Spezialsoße', price: '13,90 €', category: 'burger' },

  // Pizza
  { id: 'p1', name: 'Pizza Jay & Jai', description: 'Spezialität des Hauses mit Sucuk, Paprika, Zwiebeln und extra Käse', price: '12,50 €', category: 'pizza', tags: ['Spezialität'] },
  { id: 'p2', name: 'Pizza Margherita', description: 'Tomatensoße, Mozzarella, Basilikum', price: '9,10 €', category: 'pizza' },
  { id: 'p3', name: 'Pizza Sucuk', description: 'Mit würziger Knoblauchwurst und Peperoni', price: '10,20 €', category: 'pizza' },
  { id: 'p4', name: 'Pizza Tonno', description: 'Thunfisch und Zwiebeln', price: '10,50 €', category: 'pizza' },
  { id: 'p5', name: 'Pizza Salami', description: 'Tomatensoße, Mozzarella, Salami', price: '9,80 €', category: 'pizza' },

  // Döner & Co
  { id: 'd1', name: 'Döner Kebab', description: 'Frisches Brot, Fleisch nach Wahl, Salat, Soße', price: '7,50 €', category: 'doner', tags: ['Klassiker'] },
  { id: 'd2', name: 'Döner Teller', description: 'Mit Pommes oder Reis und Salat', price: '12,90 €', category: 'doner' },
  { id: 'd3', name: 'Lahmacun Spezial', description: 'Türkische Pizza mit Dönerfleisch und Salat', price: '9,50 €', category: 'doner' },
  { id: 'd4', name: 'Dürüm', description: 'Wrap mit Dönerfleisch, Salat, Soße', price: '8,50 €', category: 'doner' },

  // Pide
  { id: 'pi1', name: 'Pide mit Käse', description: 'Frisch aus dem Ofen mit viel Mozzarella', price: '8,50 €', category: 'pide' },
  { id: 'pi2', name: 'Pide mit Hackfleisch', description: 'Würziges Rinderhackfleisch und Kräuter', price: '9,80 €', category: 'pide' },
  { id: 'pi3', name: 'Pide mit Spinat', description: 'Frischer Spinat und Schafskäse', price: '9,50 €', category: 'pide' },

  // Schnitzel & Hauptgerichte
  { id: 's1', name: 'Wiener Schnitzel', description: 'Vom Kalb, mit Pommes und Beilagensalat', price: '15,50 €', category: 'schnitzel' },
  { id: 's2', name: 'Puten-Rahmschnitzel', description: 'Mit cremiger Pilzsoße und Spätzle', price: '14,20 €', category: 'schnitzel' },

  // Snacks & Beilagen
  { id: 'sn1', name: 'Pommes Frites', description: 'Knusprige Pommes mit Ketchup oder Mayo', price: '4,50 €', category: 'snack' },
  { id: 'sn2', name: 'Chicken Wings (6 Stk.)', description: 'Knusprig gewürzt mit Dip', price: '7,90 €', category: 'snack' },
  { id: 'sn3', name: 'Chicken Nuggets (8 Stk.)', description: 'Mit Pommes und Dip', price: '8,50 €', category: 'snack' },

  // Salate
  { id: 'sa1', name: 'Gemischter Salat', description: 'Frische Marktsalate mit Hausdressing', price: '6,50 €', category: 'salad' },
  { id: 'sa2', name: 'Bauernsalat', description: 'Tomaten, Gurken, Oliven, Schafskäse', price: '8,90 €', category: 'salad' },
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Kevin L.', rating: 5, text: 'Bester Burger in Heilbronn! Die Cheese Explosion ist der Wahnsinn. Und die Öffnungszeiten am Wochenende retten Leben.', date: 'vor 1 Woche' },
  { id: '2', name: 'Sarah B.', rating: 5, text: 'Die Pizza Jay & Jai ist super knusprig und gut belegt. Schnelle Lieferung via Wolt. Top Laden in Heilbronn!', date: 'vor 3 Tagen' },
  { id: '3', name: 'Ahmed K.', rating: 4, text: 'Sehr leckerer Döner und freundliches Personal. Komme gerne wieder nach Feierabend hierher.', date: 'vor 2 Wochen' },
];
