import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import { PACKAGES, TESTIMONIALS, RESOURCES } from '../constants';
import { Star, Quote, CheckCircle2, ArrowRight, BookOpen, Info, CheckSquare, Plane, FileText, RotateCcw, Phone, MessageCircle } from 'lucide-react';

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
      <section className="bg-slate-50 dark:bg-[#0B090A] py-24 relative overflow-hidden border-y border-[#D4AF37]">
        <div className="absolute inset-0 islamic-pattern opacity-10 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Our Offerings</span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Featured Pilgrimage Packages</h2>
              <p className="text-blue-100/80 max-w-2xl text-lg">
                Choose from our carefully curated selection of Haj and Umrah packages designed to provide spiritual fulfillment and physical comfort.
              </p>
            </div>
            <Link 
              to="/packages" 
              className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-3 hover:text-gold-400 transition-all"
            >
              View All Packages <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 dark:bg-[#0B090A] py-24 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Experience Excellence</span>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Why Choose Fly International?</h2>
                <p className="text-slate-300 text-lg">
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
                    <CheckCircle2 className="text-[#D4AF37] shrink-0" size={24} />
                    <div>
                      <h4 className="text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white font-bold mb-1 text-lg">{item.title}</h4>
                      <p className="text-slate-500 dark:text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-slate-800 dark:border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Pilgrims" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#D4AF37] p-8 rounded-3xl shadow-2xl shadow-black/50 hidden md:block">
                <div className="text-4xl font-bold text-[#D4AF37] mb-1">15+</div>
                <div className="text-[#D4AF37] font-semibold uppercase tracking-wider text-xs">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1F2937] rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.15)] transition-all duration-500 transform-gpu hover:-translate-y-2 border border-slate-200 dark:border-[#1F2937] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Comprehensive Services</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">
              Experience hassle-free travel with our comprehensive range of booking and documentation services. From the skies to the tracks, we've got you covered.
            </p>
            <ul className="space-y-3">
              {['Air Ticketing', 'Visa Stamping', 'Visit Visa', 'Train Ticket Booking', 'Certificate Attestation', 'Study Abroad'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle2 size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
              <a 
                href="https://wa.me/919951335542" 
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] dark:hover:text-white hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto mt-4"
              >Contact Support
            </a>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-[#0B090A] p-6 rounded-3xl border border-slate-200 dark:border-[#1F2937]">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">99%</div>
                <div className="text-slate-600 dark:text-gray-400 text-sm font-medium">Success Rate</div>
              </div>
              <div className="bg-white dark:bg-[#1F2937]/50 p-6 rounded-3xl border border-[#D4AF37]">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">24/7</div>
                <div className="text-[#D4AF37] text-sm font-medium">Customer Support</div>
              </div>
            </div>
            <div className="pt-8">
              <div className="bg-[#D4AF37]/10 p-6 rounded-3xl border border-[#D4AF37]/20 h-full flex flex-col justify-center">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">50k+</div>
                <div className="text-[#D4AF37] text-sm font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global & Premium Services (New Section based on User Request) */}
      <section className="bg-white dark:bg-[#1F2937] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Beyond Pilgrimage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Global Travel & Documentation</h2>
            <p className="text-slate-600 dark:text-gray-400">
              We provide comprehensive global travel solutions, affordable ticketing, and official documentation assistance with a fast, zero-hassle process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Kuwait Visa Stamping */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-[#D4AF37] transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1539281781223-9333a3cc1808?auto=format&fit=crop&q=80&w=800" alt="Kuwait City" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center">
                     <FileText size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Kuwait Visa Stamping</h3>
                  <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#D4AF37]/20">Processing: 10 - 12 Working Days</div>
                  <div className="space-y-3 mb-8">
                    <p className="text-sm text-slate-900 dark:text-white/80 font-semibold mb-2">Documents Required:</p>
                    {['Passport', 'Medical Report', 'PCC', '4 Photos'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                        <CheckSquare size={14} className="text-[#D4AF37] shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://wa.me/919951335542" className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-all">
                  <MessageCircle size={18} /> Apply Now
                </a>
              </div>
            </div>

            {/* Certificate Attestations */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-green-500 transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Attestation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center">
                     <CheckCircle2 size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Certificate Attestations</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-xs mb-4">All government certificates attestation.</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {['Marriage', 'Degree', 'Birth', 'Death', 'Medical', 'Incorporation'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
                        <CheckCircle2 size={12} className="text-green-600 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-green-600 font-semibold mb-2">Reliable • Affordable • Comfortable</p>
                </div>
                <a href="https://wa.me/919951335542" className="w-full py-3 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all mt-auto">
                  <MessageCircle size={18} /> Attest Now
                </a>
              </div>
            </div>

            {/* Hajj & Umrah Groups */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-[#D4AF37] transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1565552643983-c64ef5a2e633?auto=format&fit=crop&q=80&w=800" alt="Kaaba" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center">
                     <Star size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Hajj & Umrah Groups</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <Star size={14} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">5 Star Hotels Near Haram</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                        <Plane size={14} className="transform -rotate-45" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">Direct Flights With Best Prices</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <a href="https://wa.me/919951335542" className="w-full py-3 bg-[#D4AF37] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#C5A030] transition-all">
                    <MessageCircle size={18} /> Book Group
                  </a>
                </div>
              </div>
            </div>

            {/* International Flight Tickets */}
            <div className="lg:col-span-2 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-blue-500 transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-2/5 relative overflow-hidden bg-slate-900 h-48 sm:h-auto">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" alt="Flight" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 z-10">
                  <Plane size={32} className="text-blue-400 transform rotate-45 mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">International Flight Tickets</h3>
                  <p className="text-blue-300 font-semibold text-sm">Cheapest & Lowest Fares</p>
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-white/10 pb-2">From Hyderabad To:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">Saudi Arabia</span></div>
                      <p className="text-xs text-slate-500 dark:text-gray-400 pl-6 border-l-2 border-slate-200 dark:border-white/10 ml-2">Jeddah, Riyadh, Dammam</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">UAE</span></div>
                      <p className="text-xs text-slate-500 dark:text-gray-400 pl-6 border-l-2 border-slate-200 dark:border-white/10 ml-2">Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah</p>
                    </div>
                    <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">Kuwait</span></div>
                    <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">Oman</span></div>
                    <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">Qatar</span></div>
                    <div className="flex items-center gap-2"><CheckSquare size={14} className="text-green-600 shrink-0" /><span className="text-sm font-bold text-slate-700 dark:text-gray-300">Bahrain</span></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="tel:+919951335542" className="flex-1 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors"><Phone size={18} className="inline mr-2"/>Call</a>
                  <a href="https://wa.me/919951335542" className="flex-1 py-3 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-colors"><MessageCircle size={18} className="inline mr-2"/>Chat</a>
                </div>
              </div>
            </div>

            {/* Fly to Australia */}
            <div className="lg:col-span-1 bg-slate-50 dark:bg-[#0B090A] rounded-3xl overflow-hidden shadow-xl relative group min-h-[300px]">
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1523482580665-27663a8a91a9?auto=format&fit=crop&q=80&w=800" alt="Sydney Opera House" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end z-10 w-full border border-transparent group-hover:border-red-500/50 transition-all rounded-[23px]">
                <div className="mb-6">
                  <div className="flex items-start mb-2 gap-3">
                     <h3 className="text-3xl font-bold text-white leading-tight">Fly to<br/><span className="text-yellow-400">Australia</span></h3>
                  </div>
                  <p className="text-white/80 text-sm">Experience the best of Australia with smooth flight bookings.</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://wa.me/919951335542" className="w-full py-3 bg-yellow-500 text-slate-900 text-center rounded-xl font-bold hover:bg-yellow-400 transition-colors">Book Now</a>
                </div>
              </div>
            </div>

            {/* Visit Visa */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-purple-500 transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" alt="Tourist" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                     <CheckCircle2 size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Visit Visas</h3>
                  <div className="space-y-3 mb-8">
                    {['Tourist & Family Visas', 'Dubai, Qatar, Oman & More', 'Quick Processing'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                        <CheckSquare size={14} className="text-purple-600 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://wa.me/919951335542" className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition-all mt-auto">
                  <MessageCircle size={18} /> Apply Now
                </a>
              </div>
            </div>

            {/* Train Ticket Booking */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-orange-500 transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800" alt="Train" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                     <CheckSquare size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Train Ticket Booking</h3>
                  <div className="space-y-3 mb-8">
                    {['Fast Tatkal Booking', 'Standard & AC Class', 'All India Routes'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                        <CheckSquare size={14} className="text-orange-500 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://wa.me/919951335542" className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all mt-auto">
                  <MessageCircle size={18} /> Book Ticket
                </a>
              </div>
            </div>

            {/* Study Abroad */}
            <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-white/10 hover:border-teal-500 transition-all group shadow-xl rounded-3xl overflow-hidden flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-900">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" alt="University" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center">
                   <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                     <BookOpen size={20} />
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Study Abroad</h3>
                  <div className="space-y-3 mb-8">
                    {['Top Universities Admission', 'Student Visa Processing', 'Career Counseling'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                        <CheckCircle2 size={14} className="text-teal-600 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://wa.me/919951335542" className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all mt-auto">
                  <MessageCircle size={18} /> Get Consultation
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="bg-slate-50 dark:bg-[#0B090A] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Pilgrim Education & Resources</h2>
            <p className="text-slate-600 dark:text-gray-400">
              Prepare yourself spiritually and practically with our comprehensive guides and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESOURCES.map((resource) => {
              const Icon = iconMap[resource.icon];
              return (
                <motion.div
                  key={resource.id}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl shadow-2xl shadow-black/50 hover:shadow-2xl transition-all duration-300 transform-gpu border border-slate-200 dark:border-[#1F2937] group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1F2937]/50 text-[#D4AF37] flex items-center justify-center mb-6 group-hover:bg-slate-50 dark:bg-[#0B090A] group-hover:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-3">{resource.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <Link to="/resources" className="text-[#D4AF37] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
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
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">What Our Pilgrims Say</h2>
          <div className="flex justify-center gap-1 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <motion.div 
              key={t.id} 
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-[#1F2937] p-8 rounded-[2rem] shadow-2xl shadow-black/50 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-300 transform-gpu border border-slate-200 dark:border-[#1F2937] relative"
            >
              <Quote className="absolute top-8 right-8 text-blue-50" size={60} />
              <div className="relative z-10 space-y-6">
                <p className="text-slate-600 dark:text-gray-400 text-lg italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-slate-600 dark:text-gray-400 text-sm">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-[0_30px_60px_rgba(6,_78,_59,_0.3)] transform-gpu hover:scale-[1.01] transition-transform duration-500">
          <div className="absolute inset-0 islamic-pattern opacity-10" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Ready to Start Your Sacred Journey?</h2>
            <p className="text-blue-100/70 text-lg">
              Contact our experts today for a personalized consultation and let us help you plan the pilgrimage of a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link 
                to="/contact" 
                className="px-10 py-4 bg-[#D4AF37] text-white dark:text-[#0B090A] rounded-full font-bold text-lg hover:bg-[#D4AF37] transition-all shadow-2xl shadow-black/50 shadow-2xl shadow-black/50-400/20"
              >
                Get a Free Quote
              </Link>
              <a 
                href="https://wa.me/919951335542" 
                className="px-10 py-4 bg-white dark:bg-[#1F2937]/10 backdrop-blur-md border border-slate-800 dark:border-white/10 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white rounded-full font-bold text-lg hover:bg-white dark:bg-[#1F2937]/20 transition-all flex items-center gap-2"
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
