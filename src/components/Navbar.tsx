import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { 
      name: 'Services', 
      isDropdown: true,
      items: [
        { name: 'Air Ticketing', path: '/services/air-ticketing' },
        { name: 'Visa Stamping', path: '/services/visa-stamping' },
        { name: 'Visit Visa', path: '/services/visit-visa' },
        { name: 'Train Ticket Booking', path: '/services/train-ticketing' },
        { name: 'Certificate Attestation', path: '/services/certificate-attestation' },
        { name: 'Study Abroad', path: '/services/study-abroad' },
      ]
    },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass-nav py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link to="/" className="flex items-center space-x-3 group relative">

            {/* Custom SVG composition mimicking the requested FLY logo shape */}
            <div className="relative flex items-end">

              {/* Airplane and Swoosh Trail */}
              <div className="absolute -top-6 -left-2 w-32 h-16 pointer-events-none text-slate-800 dark:text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Swoosh Tail */}
                  <path d="M5 50 Q 40 30 75 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-80" />
                  {/* Airplane Body */}
                  <g transform="translate(65, 12) rotate(15) scale(0.8)">
                    <path d="M29.5 12L21 21H12.5L16 16.5H5L2.5 19H0L1.5 14L0 9H2.5L5 11.5H16L12.5 7H21L29.5 16C30.5 15 30.5 13 29.5 12Z" fill="currentColor" />
                    <path d="M12.5 14L21 9V14H12.5Z" fill="currentColor" />
                  </g>
                </svg>
              </div>

              {/* Text FLY with customized Y attached wing */}
              <div className={cn(
                "flex items-end font-black font-sans tracking-tighter text-4xl leading-none mt-4",
                scrolled ? "text-[#D4AF37]" : "text-slate-900 dark:text-white"
              )}>
                <span>FL</span>
                <div className="relative inline-flex">
                  <span>Y</span>
                  {/* Wing attached to the Y */}
                  <svg className="absolute top-0 -right-6 w-8 h-full text-[#D4AF37] opacity-90 group-hover:scale-110 transition-transform origin-bottom-left" viewBox="0 0 40 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 60 C 15 40 35 30 35 15 C 35 10 25 20 20 25 C 25 15 28 5 25 0 C 20 10 15 22 10 30 C 12 25 15 15 15 10 C 10 18 5 35 0 45 L 5 60 Z" />
                  </svg>
                </div>
              </div>

            </div>

            <div className={cn(
              "flex flex-col ml-6 border-l-2 pl-3 mt-4",
              scrolled ? "border-[#D4AF37]/30" : "border-slate-300 dark:border-white/20"
            )}>
              <span className={cn(
                "text-lg font-black tracking-widest leading-none mb-1",
                scrolled ? "text-[#D4AF37]" : "text-slate-900 dark:text-white"
              )}>
                INTERNATIONAL
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] text-[#D4AF37]">
                TOURS & TRAVELS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="relative group/dropdown py-2">
                  <button className={cn(
                    "text-lg font-bold flex items-center gap-1 transition-colors hover:text-gold-500",
                    scrolled ? "text-slate-900 dark:text-white" : "text-white"
                  )}>
                    {link.name}
                    <svg className="w-4 h-4 ml-0.5 transform group-hover/dropdown:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white dark:bg-[#1F2937] ring-1 ring-slate-900/5 dark:ring-white/10 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 transform origin-top group-hover/dropdown:scale-100 scale-95 border border-slate-100 dark:border-[#1F2937]">
                    <div className="py-2">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-5 py-2.5 text-base font-semibold text-slate-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-[#0B090A] hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-bold transition-colors hover:text-gold-500",
                    location.pathname === link.path
                      ? "text-gold-500"
                      : scrolled ? "text-slate-900 dark:text-white" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a
              href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum Fly International! I have some questions regarding your travel services. Can you help?')}`}
              className="bg-[#D4AF37] text-white dark:text-[#0B090A] px-6 py-2.5 rounded-full text-base font-bold flex items-center gap-2 hover:bg-[#C5A030] dark:hover:bg-[#C5A030] transition-all shadow-xl"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-slate-900 dark:text-white" : "text-white"
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#1F2937] border-b border-slate-200 dark:border-[#1F2937] overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div key={link.name} className="py-2 space-y-2">
                    <div className="px-3 py-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
                      {link.name}
                    </div>
                    <div className="space-y-1">
                      {link.items?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-6 py-4 text-lg font-bold text-slate-800 dark:text-white/90 hover:bg-slate-50 dark:hover:bg-[#0B090A] hover:text-[#D4AF37] rounded-lg transition-colors border-l-2 border-transparent hover:border-[#D4AF37]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-5 text-xl font-bold text-slate-900 dark:text-white/90 hover:bg-slate-50 dark:hover:bg-[#0B090A] hover:text-[#D4AF37] rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+919951335542"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white/80 rounded-lg font-semibold"
                >
                  <Phone size={18} />
                  Call Us
                </a>
                <a
                  href={`https://wa.me/919951335542?text=${encodeURIComponent('Assalamu Alaikum Fly International! I have some questions regarding your travel services. Can you help?')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white rounded-lg font-semibold"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
