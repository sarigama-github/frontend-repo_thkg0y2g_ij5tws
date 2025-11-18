export default function FeaturesPage() {
  const features = [
    'Academic Analytics',
    'Attendance Management',
    'Communication Hub',
    'Secure Access',
    'Finance Management',
    'Scalable Ecosystem',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Features</h1>
        <p className="mt-2 text-slate-300 max-w-2xl">Explore the modules that power EduSync across academics, communication, and finance.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{f}</h3>
              <p className="mt-2 text-sm text-slate-300">Detailed module overview and screenshots coming soon.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
