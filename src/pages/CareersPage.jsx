export default function CareersPage() {
  const roles = [
    { title: 'Frontend Engineer', type: 'Remote', level: 'Mid/Senior' },
    { title: 'Backend Engineer', type: 'Remote', level: 'Senior' },
    { title: 'Customer Success Manager', type: 'Remote', level: 'Mid' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Careers</h1>
        <p className="mt-2 text-slate-300">Join our mission to modernize education management worldwide.</p>
        <div className="mt-6 space-y-4">
          {roles.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{r.title}</h3>
                <p className="text-sm text-slate-400">{r.type} • {r.level}</p>
              </div>
              <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white text-sm font-medium hover:from-blue-600 hover:to-indigo-600 transition">Apply</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
