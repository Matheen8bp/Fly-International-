import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { FileText, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

const VisaStamping = () => {
  return (
    <ServicePageLayout
      title="Visa Stamping"
      subtitle="Priority Documentation"
      description="Professional and reliable visa stamping services for Saudi Arabia, Kuwait, and more. We ensure your documentation is 100% compliant for a hassle-free experience."
      heroImage="https://images.unsplash.com/photo-1539281781223-9333a3cc1808?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I need assistance with Visa Stamping services at Fly International."
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Expert Stamping Services</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Visa stamping is a critical process that requires meticulous attention to detail. Our experts have years of experience dealing with various embassies and consulates, ensuring that your application is submitted correctly and processed efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <FileCheck className="text-yellow-500" /> Documents Required
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Original Passport', detail: 'Min 6 months validity' },
                { name: 'Medical Certificate', detail: 'From GAMCA approved labs' },
                { name: 'PCC', detail: 'Police Clearance Certificate' },
                { name: 'Photographs', detail: 'White background, 4x6 cm' },
                { name: 'Visa Copy', detail: 'Original/Copy from employer' }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-[#0B090A] rounded-xl border border-slate-100 dark:border-white/5">
                  <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800 dark:text-gray-200">{doc.name}</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">{doc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-500/10 p-8 rounded-3xl border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-4 flex items-center gap-2">
                <AlertCircle /> Important Note
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                Processing times vary by embassy and visa type. Typically, Saudi and Kuwait stamping takes 5-10 working days. We provide real-time updates on your application status.
              </p>
            </div>
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">Supported Countries</h3>
              <div className="flex flex-wrap gap-2">
                {['Saudi Arabia', 'Kuwait', 'UAE', 'Oman', 'Qatar', 'Bahrain'].map((country, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default VisaStamping;
