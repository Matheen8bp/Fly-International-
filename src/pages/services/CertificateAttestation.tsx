import React from 'react';
import ServicePageLayout from '../../components/ServicePageLayout';
import { ShieldCheck, FileText, CheckCircle2, Award, Briefcase } from 'lucide-react';

const CertificateAttestation = () => {
  return (
    <ServicePageLayout
      title="Certificate Attestation"
      subtitle="Government Verified"
      description="Reliable and verifiable attestation services for all your personal, educational, and commercial documents including HRD, MEA, and Embassy attestations."
      heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200"
      waMessage="Assalamu Alaikum! I need my certificates attested. Can you help me with the process?"
    >
      <div className="space-y-12">
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Offical Document Authentication</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
            Whether you're moving abroad for a job, higher education, or business, your certificates need to be legally recognized. We handle the entire chain of authentication—from local departments to the Ministry of External Affairs and foreign embassies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="text-green-600" /> Educational Documents
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                'Degree Certificates',
                'Mark Sheets',
                'Diploma Certificates',
                'Transcript Certificates',
                'SSLC/HSC Certificates'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-green-600" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-[#1F2937] p-8 rounded-3xl border border-slate-100 dark:border-white/5 shadow-lg space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="text-blue-600" /> Non-Educational Documents
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {[
                'Marriage Certificates',
                'Birth Certificates',
                'Commercial Invoices',
                'Power of Attorney',
                'Experience Certificates'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-gray-300">
                  <CheckCircle2 size={18} className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={160} />
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold">The Attestation Workflow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Home Dept/HRD', desc: 'Pre-authentication from state level.' },
                { title: 'MEA', desc: 'Ministry of External Affairs validation.' },
                { title: 'Embassy', desc: 'Final seal from the destination country.' }
              ].map((step, i) => (
                <div key={i} className="space-y-2 border-l-2 border-[#D4AF37] pl-4">
                  <div className="font-bold text-[#D4AF37]">{step.title}</div>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default CertificateAttestation;
