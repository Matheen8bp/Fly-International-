import React, { useEffect } from 'react';
import { Train, CheckCircle2, MessageCircle } from 'lucide-react';

const TrainTicketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-orange-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold tracking-wider uppercase">
              All India Routes
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Fast & Reliable <span className="text-orange-500">Train Ticketing</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              Travel comfortably across India. We offer reliable and fast train ticket reservations, including last-minute tatkal bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800" alt="Train" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <Train size={40} className="text-orange-400 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">Tatkal Booking</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Booking Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Fast Tatkal Booking', 'Standard Reservations', 'AC Class AC1, AC2, AC3', 'Sleeper Class', 'PNR Status Tracking', 'All India Routes'].map((item, i) => (
                 <div key={i} className="bg-white dark:bg-[#1F2937] border border-slate-100 dark:border-white/10 p-6 rounded-2xl flex items-center gap-4 text-slate-800 dark:text-gray-300 font-bold shadow-sm">
                   <CheckCircle2 size={24} className="text-orange-500 shrink-0" /> {item}
                 </div>
               ))}
            </div>
            <div className="pt-8">
              <a href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum! I want to book Train Tickets through Fly International.')}`} className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg">
                <MessageCircle size={20} /> Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainTicketing;
