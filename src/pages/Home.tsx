import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import { PACKAGES, TESTIMONIALS, RESOURCES } from '../constants';
import { Star, Quote, CheckCircle2, ArrowRight, BookOpen, Info, CheckSquare } from 'lucide-react';

const Home = () => {
  const featuredPackages = PACKAGES.slice(0, 3);
  const iconMap: Record<string, any> = {
    BookOpen,
    Info,
    CheckSquare
  };

  return (
    <div className="space-y-24 pb-20">
      <Hero />

      {/* Featured Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Featured Pilgrimage Packages</h2>
            <p className="text-slate-600 max-w-2xl">
              Choose from our carefully curated selection of Haj and Umrah packages designed to provide spiritual fulfillment and physical comfort.
            </p>
          </div>
          <Link 
            to="/packages" 
            className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
          >
            View All Packages <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-emerald-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Experience Excellence</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Why Choose Fly International?</h2>
                <p className="text-emerald-100/70 text-lg">
                  With over 15 years of experience, we have mastered the art of managing sacred journeys, ensuring every pilgrim focuses solely on their spiritual connection.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Proximity to Haram', desc: 'Hotels within walking distance to holy sites.' },
                  { title: 'Expert Guidance', desc: 'Accompanied by experienced religious scholars.' },
                  { title: 'Hassle-Free Visa', desc: 'End-to-end visa processing and documentation.' },
                  { title: '24/7 On-Ground Support', desc: 'Dedicated team in Makkah and Madinah.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-gold-500 shrink-0" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-emerald-100/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pilgrims" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold-500 p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-emerald-950 mb-1">15+</div>
                <div className="text-emerald-900 font-semibold uppercase tracking-wider text-xs">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Hub Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">Dedicated Visa Services</h2>
            <p className="text-slate-600 text-lg">
              Navigating visa requirements can be complex. Our dedicated hub provides all the information, checklists, and support you need for a smooth application process.
            </p>
            <ul className="space-y-3">
              {['Haj & Umrah Visa Assistance', 'Document Verification', 'Express Processing', 'Digital Tracking'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              to="/visa" 
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
            >
              Visit Visa Hub
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
                <div className="text-slate-500 text-sm font-medium">Approval Rate</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">3-5</div>
                <div className="text-emerald-600 text-sm font-medium">Working Days</div>
              </div>
            </div>
            <div className="pt-8">
              <div className="bg-gold-50 p-6 rounded-3xl border border-gold-100 h-full flex flex-col justify-center">
                <div className="text-3xl font-bold text-gold-600 mb-2">50k+</div>
                <div className="text-gold-500 text-sm font-medium">Visas Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Pilgrim Education & Resources</h2>
            <p className="text-slate-600">
              Prepare yourself spiritually and practically with our comprehensive guides and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.map((resource) => {
              const Icon = iconMap[resource.icon];
              return (
                <motion.div
                  key={resource.id}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{resource.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <Link to="/resources" className="text-emerald-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">What Our Pilgrims Say</h2>
          <div className="flex justify-center gap-1 text-gold-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 text-emerald-50" size={60} />
              <div className="relative z-10 space-y-6">
                <p className="text-slate-600 text-lg italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-slate-500 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Ready to Start Your Sacred Journey?</h2>
            <p className="text-emerald-100/70 text-lg">
              Contact our experts today for a personalized consultation and let us help you plan the pilgrimage of a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-gold-500 text-emerald-950 rounded-full font-bold text-lg hover:bg-gold-600 transition-all shadow-xl shadow-gold-500/20"
              >
                Get a Free Quote
              </Link>
              <a 
                href="https://wa.me/1234567890" 
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
