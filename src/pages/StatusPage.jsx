export default function StatusPage() {
  const services = [
    { name: 'API', status: 'Operational' },
    { name: 'Database', status: 'Operational' },
    { name: 'Realtime', status: 'Operational' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Status</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-green-400">{s.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
