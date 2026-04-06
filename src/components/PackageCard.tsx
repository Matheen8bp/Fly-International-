import React, { useState } from 'react';
import { Star, MapPin, Clock, Hotel, Plane, ChevronRight, X, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Package } from '../types';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    const message = `Assalamu Alaikum! I would like to book the *${pkg.title}* (${pkg.duration}) priced at *₹${pkg.price.toLocaleString('en-IN')}*. Please provide me with the next steps.`;
    window.open(`https://wa.me/919951335542?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white dark:bg-[#1F2937] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-200 dark:border-[#1F2937] group transition-all duration-300 transform-gpu flex flex-col"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-slate-50 dark:bg-[#0B090A] text-slate-900 border border-slate-200 dark:border-white/10 dark:text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {pkg.type}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < pkg.rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4 flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors leading-tight">
              {pkg.title}
            </h3>
            <div className="text-right shrink-0 ml-2">
              <span className="text-sm text-slate-600 dark:text-gray-400 line-through block">₹ {(pkg.price + 15000).toLocaleString('en-IN')}</span>
              <span className="text-2xl font-bold text-[#D4AF37] block">₹ {pkg.price.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <Clock size={16} className="text-[#D4AF37]" />
              {pkg.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <Hotel size={16} className="text-[#D4AF37]" />
              {pkg.hotelMakkah.split('(')[0]}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <Plane size={16} className="text-[#D4AF37]" />
              Flights Incl.
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <MapPin size={16} className="text-[#D4AF37]" />
              Ziyarat
            </div>
          </div>

          <div className="space-y-2 flex-1">
            {pkg.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-2 mt-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 text-center py-3 rounded-xl border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-[#D4AF37]/10 transition-colors text-sm"
            >
              View Details
            </button>
            <button 
              onClick={handleBookNow}
              className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-xl text-sm flex items-center justify-center gap-1"
            >
              Book Now
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Package Detail Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#1F2937] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 shrink-0">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                    {pkg.type} Package
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">{pkg.title}</h2>
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < pkg.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <p className="text-slate-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Total Pricing</p>
                    <p className="text-4xl font-bold text-[#D4AF37]">₹ {pkg.price.toLocaleString('en-IN')}</p>
                  </div>
                  <button 
                    onClick={handleBookNow}
                    className="px-6 py-3 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#C5A030] transition-colors flex items-center gap-2 shadow-lg hover:scale-105 transform duration-200"
                  >
                    <Phone size={18} /> Book Package
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">About This Package</h4>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      {pkg.description} Relax and let us handle all the logistics for your holy journey. We guarantee comfort and spiritual peace of mind throughout your stay.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-[#0B090A] p-5 rounded-2xl border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white font-bold">
                        <Hotel className="text-[#D4AF37]" size={20} /> Accommodation
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-500">Makkah Hotel</p>
                          <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">{pkg.hotelMakkah}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Madinah Hotel</p>
                          <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">{pkg.hotelMadinah}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-[#0B090A] p-5 rounded-2xl border border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-slate-900 dark:text-white font-bold">
                        <Clock className="text-[#D4AF37]" size={20} /> Quick Info
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-slate-500">Duration</p>
                          <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">{pkg.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Transport</p>
                          <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">Included Full Local Transport</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                     <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">What's Included</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {pkg.features.map((feature, i) => (
                         <div key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-gray-300">
                           <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                           {feature}
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PackageCard;
