import React, { useEffect } from 'react';
import { Plane, CheckSquare, MessageCircle, Phone } from 'lucide-react';

const AirTicketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-blue-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold tracking-wider uppercase">
              Global Flights
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              International & Domestic <span className="text-blue-500">Air Ticketing</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              We provide highly competitive and discounted airfares for all major airlines from Hyderabad to the Middle East and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" alt="Flight processing" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <Plane size={40} className="text-blue-400 transform rotate-45 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">Cheapest Fares</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-white text-lg"><CheckSquare size={20} className="text-green-600" /> Saudi Arabia</div>
                <p className="text-sm text-slate-500 dark:text-gray-400">Jeddah, Riyadh, Dammam</p>
              </div>
              <div className="space-y-2 p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-white text-lg"><CheckSquare size={20} className="text-green-600" /> UAE</div>
                <p className="text-sm text-slate-500 dark:text-gray-400">Dubai, Abu Dhabi, Sharjah</p>
              </div>
              <div className="p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 font-bold text-slate-800 dark:text-white flex items-center gap-3"><CheckSquare size={20} className="text-green-600" /> Kuwait & Oman</div>
              <div className="p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 font-bold text-slate-800 dark:text-white flex items-center gap-3"><CheckSquare size={20} className="text-green-600" /> Qatar & Bahrain</div>
              <div className="p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 font-bold text-slate-800 dark:text-white flex items-center gap-3"><CheckSquare size={20} className="text-green-600" /> Australia & UK</div>
              <div className="p-6 bg-white dark:bg-[#1F2937] rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 font-bold text-slate-800 dark:text-white flex items-center gap-3"><CheckSquare size={20} className="text-green-600" /> Domestic Flights</div>
            </div>
            <div className="pt-8 flex gap-4">
              <a href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum! I would like to inquire about Air Ticketing services at Fly International.')}`} className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
                <MessageCircle size={20} /> Chat with Agent
              </a>
              <a href="tel:+919951335542" className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl font-bold transition-colors shadow-lg">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirTicketing;
