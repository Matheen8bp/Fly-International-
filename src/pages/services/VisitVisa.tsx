import React, { useEffect } from 'react';
import { CheckCircle2, CheckSquare, MessageCircle } from 'lucide-react';

const VisitVisa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-purple-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-bold tracking-wider uppercase">
              Hassle-Free Approvals
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Tourist & Family <span className="text-purple-500">Visit Visas</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              Planning a vacation or visiting family? We ensure quick and hassle-free processing for your visit visas.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" alt="Visit Visa" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <CheckCircle2 size={40} className="text-purple-400 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">High Approval Rates</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Our Services Include</h2>
            <ul className="space-y-4">
              {['Dubai, Qatar, Oman & Worldwide', '14-Day, 30-Day, and 90-Day Options', 'Family Visit Visa Processing', 'Tourist Visa Processing', 'Document Checklist Preparation', 'Quick Processing Times'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 dark:text-gray-300 font-medium text-lg bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-slate-100 dark:border-white/10 shadow-sm">
                   <CheckSquare size={24} className="text-purple-500 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <a href="https://wa.me/919951335542" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors shadow-lg">
                <MessageCircle size={20} /> Apply for Visit Visa
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitVisa;
