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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-gold-500/20 border border-gold-500/30 text-gold-500 rounded-full text-sm font-bold tracking-wider uppercase">
              Trusted by 50,000+ Pilgrims
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
              Embark on Your <br />
              <span className="text-gold-500">Sacred Journey</span> <br />
              With Excellence
            </h1>
            <p className="text-lg md:text-xl text-emerald-50/80 leading-relaxed max-w-xl">
              Fly International provides premium, all-inclusive Haj and Umrah packages tailored to your spiritual needs. Experience comfort, proximity, and expert guidance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/packages"
              className="px-8 py-4 bg-gold-500 text-emerald-950 rounded-full font-bold text-lg hover:bg-gold-600 transition-all shadow-xl shadow-gold-500/20 flex items-center gap-2 group"
            >
              Explore Packages
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/visa"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Visa Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {[
              { icon: ShieldCheck, label: 'Govt. Approved' },
              { icon: Globe, label: 'Global Network' },
              { icon: Users, label: 'Expert Guides' },
              { icon: HeartHandshake, label: '24/7 Support' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold-500">
                  <item.icon size={24} />
                </div>
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`}
                  className="w-10 h-10 rounded-full border-2 border-emerald-900"
                  alt="User"
                />
              ))}
            </div>
            <div>
              <div className="text-gold-500 font-bold">4.9/5 Rating</div>
              <div className="text-white/60 text-xs">From 2,500+ Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
