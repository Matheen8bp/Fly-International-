import React from 'react';
import { motion } from 'motion/react';
import { RESOURCES } from '../constants';
import { BookOpen, Info, CheckSquare, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

      {/* Main Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES.map((resource) => {
            const Icon = iconMap[resource.icon];
            const resourceLinks: Record<string, string> = {
              'haj-guide': '/resources/haj-guide',
              'umrah-rituals': '/resources/umrah-rituals',
              'packing-list': '/resources/packing-list'
            };

            return (
              <div key={resource.id} className="bg-white dark:bg-[#1F2937] p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-2xl shadow-black/5 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1F2937]/50 text-[#D4AF37] flex items-center justify-center mb-8 group-hover:bg-slate-50 dark:bg-[#0B090A] group-hover:text-slate-900 dark:text-white transition-colors">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 italic leading-tight">{resource.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8">{resource.description}</p>
                <Link 
                  to={resourceLinks[resource.id] || '/resources'}
                  className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-3 transition-all cursor-pointer"
                >
                  Explore Guide <ArrowRight size={20} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Advice Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1F2937]/30 rounded-[3rem] py-20 border border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
           <h2 className="text-4xl font-bold text-slate-900 dark:text-white italic mb-6">Expert Advice for <span className="text-[#D4AF37]">Safe Travels</span></h2>
           <p className="text-slate-500 dark:text-gray-400">Beyond the rituals, practical preparation and mindset are the keys to a successful spiritual journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-[#0B090A] p-10 rounded-[2.5rem] border border-[#D4AF37] space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold text-[#D4AF37] flex items-center gap-3 italic leading-none">
              <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-[#0B090A] flex items-center justify-center text-sm not-italic">✓</div>
              Pilgrim Do's
            </h3>
            <ul className="space-y-4">
              {['Maintain patience at all times', 'Keep hydrated and carry water', 'Respect local customs and laws', 'Focus on spiritual connection', 'Keep emergency contacts handy'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-gray-200 font-medium">
                  <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 p-10 rounded-[2.5rem] border border-red-100 dark:border-red-900/30 space-y-6 shadow-xl">
            <h3 className="text-2xl font-bold text-red-600 flex items-center gap-3 italic leading-none">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm not-italic">✕</div>
              Pilgrim Don'ts
            </h3>
            <ul className="space-y-4">
              {['Avoid crowded areas during peak times', 'Don\'t carry excessive cash', 'Don\'t engage in arguments', 'Don\'t take unauthorized photos', 'Avoid heavy meals before rituals'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-red-900 dark:text-red-400 font-medium">
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
