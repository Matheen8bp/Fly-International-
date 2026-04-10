import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Phone, CheckCircle2, ShieldCheck, Globe, Clock } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  children: React.ReactNode;
  waMessage: string;
  stats?: { label: string; value: string }[];
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  children,
  waMessage,
  stats = [
    { label: 'Success Rate', value: '99.8%' },
    { label: 'Support', value: '24/7' },
    { label: 'Process', value: 'Fast' }
  ]
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const otherServices = [
    { name: 'Air Ticketing', path: '/services/air-ticketing' },
    { name: 'Visa Stamping', path: '/services/visa-stamping' },
    { name: 'Visit Visa', path: '/services/visit-visa' },
    { name: 'Train Ticket', path: '/services/train-ticketing' },
    { name: 'Attestation', path: '/services/certificate-attestation' },
    { name: 'Study Abroad', path: '/services/study-abroad' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B090A] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent dark:from-[#0B090A] dark:via-[#0B090A]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-sm font-bold tracking-wider uppercase">
              {subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={`https://wa.me/919951335542?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#D4AF37] text-[#0B090A] rounded-full font-bold hover:bg-[#C5A030] transition-all shadow-xl flex items-center gap-2 group"
              >
                Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+919951335542"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone size={20} /> Call Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1F2937] p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 text-center group hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl font-bold text-[#D4AF37] group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-slate-500 dark:text-gray-400 text-xs uppercase tracking-widest font-bold mt-1">{stat.label}</div>
            </motion.div>
          ))}
          <div className="bg-[#D4AF37] p-6 rounded-3xl shadow-xl border border-[#D4AF37]/20 text-center flex flex-col justify-center text-[#0B090A]">
            <div className="text-sm font-black uppercase tracking-tighter italic">Trusted by 50K+</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Service Details */}
          <div className="lg:w-2/3 space-y-12">
            {children}
            
            {/* Common Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-200 dark:border-white/5">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <ShieldCheck className="text-[#D4AF37]" /> Quality Assured
                </h3>
                <p className="text-slate-600 dark:text-gray-400">
                  Every application is double-checked by our experts to ensure zero errors and maximum success rate.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <Clock className="text-[#D4AF37]" /> Fast Processing
                </h3>
                <p className="text-slate-600 dark:text-gray-400">
                  We use priority channels for all our submissions, ensuring your documents are processed in record time.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              {/* WhatsApp Card */}
              <div className="bg-slate-900 dark:bg-white rounded-[2rem] p-8 text-white dark:text-slate-900 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <MessageCircle size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-bold leading-tight">Need Expert Help?</h3>
                  <p className="text-slate-300 dark:text-slate-600 font-medium">
                    Speak directly with our consultants on WhatsApp for immediate assistance.
                  </p>
                  <a 
                    href={`https://wa.me/919951335542?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle size={20} /> Chat with us
                  </a>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-white dark:bg-[#1F2937] rounded-[2rem] p-8 border border-slate-100 dark:border-white/5 shadow-xl">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Explore More Services</h4>
                <div className="space-y-3">
                  {otherServices.filter(s => s.name !== title).map((service, idx) => (
                    <Link 
                      key={idx}
                      to={service.path}
                      className="flex items-center justify-between group p-4 border border-slate-50 dark:border-white/5 rounded-2xl hover:bg-slate-50 dark:hover:bg-[#0B090A] hover:border-[#D4AF37]/50 transition-all font-semibold text-slate-700 dark:text-gray-300"
                    >
                      {service.name}
                      <ArrowRight size={18} className="text-[#D4AF37] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
