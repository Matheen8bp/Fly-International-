import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-blue-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold font-sans tracking-tight">
              Fly <span className="text-[#D4AF37]">International</span>
            </Link>
            <p className="text-blue-200/80 leading-relaxed">
              Your trusted partner for sacred journeys. We specialize in providing premium Haj and Umrah services with a focus on spiritual comfort and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#0B090A] flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#0B090A] flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#0B090A] flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/packages" className="hover:text-[#D4AF37] transition-colors">Travel Packages</Link></li>
              <li><Link to="/visa" className="hover:text-[#D4AF37] transition-colors">Visa Services</Link></li>
              <li><Link to="/resources" className="hover:text-[#D4AF37] transition-colors">Pilgrim Resources</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><span className="text-blue-200/80">Haj Pilgrimage</span></li>
              <li><span className="text-blue-200/80">Umrah Packages</span></li>
              <li><span className="text-blue-200/80">Visa Consultation</span></li>
              <li><span className="text-blue-200/80">Hotel Bookings</span></li>
              <li><span className="text-blue-200/80">Group Travel</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold text-sm uppercase tracking-wider">Head Office:</span>
                  <span className="text-blue-200/80">Beside Mandal Office, Pitlam.</span>
                  
                  <span className="text-white font-bold text-sm uppercase tracking-wider mt-2">Branches:</span>
                  <span className="text-blue-200/80 text-sm leading-relaxed">
                    Armoor, Bidar, Bodhan, Hyderabad, Yellareddy, Zaheerabad
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] shrink-0" size={20} />
                <span className="text-blue-200/80">+91 99513 35542</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] shrink-0" size={20} />
                <span className="text-blue-200/80">hrflyinternationalhyd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60">
          <p>© 2026 Fly International. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
