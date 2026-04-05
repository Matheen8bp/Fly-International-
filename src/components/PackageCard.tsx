import React from 'react';
import { Star, MapPin, Clock, Hotel, Plane, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Package } from '../types';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white dark:bg-[#1F2937] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-slate-200 dark:border-[#1F2937] group transition-all duration-300 transform-gpu"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {pkg.type}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < pkg.rating ? "currentColor" : "none"} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors">
            {pkg.title}
          </h3>
          <div className="text-right">
            <span className="text-sm text-slate-600 dark:text-gray-400 line-through block">$ {pkg.price + 500}</span>
            <span className="text-2xl font-bold text-[#D4AF37]">$ {pkg.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-50">
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
            Ziyarat Incl.
          </div>
        </div>

        <div className="space-y-2">
          {pkg.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link 
            to={`/packages/${pkg.id}`}
            className="flex-1 text-center py-3 rounded-xl border border-[#D4AF37] text-[#D4AF37] font-semibold hover:bg-white dark:bg-[#1F2937]/50 transition-colors text-sm"
          >
            View Details
          </Link>
          <button className="flex-1 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-900 transition-all shadow-xl text-sm flex items-center justify-center gap-1">
            Book Now
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
