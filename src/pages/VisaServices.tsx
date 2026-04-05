import React from 'react';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, Clock, HelpCircle, Download, ArrowRight, ShieldCheck } from 'lucide-react';

const VisaServices = () => {
  const steps = [
    { title: 'Submit Inquiry', desc: 'Fill out our online form or contact us directly with your details.' },
    { title: 'Document Review', desc: 'Our experts verify your documents to ensure 100% compliance.' },
    { title: 'Application Filing', desc: 'We handle the submission to the respective authorities.' },
    { title: 'Visa Approval', desc: 'Receive your approved visa digitally or via courier.' },
  ];

  const faqs = [
    { q: 'How long does Umrah visa processing take?', a: 'Typically, Umrah visas are processed within 3-5 working days after document submission.' },
    { q: 'What are the basic requirements for Haj visa?', a: 'Requirements include a valid passport (6 months+), vaccination certificates, and proof of travel arrangements.' },
    { q: 'Can I apply for a visa without a package?', a: 'Yes, we offer standalone visa services, though we recommend all-inclusive packages for a better experience.' },
  ];

  return (
    <div className="pt-32 pb-20 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute inset-0 islamic-pattern opacity-10" />
          <div className="relative z-10 lg:w-3/5 space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 border border-sky-400/30 text-[#D4AF37] rounded-full text-sm font-bold tracking-wider uppercase">
              Hassle-Free Processing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white leading-tight">
              Expert Visa Services for <span className="text-[#D4AF37]">Sacred Journeys</span>
            </h1>
            <p className="text-blue-100/70 text-lg max-w-xl">
              Our dedicated visa hub ensures your documentation is handled with precision and care, giving you peace of mind for your pilgrimage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#D4AF37] text-white dark:text-[#0B090A] rounded-full font-bold hover:bg-[#D4AF37] transition-all shadow-2xl shadow-black/50 shadow-2xl shadow-black/50-400/20">
                Apply for Visa Now
              </button>
              <button className="px-8 py-4 bg-white dark:bg-[#1F2937]/10 backdrop-blur-md border border-slate-800 dark:border-white/10 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white rounded-full font-bold hover:bg-white dark:bg-[#1F2937]/20 transition-all flex items-center gap-2">
                <Download size={20} />
                Download Checklist
              </button>
            </div>
          </div>
          <div className="relative z-10 lg:w-2/5">
            <div className="bg-white dark:bg-[#1F2937]/10 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 dark:border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white font-bold">99.8% Success Rate</div>
                  <div className="text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/60 text-xs uppercase tracking-widest">Verified Approval</div>
                </div>
              </div>
              <div className="space-y-4">
                {['Umrah Visa', 'Haj Visa', 'Tourist Visa', 'Business Visa'].map((v, i) => (
                  <div key={i} className="flex items-center justify-between text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 text-sm py-2 border-b border-slate-800 dark:border-white/10">
                    <span>{v}</span>
                    <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Step-by-Step Process</h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've simplified the visa application journey into four clear stages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-50 dark:bg-[#0B090A] -translate-y-1/2 z-0" />
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-200 dark:border-[#1F2937] shadow-2xl shadow-black/50 hover:shadow-2xl shadow-black/50 transition-all text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-slate-800 dark:border-white/10 shadow-2xl shadow-black/50">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-[#0B090A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Required Documents Checklist</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Valid Passport (6 months+)',
                  'Recent Passport Photos',
                  'Vaccination Certificate',
                  'Proof of Relationship',
                  'Flight Itinerary',
                  'Hotel Confirmation',
                  'Bank Statements',
                  'Employment Letter'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-[#1F2937] rounded-2xl border border-slate-200 dark:border-[#1F2937]">
                    <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-[#0B090A] flex items-center justify-center text-[#D4AF37] shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-[#1F2937] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/50 border border-slate-200 dark:border-[#1F2937] space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Apply for Visa</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-xl outline-none" placeholder="Full Name" />
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-xl outline-none" placeholder="Email Address" />
                </div>
                <select className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-xl outline-none">
                  <option>Umrah Visa</option>
                  <option>Haj Visa</option>
                  <option>Tourist Visa</option>
                </select>
                <textarea className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-xl outline-none h-32" placeholder="Message (Optional)"></textarea>
                <button className="w-full py-4 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:bg-[#0B090A] transition-all">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;
