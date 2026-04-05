import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Get in Touch</h1>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions about our packages or visa services? Our team is here to help you 24/7.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: 'Call Us', detail: '+1 (234) 567-890', sub: 'Available 24/7 for support' },
              { icon: Mail, title: 'Email Us', detail: 'info@flyinternational.com', sub: 'We reply within 24 hours' },
              { icon: MapPin, title: 'Visit Us', detail: '123 Spiritual Way, London, UK', sub: 'Mon-Fri: 9am - 6pm' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-200 dark:border-[#1F2937] shadow-2xl shadow-black/50 hover:shadow-2xl shadow-black/50 transition-all flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1F2937]/50 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <div className="text-[#D4AF37] font-bold mb-1">{item.detail}</div>
                  <p className="text-slate-600 dark:text-gray-400 text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-slate-50 dark:bg-[#0B090A] p-8 rounded-3xl text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white space-y-6 shadow-2xl shadow-black/50 shadow-2xl shadow-black/50-100">
              <h4 className="text-xl font-bold">Quick WhatsApp Support</h4>
              <p className="text-blue-50/80 text-sm leading-relaxed">
                Need an immediate answer? Chat with our pilgrimage experts directly on WhatsApp.
              </p>
              <a 
                href="https://wa.me/1234567890"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-[#1F2937] text-[#D4AF37] rounded-xl font-bold hover:bg-white dark:bg-[#1F2937]/50 transition-all"
              >
                <MessageCircle size={20} />
                Start Chat Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-[#1F2937] p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/50 border border-slate-200 dark:border-[#1F2937]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+1 (234) 567-890" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Booking Request</option>
                    <option>Visa Assistance</option>
                    <option>Custom Package</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white/80 uppercase tracking-wider">Your Message</label>
                <textarea className="w-full px-6 py-4 bg-slate-50 dark:bg-[#0B090A] border border-slate-200 dark:border-[#1F2937] rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all h-48" placeholder="How can we help you?"></textarea>
              </div>
              <button className="flex items-center justify-center gap-3 w-full py-5 bg-slate-50 dark:bg-[#0B090A] text-slate-900 dark:text-slate-900 dark:text-white rounded-2xl font-bold text-lg hover:bg-slate-50 dark:bg-[#0B090A] transition-all shadow-2xl shadow-black/50 shadow-2xl shadow-black/50-100">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[500px] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-[#1F2937] shadow-2xl shadow-black/50 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056448!2d-0.12173168423015431!3d51.50332407963445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1648000000000!5m2!1sen!2suk" 
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute top-6 left-6 bg-white dark:bg-[#1F2937] p-6 rounded-3xl shadow-2xl shadow-black/50 border border-slate-200 dark:border-[#1F2937] max-w-xs hidden md:block">
            <h4 className="font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-2">Our London Office</h4>
            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
              Visit us for a face-to-face consultation. We're located in the heart of the city.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
