import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import PackageCard from '../components/PackageCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

const Packages = () => {
  const [filter, setFilter] = useState<'All' | 'Haj' | 'Umrah'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPackages = PACKAGES.filter(pkg => {
    const matchesType = filter === 'All' || pkg.type === filter;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900">Our Pilgrimage Packages</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our range of Haj and Umrah packages, from budget-friendly economy options to premium luxury experiences.
          </p>
        </motion.div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex bg-slate-100 p-1 rounded-2xl w-full md:w-auto">
            {['All', 'Haj', 'Umrah'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  filter === type 
                    ? 'bg-white text-emerald-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

          <button className="flex items-center gap-2 text-slate-600 font-bold hover:text-emerald-600 transition-colors">
            <SlidersHorizontal size={20} />
            More Filters
          </button>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl">🕋</div>
            <h3 className="text-2xl font-bold text-slate-900">No packages found</h3>
            <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {setFilter('All'); setSearchQuery('');}}
              className="text-emerald-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Trust Badges */}
      <section className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Verified Hotels', icon: '🏨' },
              { label: 'Secure Payments', icon: '🔒' },
              { label: '24/7 Support', icon: '📞' },
              { label: 'Expert Guides', icon: '👳' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl">{item.icon}</div>
                <div className="font-bold text-slate-800">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
