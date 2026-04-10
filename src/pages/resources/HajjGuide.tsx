import React from 'react';
import ResourcePageLayout from '../../components/ResourcePageLayout';
import { motion } from 'motion/react';

const HajjGuide = () => {
  const steps = [
    { title: '01. Ihram', desc: 'Starting the journey with pure intention and sacred dress (two white cloths for men, modest attire for women).', detail: 'Enter the sacred state at the Meeqat. Focus on your spiritual intention (Niyyah) and begin reciting the Talbiyah.' },
    { title: '02. Tawaf', desc: 'Circling the Kaaba seven times in prayer and devotion.', detail: 'Move in a counter-clockwise direction around the House of Allah, starting and ending at the Black Stone (Hajar al-Aswad).' },
    { title: '03. Sa’i', desc: 'Walking between Safa and Marwah hills seven times.', detail: 'Commemorate Hagar\'s search for water for her son Ishmael by walking between these two historic hills.' },
    { title: '04. Mina', desc: 'The tent city where pilgrims spend the 8th of Dhul Hijjah.', detail: 'A day of meditation and prayer, preparing for the great day of Arafat.' },
    { title: '05. Arafat', desc: 'Standing in prayer on the 9th day - the pinnacle of Hajj.', detail: 'From noon until sunset, pilgrims stand in prayer, seeking forgiveness on the plains of Arafat.' },
    { title: '06. Muzdalifah', desc: 'Spending the night under the stars and gathering pebbles.', detail: 'After sunset, leave Arafat for Muzdalifah. Collect 49 or 70 pebbles for the stoning ritual.' },
    { title: '07. Rami', desc: 'The symbolic stoning of the pillars (Jamarat) in Mina.', detail: 'Rejecting temptation by throwing pebbles at the three pillars representing the devil.' },
    { title: '08. Qurbani', desc: 'The animal sacrifice followed by cutting of the hair.', detail: 'A sacrifice to thank Allah and share food with the needy. Then, shave or trim your hair (Halq or Taqsir).' },
    { title: '09. Final Tawaf', desc: 'The farewell circling of the Kaaba before departure (Tawaf al-Wada).', detail: 'The final ritual to bid farewell to the Holy Sanctuary before leaving Makkah.' }
  ];

  return (
    <ResourcePageLayout
      title="Hajj Guide"
      category="Step-by-Step Guide"
      description="A simplified, comprehensive walk-through of the sacred Hajj pilgrimage rituals for students and first-time pilgrims."
      heroImage="/hajj-guide.png"
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 guide-title">The Sacred Journey Explained</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed guide-text">
            Hajj is the journey of a lifetime. To make it easier to remember, we have broken down the rituals into nine major stages. Each step is a vital part of your spiritual fulfillment.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-slate-50 dark:bg-[#0B090A] rounded-[2rem] border border-slate-100 dark:border-white/5 hover:border-[#D4AF37]/50 transition-all shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                 <h3 className="text-2xl font-black text-slate-900 dark:text-white guide-title group-hover:text-[#D4AF37] transition-colors">
                   {step.title}
                 </h3>
              </div>
              <p className="text-slate-700 dark:text-gray-300 font-bold mb-4 guide-text">
                {step.desc}
              </p>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed border-l-4 border-[#D4AF37]/30 pl-6 py-2 guide-text">
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Spiritual Quote */}
        <div className="bg-[#D4AF37]/10 p-12 rounded-[3rem] border border-[#D4AF37]/20 text-center space-y-4">
           <p className="text-2xl font-sans italic text-slate-800 dark:text-white">
             "And proclaim to the people the Hajj [pilgrimage]; they will come to you on foot and on every lean camel; they will come from every distant pass."
           </p>
           <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs">— Surah Al-Hajj, Verse 27</p>
        </div>
      </div>
    </ResourcePageLayout>
  );
};

export default HajjGuide;
