import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kitchen from './components/Kitchen';
import MenuSection from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { RESTAURANT_DATA } from './constants';

export default function App() {
  useEffect(() => {
    // Schema.org Restaurant
    const restaurantSchema = document.createElement('script');
    restaurantSchema.type = 'application/ld+json';
    restaurantSchema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Jay & Jai's Grillhaus",
      "image": "/images/standort.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Großgartacher Straße 46",
        "addressLocality": "Heilbronn",
        "addressRegion": "Baden-Württemberg",
        "postalCode": "74080",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.1530,
        "longitude": 9.2170
      },
      "telephone": RESTAURANT_DATA.phone,
      "email": RESTAURANT_DATA.email,
      "servesCuisine": ["Burger", "Pizza", "Döner", "Streetfood", "German"],
      "menu": window.location.origin + "/#menu",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "11:00",
          "closes": "23:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "11:00",
          "closes": "04:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "11:00",
          "closes": "22:00"
        }
      ],
      "url": window.location.origin,
      "priceRange": "€",
      "acceptsReservations": "False",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "62"
      }
    });
    document.head.appendChild(restaurantSchema);

    // BreadcrumbList Schema
    const breadcrumbSchema = document.createElement('script');
    breadcrumbSchema.type = 'application/ld+json';
    breadcrumbSchema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": window.location.origin },
        { "@type": "ListItem", "position": 2, "name": "Speisekarte", "item": window.location.origin + "/#menu" },
        { "@type": "ListItem", "position": 3, "name": "Kontakt", "item": window.location.origin + "/#contact" }
      ]
    });
    document.head.appendChild(breadcrumbSchema);

    return () => {
      document.head.removeChild(restaurantSchema);
      document.head.removeChild(breadcrumbSchema);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Kitchen />
        <MenuSection />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
