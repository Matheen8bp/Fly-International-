import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { Train, Clock, Map, CreditCard, ShieldCheck } from 'lucide-react';

const TrainTicketing = () => {
  return (
    <ServicePageLayout
      title="Train Ticket Service"
      subtitle="Fast Indian Railways Booking"
      description="Enjoy a comfortable journey across India. We offer reliable and fast train ticket reservations, specializing in last-minute Tatkal bookings and regional connections."
      heroImage="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I want to book Train Tickets through Fly International."
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Seamless Rail Travel</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Navigating the Indian Railways booking system can be challenging. Our professional booking service ensures you get the seats you want without the technical stress. From luxury express trains like Rajdhani to standard regional services, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-500/10 p-8 rounded-3xl border border-orange-500/20 shadow-xl">
            <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-6 flex items-center gap-2">
              <Clock /> Priority Booking
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Tatkal Booking', desc: 'Expert handling for high-demand tickets.' },
                { title: 'Premium Classes', desc: 'Secure 1AC, 2AC, and Executive seats.' },
                { title: 'Regional Connections', desc: 'Booking for all major and minor routes.' },
                { title: 'Quick Cancellation', desc: 'Hassle-free refunds as per IRCTC norms.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-[#1F2937] p-4 rounded-xl shadow-sm border border-slate-50 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-white">{item.title}</div>
                  <div className="text-sm text-slate-500 dark:text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Map className="text-orange-500" /> Popular Routes
              </h4>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-gray-400">
                {['Hyderabad - Mumbai', 'Hyderabad - Delhi', 'Chennai - Bangalore', 'Kolkata - Delhi', 'Mumbai - Goa'].map((route, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-[#0B090A] border rounded-full font-medium">
                    {route}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
              <ShieldCheck className="text-green-600" size={32} />
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Authorized Booking</div>
                <div className="text-sm text-slate-600 dark:text-gray-400">Secure IRCTC gateway processing.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default TrainTicketing;
