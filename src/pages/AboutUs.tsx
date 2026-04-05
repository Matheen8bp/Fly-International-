import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, History, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white leading-tight">
            Dedicated to Your <br />
            <span className="text-[#D4AF37]">Spiritual Fulfillment</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Fly International was founded with a single mission: to provide pilgrims with a seamless, comfortable, and spiritually enriching travel experience to the holy cities of Makkah and Madinah.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', value: '15+', icon: History },
              { label: 'Happy Pilgrims', value: '50k+', icon: Users },
              { label: 'Global Offices', value: '12', icon: Heart },
              { label: 'Awards Won', value: '25', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#1F2937]/10 flex items-center justify-center text-[#D4AF37] mx-auto">
                  <stat.icon size={32} />
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-blue-100/60 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                To simplify the complexities of pilgrimage travel by providing expert guidance, premium logistics, and compassionate service, allowing every pilgrim to focus entirely on their worship.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Vision</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
                To be the world's most trusted and innovative pilgrimage travel partner, setting new standards for excellence and spiritual support in the travel industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1565552130158-2752b644c65f?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl shadow-black/50" alt="Mecca" />
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl shadow-black/50 mt-8" alt="Medina" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 dark:bg-[#0B090A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We operate with absolute transparency and honesty in all our dealings.' },
              { title: 'Excellence', desc: 'We strive for perfection in every detail of your travel arrangements.' },
              { title: 'Compassion', desc: 'We treat every pilgrim with the respect and care they deserve.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1F2937] p-10 rounded-3xl border border-slate-200 dark:border-[#1F2937] shadow-2xl shadow-black/50 hover:shadow-2xl shadow-black/50 transition-all">
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-[#0B090A] flex items-center justify-center text-[#D4AF37] mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
