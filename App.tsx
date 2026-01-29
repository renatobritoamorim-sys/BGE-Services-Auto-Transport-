
import React, { useState, useEffect } from 'react';
import { translations, Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const cities = [
    "Meriden", "Windsor", "Cromwell", "Hartford", "Waterbury", 
    "Rocky Hill", "Glastonbury", "New Britain", "Wethersfield", 
    "East Hartford", "Enfield", "West Hartford", "Middletown"
  ];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'pt' : 'en');
  };

  // Structured Data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TransportationService",
      "name": "BGE Services Auto Transport",
      "description": "BGE Services provides reliable and professional car hauling and towing across Connecticut.",
      "telephone": "(860)328-2011",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18 Erwin Ct",
        "addressLocality": "Newington",
        "addressRegion": "CT",
        "postalCode": "06111",
        "addressCountry": "US"
      },
      "url": "https://bgeservices.com",
      "logo": "https://picsum.photos/200/200", // Fallback for schema
      "openingHours": "Mo-Su 00:00-23:59",
      "areaServed": "Connecticut"
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <span className="text-2xl font-black italic tracking-tighter">
                <span className="text-brand-red">B</span>
                <span className="text-gray-400">G</span>
                <span className="text-brand-blue">E</span>
                <span className="ml-2 text-sm uppercase text-gray-800 font-bold hidden sm:inline tracking-widest">Auto Transport</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-brand-blue transition-colors font-semibold">{t.navHome}</a>
              <a href="#services" className="text-gray-600 hover:text-brand-blue transition-colors font-semibold">{t.navServices}</a>
              <a href="#area" className="text-gray-600 hover:text-brand-blue transition-colors font-semibold">{t.navArea}</a>
              <a href="#about" className="text-gray-600 hover:text-brand-blue transition-colors font-semibold">{t.navAbout}</a>
            </div>

            <div className="flex items-center space-x-4">
               <button 
                onClick={toggleLang}
                className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <span>{lang === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
              </button>
              <a 
                href="tel:8603282011"
                className="bg-brand-red text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform text-sm sm:text-base"
              >
                (860) 328-2011
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero Section */}
        <section id="home" className="relative h-[600px] sm:h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover"
              alt="Professional Car Transport Truck"
            />
            <div className="absolute inset-0 gradient-overlay"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight uppercase tracking-tight">
                {t.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl mb-10 text-gray-200 leading-relaxed font-light">
                {t.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:8603282011" 
                  className="bg-brand-red hover:bg-red-700 text-white text-center px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-red-500/20"
                >
                  {t.ctaCall}
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61584038425891" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-blue hover:bg-blue-800 text-white text-center px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/20"
                >
                  {t.ctaFacebook}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mb-4">{t.servicesTitle}</h2>
              <div className="w-24 h-1.5 bg-brand-red mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: t.service1, desc: t.service1Desc, icon: "🚛" },
                { title: t.service2, desc: t.service2Desc, icon: "🪝" },
                { title: t.service3, desc: t.service3Desc, icon: "📍" },
                { title: t.service4, desc: t.service4Desc, icon: "♻️" }
              ].map((service, idx) => (
                <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:border-brand-blue transition-all hover:shadow-2xl group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-brand-blue">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section id="area" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mb-6">{t.areaTitle}</h2>
                <p className="text-lg text-gray-600 mb-8">{t.areaSub}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {cities.map((city, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-800">
                      <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                      <span className="font-semibold">{city}, CT</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-brand-blue text-white rounded-2xl">
                  <p className="text-lg font-bold">📍 We serve the entire state of Connecticut!</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11894.135293674686!2d-72.7431718!3d41.6934442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e652f195430815%3A0xc1791845112e7534!2s18%20Erwin%20Ct%2C%20Newington%2C%20CT%2006111!5e0!3m2!1sen!2sus!4v1715876543210!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mb-8">{t.aboutTitle}</h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-loose">
                {t.aboutText}
              </p>
              <div className="mt-12 flex items-center justify-center space-x-12 grayscale opacity-50">
                <span className="text-2xl font-bold italic tracking-widest text-brand-blue">CAR HAULING</span>
                <span className="text-2xl font-bold italic tracking-widest text-brand-red">AUTO TRANSPORT</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-black italic mb-6">
                <span className="text-brand-red">B</span>
                <span className="text-white">G</span>
                <span className="text-brand-blue">E</span>
              </h3>
              <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                Professional transportation solutions for Connecticut since 2024.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-brand-red">{t.navContact}</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href="tel:8603282011" className="text-xl font-bold hover:text-white transition-colors">
                    (860) 328-2011
                  </a>
                </li>
                <li className="text-sm">
                  {t.footerAddress}
                </li>
                <li className="text-sm font-bold text-green-400">
                  {t.footerHours}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-brand-red">Links</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://www.facebook.com/profile.php?id=61584038425891" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-brand-blue transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} BGE Services Auto Transport. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="tel:8603282011"
          className="bg-brand-red text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
