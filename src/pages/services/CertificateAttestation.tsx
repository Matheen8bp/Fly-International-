import React, { useEffect } from 'react';
import { FileText, CheckSquare, MessageCircle } from 'lucide-react';

const CertificateAttestation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center gap-8 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-green-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 space-y-8 max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-bold tracking-wider uppercase">
              100% Verified
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Document & Certificate <span className="text-green-500">Attestation</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg">
              Reliable and verifiable attestation services for all your personal, educational, and commercial documents.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Attestation" className="w-full h-[500px] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-12">
              <FileText size={40} className="text-green-400 mb-4" />
              <h3 className="text-4xl font-bold text-white mb-2">Government Approved</h3>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Documents We Attest</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Marriage Certificates', 'Degree Certificates', 'Birth & Death Certificates', 'Medical Certificates', 'Commercial Invoices', 'Incorporation Documents', 'PCC', 'Transfer Certificates'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-[#1F2937] rounded-xl border border-slate-100 dark:border-white/10 shadow-sm font-medium text-slate-700 dark:text-gray-300">
                  <CheckSquare size={20} className="text-green-600 shrink-0" /> {item}
                </div>
              ))}
            </div>
            <div className="pt-8">
              <a href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum! I need my certificates attested. Can you help?')}`} className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg">
                <MessageCircle size={20} /> Request Attestation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateAttestation;
