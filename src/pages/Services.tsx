import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  FileText, CheckCircle2, ArrowRight, ShieldCheck, 
  Plane, Train, BookOpen, MessageCircle, 
  Globe, Zap, Users, Award
} from 'lucide-react';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  const serviceCategories = [
    {
      title: 'Air Ticketing',
      desc: 'Lowest fares for international & domestic flights worldwide.',
      icon: <Plane size={32} />,
      path: '/services/air-ticketing',
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Visa Stamping',
      desc: 'Expert processing for Saudi, Kuwait, UAE & more.',
      icon: <FileText size={32} />,
      path: '/services/visa-stamping',
      color: 'bg-yellow-500',
      image: 'https://images.unsplash.com/photo-1539281781223-9333a3cc1808?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Visit Visa',
      desc: 'Tourist & family visit visas with quick turnaround.',
      icon: <Globe size={32} />,
      path: '/services/visit-visa',
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Train Tickets',
      desc: 'Reliable Tatkal & standard booking across India.',
      icon: <Train size={32} />,
      path: '/services/train-ticketing',
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Certificate Attestation',
      desc: 'Government verified document attestation services.',
      icon: <ShieldCheck size={32} />,
      path: '/services/certificate-attestation',
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Study Abroad',
      desc: 'Global university admissions & student counseling.',
      icon: <BookOpen size={32} />,
      path: '/services/study-abroad',
      color: 'bg-teal-500',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const features = [
    { title: '99.8% Success', desc: 'Industry leading approval rates', icon: <Award className="text-[#D4AF37]" /> },
    { title: 'Global Network', desc: 'Direct links with 50+ countries', icon: <Globe className="text-[#D4AF37]" /> },
    { title: 'Expert Team', desc: '15+ years of domain expertise', icon: <Users className="text-[#D4AF37]" /> },
    { title: 'Express Process', desc: 'Fast-track document handling', icon: <Zap className="text-[#D4AF37]" /> },
  ];

  return (
    <div className="pt-20 pb-20 overflow-x-hidden">
      {/* Premium Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0B090A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 islamic-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B090A]/50 to-[#0B090A]" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-sm font-bold tracking-widest uppercase">
              The Fly International Advantage
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              World Class <span className="text-[#D4AF37]">Services</span><br />
              For The Global Traveler
            </h1>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Experience perfection in travel documentation, global logistics, and sacred pilgrimages with Fly International. We handle the complexity, you enjoy the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a href="https://wa.me/919951335542" className="px-10 py-5 bg-[#D4AF37] text-[#0B090A] rounded-full font-bold text-lg hover:bg-[#C5A030] transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95">
                Contact Our Experts
              </a>
              <button onClick={() => document.getElementById('explorer')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="bg-white dark:bg-[#1F2937] py-12 border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold">{f.title}</div>
                  <div className="text-slate-500 dark:text-gray-400 text-xs">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Explorer Hub */}
      <section id="explorer" className="py-32 bg-slate-50 dark:bg-[#0B090A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-sans italic">Our Service Portfolio</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
              Select a service below to view detailed requirements, pricing, and process timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-[#1F2937] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-white/5 transition-all"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute top-6 left-6 p-3 rounded-2xl ${service.color} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed min-h-[3rem]">
                    {service.desc}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-slate-50 dark:border-white/5">
                    <Link 
                      to={service.path} 
                      className="text-[#D4AF37] font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight size={18} />
                    </Link>
                    <a 
                      href={`https://wa.me/919951335542?text=Assalamu Alaikum! I would like to inquire about ${service.title} services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Process */}
      <section className="py-32 bg-white dark:bg-[#1F2937] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Our Methodology</span>
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Streamlined Process For <br />
                <span className="text-[#D4AF37]">Zero-Stress</span> Experience
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">
                We have perfected our workflow over 15 years to ensure that your travel and documentation needs are met with absolute precision and speed.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'Detailed assessment of your requirements via phone or chat.' },
                  { step: '02', title: 'Submission', desc: 'Secure document collection and expert review for zero errors.' },
                  { step: '03', title: 'Processing', desc: 'Direct engagement with respective authorities for priority handling.' },
                  { step: '04', title: 'Delivery', desc: 'Fast and safe return of your finalized travel documents.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-3xl font-black text-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors">{item.step}</div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-500 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-100 dark:bg-[#0B090A] aspect-square rounded-[3rem] overflow-hidden relative border-8 border-slate-50 dark:border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165833767-0275ade33008?auto=format&fit=crop&q=80&w=1000" 
                  alt="Process" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-[#1F2937] p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white tracking-widest leading-none mb-1">REAL-TIME</div>
                    <div className="text-slate-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Status Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-[0_20px_50px_rgba(212,175,55,0.4)]">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-[#0B090A] tracking-tighter italic">Ready to Experience Fly International?</h2>
            <p className="text-[#0B090A]/80 text-xl font-bold max-w-2xl mx-auto">
              Skip the queues and the stress. Join 50,000+ happy travelers who trust us with their dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a href="https://wa.me/919951335542" className="px-10 py-5 bg-[#0B090A] text-white rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
                Get Started On WhatsApp
              </a>
              <a href="tel:+919951335542" className="px-10 py-5 bg-white text-[#0B090A] rounded-full font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
