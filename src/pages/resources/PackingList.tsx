import React from 'react';
import ResourcePageLayout from '../../components/ResourcePageLayout';
import { CheckSquare, Briefcase, Pill, Laptop, User, AlertCircle } from 'lucide-react';

const PackingList = () => {
  const sections = [
    {
      title: 'Sacred Essentials',
      icon: <User className="text-[#D4AF37]" />,
      items: [
        'Ihram (2 sets for men)',
        'Prayer mat & beads',
        'Pocket-sized Quran',
        'Supplication (Dua) books',
        'Prayer clothing (for women)',
        'Seven-bead counter (for Tawaf)'
      ]
    },
    {
      title: 'Clothing & Footwear',
      icon: <Briefcase className="text-blue-500" />,
      items: [
        'Lightweight cotton clothes',
        'Comfortable walking shoes',
        'Sandal/Flip-flops for Haram',
        'Extra undergarments',
        'Light jacket (for AC rooms)',
        'Unscented soap & hygiene kit'
      ]
    },
    {
      title: 'Health & Pharmacy',
      icon: <Pill className="text-green-500" />,
      items: [
        'Personal medications',
        'Pain relievers & fever meds',
        'Digestive aids',
        'Band-aids & ORS packets',
        'Unscented sunscreen',
        'VAS (Vaseline) for chafing'
      ]
    },
    {
      title: 'Tech & Documents',
      icon: <Laptop className="text-purple-500" />,
      items: [
        'Passport & Visa copies',
        'Flight tickets & vouchers',
        'Vaccination certificates',
        'Universal power bank',
        'Saudi SIM card/eSim',
        'Local currency (SAR)'
      ]
    }
  ];

  return (
    <ResourcePageLayout
      title="Packing Checklist"
      category="Pilgrim Checklist"
      description="Prepare your bags with peace of mind. Use our comprehensive checklist to ensure you don't forget the essentials for your spiritual journey."
      heroImage="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 guide-title">Prepare for Success</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto guide-text">
            Packing correctly is the first step toward a focused and stress-free pilgrimage. Focus on lightweight, breathable materials and unscented hygiene products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-[#0B090A] p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-[#1F2937] rounded-2xl flex items-center justify-center shadow-md">
                     {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white guide-title">{section.title}</h3>
               </div>
               <div className="grid grid-cols-1 gap-3">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-[#1F2937]/50 rounded-xl border border-slate-200/50 dark:border-white/5">
                       <CheckSquare size={18} className="text-[#D4AF37]" />
                       <span className="text-slate-700 dark:text-gray-300 text-sm font-medium guide-text">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600/10 p-10 rounded-[3rem] border border-blue-600/20 flex flex-col md:flex-row items-center gap-8">
           <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-lg">
              <AlertCircle size={40} />
           </div>
           <div className="space-y-2">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-400">Important: Unscented Products</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                While in the state of Ihram, it is forbidden to use scented soaps, perfumes, or scented lotions. Make sure all your hygiene products for the Ihram period are "Fragrance-Free" or "Unscented."
              </p>
           </div>
        </div>
      </div>
    </ResourcePageLayout>
  );
};

export default PackingList;
