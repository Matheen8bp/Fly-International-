import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Package, BookOpen, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [packages, setPackages] = useState<any[]>([
    { id: 1, title: 'Premium Umrah Package', category: 'Umrah', price: '$2,500', days: '14 Days' },
    { id: 2, title: 'VIP Haj Experience', category: 'Haj', price: '$8,000', days: '21 Days' }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  
  // Temporary form state
  const [newPackage, setNewPackage] = useState({ title: '', category: 'Umrah', price: '', days: '' });

  const handleAddPackage = (e: React.FormEvent) => {
    e.preventDefault();
    setPackages([...packages, { id: packages.length + 1, ...newPackage }]);
    setIsAdding(false);
    setNewPackage({ title: '', category: 'Umrah', price: '', days: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-[#0B090A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8 border-b border-slate-200 dark:border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-sans">Admin Dashboard</h1>
            <p className="text-slate-500 mt-2">Manage your Packages and Bookings</p>
          </div>
          {activeTab === 'packages' && !isAdding && (
            <button 
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-[#C5A030] transition-colors"
            >
              <Plus size={20} />
              Add New Package
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-64 space-y-2">
            <button 
              onClick={() => setActiveTab('packages')}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === 'packages' 
                  ? 'bg-white dark:bg-[#1F2937] shadow-xl text-[#D4AF37] border border-slate-200 dark:border-white/10' 
                  : 'text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <Package size={20} />
              Packages
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === 'bookings' 
                  ? 'bg-white dark:bg-[#1F2937] shadow-xl text-[#D4AF37] border border-slate-200 dark:border-white/10' 
                  : 'text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <BookOpen size={20} />
              Bookings
            </button>
            <button className="w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-slate-600 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all mt-8">
              <Settings size={20} />
              Settings
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-[#1F2937] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize mb-6 border-b border-slate-100 dark:border-slate-800 pb-4 flex justify-between items-center">
                {isAdding ? 'Create New Package' : `${activeTab} Management`}
                {isAdding && (
                  <button onClick={() => setIsAdding(false)} className="text-sm text-slate-500 hover:text-slate-700">Cancel</button>
                )}
              </h2>
              
              {activeTab === 'packages' ? (
                isAdding ? (
                  <form onSubmit={handleAddPackage} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-white/80">Package Title</label>
                        <input type="text" required value={newPackage.title} onChange={e => setNewPackage({...newPackage, title: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1F2937] bg-slate-50 dark:bg-[#0B090A] dark:text-white" placeholder="e.g. Deluxe Ramadan Umrah" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-white/80">Category</label>
                        <select value={newPackage.category} onChange={e => setNewPackage({...newPackage, category: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1F2937] bg-slate-50 dark:bg-[#0B090A] dark:text-white">
                          <option>Umrah</option>
                          <option>Haj</option>
                          <option>Ziyarat</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-white/80">Duration (Days)</label>
                        <input type="text" required value={newPackage.days} onChange={e => setNewPackage({...newPackage, days: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1F2937] bg-slate-50 dark:bg-[#0B090A] dark:text-white" placeholder="e.g. 14 Days" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-900 dark:text-white/80">Price</label>
                        <input type="text" required value={newPackage.price} onChange={e => setNewPackage({...newPackage, price: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1F2937] bg-slate-50 dark:bg-[#0B090A] dark:text-white" placeholder="e.g. $2,500" />
                      </div>
                    </div>
                    <button type="submit" className="w-full py-4 bg-[#D4AF37] text-white rounded-xl font-bold hover:bg-[#C5A030] transition-colors">
                      Save Package
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {packages.map(pkg => (
                      <div key={pkg.id} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0B090A]">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">{pkg.title}</h3>
                          <p className="text-sm text-slate-500">{pkg.category} • {pkg.days}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#D4AF37]">{pkg.price}</p>
                          <button className="text-sm text-blue-500 hover:underline">Edit</button>
                        </div>
                      </div>
                    ))}
                    {packages.length === 0 && <p className="text-slate-500 text-center py-8">No packages created yet.</p>}
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-100 dark:bg-[#0B090A] rounded-full flex items-center justify-center text-[#D4AF37]">
                    <BookOpen size={32} />
                  </div>
                  <p className="text-slate-500 font-medium">Booking database is paused for now.</p>
                </div>
              )}

            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;
