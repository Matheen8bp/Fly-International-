import React, { useEffect } from 'react';
import { FileText, CheckCircle2, MessageCircle } from 'lucide-react';

const VisaStamping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-yellow-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-bold tracking-wider uppercase">
              Fast Processing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Employment & Commercial <span className="text-yellow-500">Visa Stamping</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              Expert processing and quick turnaround for commercial, family, and employment visa stamping across the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1539281781223-9333a3cc1808?auto=format&fit=crop&q=80&w=800" alt="Visa Stamping" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <FileText size={40} className="text-yellow-400 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">10-12 Days Delivery</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Documents Required</h2>
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] p-8 rounded-[2rem]">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['Original Valid Passport', 'Medical Fitness Report', 'Police Clearance (PCC)', '4 Passport Size Photos', 'Employment Offer Letter', 'Company Details'].map((doc, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-medium">
                     <CheckCircle2 size={20} className="text-[#D4AF37]" /> {doc}
                   </div>
                 ))}
               </div>
            </div>
            <div className="pt-8">
              <a href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum! I need assistance with Visa Stamping services.')}`} className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white dark:text-[#0B090A] rounded-xl font-bold hover:bg-[#C5A030] transition-colors shadow-lg">
                <MessageCircle size={20} /> Submit Documents
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaStamping;
