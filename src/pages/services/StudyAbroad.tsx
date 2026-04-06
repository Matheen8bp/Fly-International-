import React, { useEffect } from 'react';
import { BookOpen, CheckCircle2, MessageCircle } from 'lucide-react';

const StudyAbroad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-teal-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-bold tracking-wider uppercase">
              Secure Your Future
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              International <span className="text-teal-500">Study Abroad</span> Counseling
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              Secure your future with top international universities. We guide students through applications, visas, and counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" alt="University" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <BookOpen size={40} className="text-teal-400 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">Top Universities</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Our Educational Services</h2>
            <ul className="space-y-4">
              {['Top Universities Admission', 'Student Visa Processing', 'Career & Course Counseling', 'Application Documentation', 'Scholarship Assistance', 'Pre-Departure Briefing'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-800 dark:text-gray-300 font-bold text-lg p-3">
                   <div className="w-10 h-10 bg-teal-500/10 text-teal-500 flex items-center justify-center rounded-xl shrink-0">
                     <CheckCircle2 size={24} />
                   </div>
                   {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <a href="https://wa.me/919951335542" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg">
                <MessageCircle size={20} /> Free Consultation Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
