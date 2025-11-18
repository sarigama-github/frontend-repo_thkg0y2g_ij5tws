export default function HelpPage() {
  const faqs = [
    { q: 'How do I book a demo?', a: 'Click Book a Demo on the homepage or contact our team via the Help Center.' },
    { q: 'Is my data safe?', a: 'Yes. We apply encryption, access controls, and audit logging across the platform.' },
    { q: 'Can I import existing data?', a: 'We support CSV imports and guided onboarding for most SIS exports.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Help Center</h1>
        <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-800/40">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <h3 className="text-white font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
