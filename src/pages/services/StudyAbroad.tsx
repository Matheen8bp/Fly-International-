import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { BookOpen, GraduationCap, Globe, Users, CheckCircle2 } from 'lucide-react';

const StudyAbroad = () => {
  return (
    <ServicePageLayout
      title="Study Abroad"
      subtitle="Global Education Experts"
      description="Start your international educational journey today. We provide expert counseling, university admissions, and complete student visa assistance for top global destinations."
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I am looking for Study Abroad counseling and admission assistance at Fly International."
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Expert Guidance for Your Future</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Studying abroad is more than just an education—it's a life-changing experience. Our certified counselors help you choose the right course and university that aligns with your career goals and budget. We provide end-to-end support, from application to enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Globe className="text-teal-500" /> Top Destinations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { country: 'United Kingdom', uni: '150+ Universities' },
                { country: 'USA', city: 'STEM Specialists' },
                { country: 'Canada', city: 'PGWP Options' },
                { country: 'Australia', city: 'Top G8 Unis' },
                { country: 'Germany', city: 'Public/Private' },
                { country: 'Malaysia', city: 'Affordable Hub' }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#1F2937] p-4 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm">
                  <div className="font-bold text-slate-800 dark:text-gray-200">{item.country}</div>
                  <div className="text-xs text-teal-600 font-bold uppercase tracking-widest">{item.uni || item.city}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal-500/10 p-8 rounded-3xl border border-teal-500/20 shadow-xl">
            <h3 className="text-xl font-bold text-teal-700 dark:text-teal-400 mb-6 flex items-center gap-2">
              <GraduationCap /> Our Expert Support
            </h3>
            <ul className="space-y-4">
              {[
                'University Selection & Admissions',
                'SOP & LOR Preparation Guidance',
                'Student Visa (Tier 4) Processing',
                'Scholarship & Financial Aid Support',
                'Pre-departure Briefings',
                'Accommodation Assistance'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-teal-600 mt-1 shrink-0" />
                  <span className="text-slate-700 dark:text-gray-300 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1F2937] p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 shadow-xl flex flex-col md:flex-row items-center gap-10">
          <div className="w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-3xl flex items-center justify-center text-teal-600 shrink-0">
            <Users size={48} />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Join Our 500+ Success Stories</h3>
            <p className="text-slate-600 dark:text-gray-400">
              We have helped hundreds of students secure admissions in top-tier universities worldwide. Our success rate for student visas is among the highest in the region.
            </p>
            <a 
              href="https://wa.me/919951335542?text=Assalamu Alaikum! I need Study Abroad counseling."
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all"
            >
              Book a Free Counseling Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default StudyAbroad;
