import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Globe, Clock, CheckSquare, ShieldCheck, MapPin } from 'lucide-react';

const VisitVisa = () => {
  return (
    <ServicePageLayout
      title="Visit Visa"
      subtitle="Global Tourism Solutions"
      description="Planning a family visit or a vacation? We specialize in quick and hassle-free processing for tourist and family visit visas to the Middle East and beyond."
      heroImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I am interested in Visit Visa services for my family via Fly International."
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Explore the World Hassle-Free</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Obtaining a visit visa can be a complex process depending on the destination. Our dedicated team stays updated with the latest immigration policies to ensure your application is successful on the first attempt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <MapPin className="text-purple-500" /> Popular Destinations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Dubai/UAE', type: '30/60 Days' },
                { name: 'Qatar', type: 'Tourist/Work' },
                { name: 'Oman', type: 'Short Stay' },
                { name: 'Saudi Arabia', type: 'Family/Tourist' },
                { name: 'Singapore', type: 'E-Visa' },
                { name: 'Malaysia', type: 'Quick Process' }
              ].map((dest, i) => (
                <div key={i} className="bg-white dark:bg-[#1F2937] p-5 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm group hover:border-purple-500/50 transition-all">
                  <div className="font-bold text-slate-800 dark:text-gray-200">{dest.name}</div>
                  <div className="text-xs text-purple-500 font-bold uppercase tracking-widest">{dest.type}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-500/10 p-8 rounded-3xl border border-purple-500/20 shadow-inner">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-6 flex items-center gap-2">
              <ShieldCheck /> Why Choose Us?
            </h3>
            <ul className="space-y-5">
              {[
                'Online & Offline Application Support',
                'Minimal Document Requirements',
                'Fast E-Visa Delivery (within 24-48 hours)',
                'Expert Guidance on Extension Policies',
                'Family Package Discounts'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-gray-300 font-medium">
                  <CheckSquare size={18} className="text-purple-600 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default VisitVisa;
