import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MessageCircle, FileText, BookOpen, Info, CheckSquare } from 'lucide-react';

interface ResourcePageLayoutProps {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  children: React.ReactNode;
}

const ResourcePageLayout: React.FC<ResourcePageLayoutProps> = ({
  title,
  category,
  description,
  heroImage,
  children
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const otherResources = [
    { name: 'Hajj Guide', id: 'haj-guide', path: '/resources/haj-guide', icon: <BookOpen size={18} /> },
    { name: 'Umrah Rituals', id: 'umrah-rituals', path: '/resources/umrah-rituals', icon: <Info size={18} /> },
    { name: 'Packing Checklist', id: 'packing-list', path: '/resources/packing-list', icon: <CheckSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B090A] pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B090A] via-[#0B090A]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <Link to="/resources" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all mb-4">
              <ArrowLeft size={16} /> Back to Resources
            </Link>
            <span className="block text-[#D4AF37] font-bold text-sm uppercase tracking-[0.3em]">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight guide-title">
              {title}
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-[#1F2937] rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100 dark:border-white/5">
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Quick Actions */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <FileText size={120} />
               </div>
               <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-bold leading-tight guide-title">Ready for your journey?</h3>
                  <p className="text-slate-400 text-sm">
                    Contact our experts for personalized guidance and hassle-free package bookings.
                  </p>
                  <a 
                    href="https://wa.me/919951335542"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#D4AF37] text-[#0B090A] rounded-2xl font-bold hover:scale-[1.02] transition-all shadow-lg"
                  >
                    <MessageCircle size={20} /> Chat with Expert
                  </a>
               </div>
            </div>

            {/* Navigation Sidebar */}
            <div className="bg-white dark:bg-[#1F2937] rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/5 shadow-xl">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 guide-title">Further Reading</h4>
              <div className="space-y-3">
                {otherResources.map((res, idx) => (
                  <Link 
                    key={idx}
                    to={res.path}
                    className={`flex items-center justify-between group p-4 border rounded-2xl transition-all font-semibold ${
                      title === res.name 
                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-[#D4AF37]' 
                        : 'border-slate-50 dark:border-white/5 text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-[#0B090A] hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                       {res.icon}
                       {res.name}
                    </div>
                    <ArrowRight size={18} className={`transition-all ${title === res.name ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcePageLayout;
