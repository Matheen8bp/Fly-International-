import React from 'react';
import ResourcePageLayout from '../../components/ResourcePageLayout';
import { PlayCircle, CheckCircle2 } from 'lucide-react';

const UmrahRituals = () => {
  const rituals = [
    { title: '01. Ihram', desc: 'The sacred state of purity and the intention to perform Umrah.', detail: 'Cleanse yourself, wear the Ihram garments, and make the Niyyah (intention) for Umrah. Recite the Talbiyah frequently.' },
    { title: '02. Tawaf', desc: 'Circling the Kaaba seven times in a counter-clockwise direction.', detail: 'Each round starts at the Black Stone. Recite prayers and supplications during each circuit. For men, the first three rounds should be brisk (Raml).' },
    { title: '03. Sa\'i', desc: 'Walking seven times between the hills of Safa and Marwa.', detail: 'Starting at Safa, walk towards Marwa (one way is one round). There are seven rounds total. Increase pace between the green markers.' },
    { title: '04. Halq/Taqsir', desc: 'Shaving or cutting the hair to mark the completion of Umrah.', detail: 'Men may either shave their heads (Halq) or cut their hair short (Taqsir). Women cut a small portion (about an inch) of their hair.' },
  ];

  return (
    <ResourcePageLayout
      title="Umrah Rituals"
      category="Ritual Guide"
      description="Understand the spiritual significance and the correct procedure for the rituals of Umrah."
      heroImage="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1200"
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 guide-title">The Essentials of Umrah</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto guide-text">
            Umrah is a beautiful spiritual journey that can be performed at any time of the year. While shorter than Hajj, its rituals are profound and require careful preparation.
          </p>
        </div>

        {/* Video Placeholder Style section from Resources page but more prominent */}
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-slate-100 dark:border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt="Umrah Rituals Guide" 
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <PlayCircle className="text-[#D4AF37]" size={64} />
            </div>
            <div className="text-white font-black text-xl tracking-widest uppercase italic bg-black/20 px-6 py-2 rounded-xl">Watch Tutorial</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rituals.map((ritual, idx) => (
            <div key={idx} className="p-8 bg-slate-50 dark:bg-[#0B090A] rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] text-[#0B090A] flex items-center justify-center font-black">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white guide-title">{ritual.title}</h3>
              </div>
              <p className="text-slate-900 dark:text-white font-bold mb-4 guide-text">{ritual.desc}</p>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed guide-text">
                {ritual.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Spiritual Note */}
        <div className="flex items-start gap-6 p-10 bg-slate-900 rounded-[3rem] text-white">
           <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#0B090A] shrink-0">
              <CheckCircle2 size={32} />
           </div>
           <div className="space-y-2">
              <h4 className="text-xl font-bold italic text-[#D4AF37] guide-title">Completion of Umrah</h4>
              <p className="text-slate-400 text-sm leading-relaxed guide-text">
                After the hair cutting ritual, you are no longer in the state of Ihram. Your Umrah is now complete. Many pilgrims then choose to perform multiple Tawafs or visit historical sites in Makkah.
              </p>
           </div>
        </div>
      </div>
    </ResourcePageLayout>
  );
};

export default UmrahRituals;
