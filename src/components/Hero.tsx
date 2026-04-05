import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Globe, Users, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=2000"
          alt="Kaaba Mecca"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-[#0B090A]/90 via-slate-50 dark:via-[#1F2937]/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col items-center"
          >
            <span className="inline-block px-5 py-2 bg-[#D4AF37]/20 border border-sky-400/30 text-[#D4AF37] rounded-full text-sm font-bold tracking-widest uppercase">
              Trusted by 50,000+ Pilgrims
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white leading-[1.1]">
              Embark on Your <br />
              <span className="text-[#D4AF37]">Sacred Journey</span> <br />
              With Excellence
            </h1>
            <p className="text-lg md:text-2xl text-blue-50/80 leading-relaxed max-w-3xl text-center">
              Fly International provides premium, all-inclusive Haj and Umrah packages tailored to your spiritual needs. Experience comfort, proximity, and expert guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            <Link
              to="/packages"
              className="px-8 py-4 bg-[#D4AF37] text-white dark:text-[#0B090A] rounded-full font-bold text-xl hover:bg-[#D4AF37] transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center gap-2 group hover:scale-105"
            >
              Explore Packages
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/visa"
              className="px-8 py-4 bg-white dark:bg-[#1F2937]/10 backdrop-blur-md border border-slate-800 dark:border-white/10 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white rounded-full font-bold text-xl hover:bg-white dark:bg-[#1F2937]/20 transition-all hover:scale-105"
            >
              Visa Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl"
          >
            {[
              { icon: ShieldCheck, label: 'Govt. Approved' },
              { icon: Globe, label: 'Global Network' },
              { icon: Users, label: 'Expert Guides' },
              { icon: HeartHandshake, label: '24/7 Support' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1F2937]/10 backdrop-blur-sm border border-slate-800 dark:border-white/10 flex items-center justify-center text-[#D4AF37] shadow-2xl shadow-black/50">
                  <item.icon size={30} />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
