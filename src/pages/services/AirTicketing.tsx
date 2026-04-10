import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Plane, CheckSquare, Clock, ShieldCheck, Zap } from 'lucide-react';

const AirTicketing = () => {
  return (
    <ServicePageLayout
      title="Air Ticketing"
      subtitle="Fast & Affordable Flights"
      description="Book your next journey with confidence. We provide highly competitive and discounted airfares for all major airlines from Hyderabad to the Middle East and worldwide."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I would like to inquire about Air Ticketing services at Fly International."
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Global Flight Solutions</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            At Fly International, we specialize in finding the best deals for your international and domestic travel. Whether you're traveling for work, leisure, or pilgrimage, our direct connections with major airlines allow us to secure fares that aren't available on standard booking sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Plane className="text-blue-500" /> Popular Destinations
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Saudi Arabia', city: 'Jeddah, Riyadh, Dammam' },
                { name: 'UAE', city: 'Dubai, Abu Dhabi, Sharjah' },
                { name: 'Kuwait & Oman', city: 'Direct & Connecting' },
                { name: 'Qatar & Bahrain', city: 'Daily Flights' },
                { name: 'UK, USA & Australia', city: 'Long-haul Specialists' },
                { name: 'Domestic India', city: 'All Major Hubs' }
              ].map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-slate-50 dark:border-white/5 pb-2">
                  <span className="font-bold text-slate-800 dark:text-gray-200">{item.name}</span>
                  <span className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-widest">{item.city}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-500/10 p-6 rounded-3xl border border-blue-500/20">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Zap size={20} /> Last Minute Deals
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Need to travel urgently? We specialize in finding last-minute Tatkal style air tickets when everything else seems full.
              </p>
            </div>
            <div className="bg-green-500/10 p-6 rounded-3xl border border-green-500/20">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
                <ShieldCheck size={20} /> Group Bookings
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Planning a family trip or a group pilgrimage? Contact us for specialized group discounts and coordinated travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default AirTicketing;
