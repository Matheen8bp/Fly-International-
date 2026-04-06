import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, CheckCircle2, Clock, HelpCircle, Download, ArrowRight, ShieldCheck, Plane, Train, BookOpen, CheckSquare, MessageCircle, Phone } from 'lucide-react';

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  const steps = [
    { title: 'Submit Inquiry', desc: 'Fill out our online form or contact us directly with your details.' },
    { title: 'Document Review', desc: 'Our experts verify your documents to ensure 100% compliance.' },
    { title: 'Application Process', desc: 'We handle the submission to the respective authorities.' },
    { title: 'Service Fulfilled', desc: 'Receive your approved visa, ticket, or documents.' },
  ];

  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-[#0B090A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 border border-slate-200 dark:border-[#1F2937] shadow-xl">
          <div className="absolute inset-0 bg-blue-50/20 dark:bg-[#1F2937]/10" />
          <div className="relative z-10 lg:w-3/5 space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 border border-yellow-400/30 text-[#D4AF37] rounded-full text-sm font-bold tracking-wider uppercase">
              Comprehensive Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Expert Solutions for <span className="text-[#D4AF37]">Global Travel</span>
            </h1>
            <p className="text-slate-600 dark:text-gray-300 text-lg max-w-xl">
              From fast visa stamping to cheap international flights and expert study abroad counseling, we handle everything with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919951335542" className="px-8 py-4 bg-[#D4AF37] text-white dark:text-[#0B090A] rounded-full font-bold hover:bg-[#C5A030] transition-all shadow-xl">
                Contact Us Now
              </a>
            </div>
          </div>
          <div className="relative z-10 lg:w-2/5">
            <div className="bg-white dark:bg-[#1F2937]/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-white">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-bold text-xl">99.8% Success Rate</div>
                  <div className="text-slate-500 dark:text-white/60 text-xs uppercase tracking-widest font-semibold">Across All Services</div>
                </div>
              </div>
              <div className="space-y-4">
                {['Air Ticketing', 'Visa Stamping', 'Visit Visa', 'Study Abroad', 'Certificate Attestation'].map((v, i) => (
                  <div key={i} className="flex items-center justify-between text-slate-700 dark:text-white/80 text-sm py-2 border-b border-slate-100 dark:border-white/10 font-medium">
                    <span>{v}</span>
                    <CheckCircle2 size={16} className="text-[#D4AF37]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Air Ticketing */}
        <section id="air-ticketing" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" alt="Flight" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <Plane size={32} className="text-blue-400 transform rotate-45 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">International Flight Tickets</h3>
                <p className="text-blue-300 font-semibold text-sm">Cheapest & Lowest Fares</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Air Ticketing</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">We provide highly competitive and discounted airfares for all major airlines from Hyderabad to the Middle East and worldwide.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> Saudi Arabia</div>
                  <p className="text-sm text-slate-500 pl-6 border-l-2 ml-2">Jeddah, Riyadh, Dammam</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> UAE</div>
                  <p className="text-sm text-slate-500 pl-6 border-l-2 ml-2">Dubai, Abu Dhabi, Sharjah</p>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> Kuwait & Oman</div>
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> Qatar & Bahrain</div>
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> Australia & UK</div>
                <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white"><CheckSquare size={16} className="text-green-600" /> Domestic Flights (India)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Stamping */}
        <section id="visa-stamping" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1539281781223-9333a3cc1808?auto=format&fit=crop&q=80&w=800" alt="Visa Stamping" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <FileText size={32} className="text-yellow-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Visa Stamping Services</h3>
                <p className="text-yellow-300 font-semibold text-sm">Kuwait, Saudi, UAE & More</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Visa Stamping</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Expert processing and quick turnaround for commercial, family, and employment visa stamping.</p>
              <div className="bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] p-6 rounded-2xl">
                 <h4 className="font-bold text-slate-900 dark:text-white mb-4">Common Documents Required:</h4>
                 <div className="grid grid-cols-2 gap-3">
                   {['Valid Passport', 'Medical Report', 'PCC', '4 Photos', 'Employment Letter'].map((doc, idx) => (
                     <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
                       <CheckCircle2 size={16} className="text-[#D4AF37]" /> {doc}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Visa */}
        <section id="visit-visa" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" alt="Visit Visa" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <CheckCircle2 size={32} className="text-purple-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Visit Visas</h3>
                <p className="text-purple-300 font-semibold text-sm">Tourist & Family Visas</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Visit Visas</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Planning a vacation or visiting family? We ensure quick and hassle-free processing for your visit visas to the Middle East and worldwide.</p>
              <ul className="space-y-3">
                {['Dubai, Qatar, Oman & More', 'Short-term and Long-term Tourist Visas', 'Family Visit Visas', 'Quick Processing Times'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-gray-300 font-medium">
                     <CheckSquare size={18} className="text-purple-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Train Ticket Booking */}
        <section id="train-ticket-booking" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800" alt="Train Tickets" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <Train size={32} className="text-orange-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Train Ticket Booking</h3>
                <p className="text-orange-300 font-semibold text-sm">Fast Tatkal & Standard Booking</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Train Ticket Booking</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Travel comfortably across India. We offer reliable and fast train ticket reservations, including last-minute tatkal bookings.</p>
              <ul className="space-y-3">
                {['Fast Tatkal Booking', 'Standard & AC Class Options', 'All India Routes', 'PNR Status Tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-gray-300 font-medium">
                     <CheckCircle2 size={18} className="text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certificate Attestation */}
        <section id="certificate-attestation" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" alt="Attestation" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <FileText size={32} className="text-green-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Certificate Attestations</h3>
                <p className="text-green-300 font-semibold text-sm">All Government Certificates</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Certificate Attestation</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Reliable and verifiable attestation services for all your personal, educational, and commercial documents.</p>
              <div className="grid grid-cols-2 gap-4">
                {['Marriage Certificates', 'Degree Certificates', 'Birth Certificates', 'Death Certificates', 'Medical Certificates', 'Incorporation Documents'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-white">
                    <CheckSquare size={16} className="text-green-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Study Abroad */}
        <section id="study-abroad" className="scroll-mt-32 pb-12">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2 relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" alt="University" className="w-full h-[400px] object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex flex-col justify-end p-8">
                <BookOpen size={32} className="text-teal-400 mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">Study Abroad</h3>
                <p className="text-teal-300 font-semibold text-sm">Expert Student Counseling</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Study Abroad</h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg">Secure your future with top international universities. We guide students through applications, visas, and counseling.</p>
              <ul className="space-y-3">
                {['Top Universities Admission', 'Student Visa Processing', 'Career Counseling', 'Scholarship Assistance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-gray-300 font-medium">
                     <CheckCircle2 size={18} className="text-teal-600" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                 <a href="https://wa.me/919951335542" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-lg">
                   <Phone size={20} /> Get Free Consultation
                 </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Services;
