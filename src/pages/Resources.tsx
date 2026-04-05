import React from 'react';
import { motion } from 'motion/react';
import { RESOURCES } from '../constants';
import { BookOpen, Info, CheckSquare, ArrowRight, PlayCircle, FileText } from 'lucide-react';

const Resources = () => {
  const iconMap: Record<string, any> = { BookOpen, Info, CheckSquare };

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Pilgrim Resources</h1>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to prepare for your sacred journey, from ritual guides to practical checklists.
          </p>
        </motion.div>
      </section>

      {/* Main Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((resource) => {
            const Icon = iconMap[resource.icon];
            return (
              <div key={resource.id} className="bg-white dark:bg-[#1F2937] p-10 rounded-[2.5rem] border border-slate-200 dark:border-[#1F2937] shadow-2xl shadow-black/50 hover:shadow-2xl shadow-black/50 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1F2937]/50 text-[#D4AF37] flex items-center justify-center mb-8 group-hover:bg-slate-50 dark:bg-[#0B090A] group-hover:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4">{resource.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">{resource.description}</p>
                <button className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-3 transition-all">
                  Read Full Guide <ArrowRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rituals Explained */}
      <section className="bg-blue-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Umrah Rituals Explained</h2>
              <div className="space-y-6">
                {[
                  { title: 'Ihram', desc: 'The sacred state of purity and the intention to perform Umrah.' },
                  { title: 'Tawaf', desc: 'Circling the Kaaba seven times in a counter-clockwise direction.' },
                  { title: 'Sa\'i', desc: 'Walking seven times between the hills of Safa and Marwa.' },
                  { title: 'Halq/Taqsir', desc: 'Shaving or cutting the hair to mark the completion of Umrah.' },
                ].map((ritual, idx) => (
                  <div key={idx} className="flex gap-6 p-6 bg-white dark:bg-[#1F2937]/5 rounded-2xl border border-slate-800 dark:border-white/10 hover:bg-white dark:bg-[#1F2937]/10 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-white dark:text-[#0B090A] flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white font-bold mb-1">{ritual.title}</h4>
                      <p className="text-blue-100/60 text-sm leading-relaxed">{ritual.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Video" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-[#1F2937]/20 backdrop-blur-md flex items-center justify-center border border-slate-800 dark:border-white/10 group-hover:scale-110 transition-transform">
                  <PlayCircle className="text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white" size={48} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white font-bold">Watch: Umrah Rituals Guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#1F2937]/50 p-10 rounded-[2.5rem] border border-[#D4AF37] space-y-6">
            <h3 className="text-2xl font-bold text-[#D4AF37] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white flex items-center justify-center text-sm">✓</div>
              Do's for Pilgrims
            </h3>
            <ul className="space-y-4">
              {['Maintain patience at all times', 'Keep hydrated and carry water', 'Respect local customs and laws', 'Focus on spiritual connection', 'Keep emergency contacts handy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#D4AF37] font-medium">
                  <div className="w-1.5 h-1.5 bg-slate-50 dark:bg-[#0B090A] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 p-10 rounded-[2.5rem] border border-red-100 space-y-6">
            <h3 className="text-2xl font-bold text-red-900 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-600 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white flex items-center justify-center text-sm">✕</div>
              Don'ts for Pilgrims
            </h3>
            <ul className="space-y-4">
              {['Avoid crowded areas during peak times', 'Don\'t carry excessive cash', 'Don\'t engage in arguments', 'Don\'t take unauthorized photos', 'Avoid heavy meals before rituals'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-red-800 font-medium">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
