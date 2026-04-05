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
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {pkg.type}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center gap-1 text-gold-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < pkg.rating ? "currentColor" : "none"} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {pkg.title}
          </h3>
          <div className="text-right">
            <span className="text-sm text-slate-500 line-through block">$ {pkg.price + 500}</span>
            <span className="text-2xl font-bold text-emerald-600">$ {pkg.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-50">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock size={16} className="text-emerald-500" />
            {pkg.duration}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Hotel size={16} className="text-emerald-500" />
            {pkg.hotelMakkah.split('(')[0]}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Plane size={16} className="text-emerald-500" />
            Flights Incl.
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={16} className="text-emerald-500" />
            Ziyarat Incl.
          </div>
        </div>

        <div className="space-y-2">
          {pkg.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-1 h-1 bg-gold-500 rounded-full" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Link 
            to={`/packages/${pkg.id}`}
            className="flex-1 text-center py-3 rounded-xl border border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors text-sm"
          >
            View Details
          </Link>
          <button className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 text-sm flex items-center justify-center gap-1">
            Book Now
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
