export default function SecurityPage() {
  const sections = [
    {
      title: 'Data Protection',
      text: 'We use industry-standard encryption in transit and at rest with strict access controls.'
    },
    {
      title: 'Compliance',
      text: 'Built with FERPA- and GDPR-aligned practices and regular third-party audits.'
    },
    {
      title: 'Reliability',
      text: '99.9% uptime with automated backups and disaster recovery procedures.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Security</h1>
        <p className="mt-2 text-slate-300 max-w-2xl">Keeping your community's data safe is our top priority.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {sections.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
