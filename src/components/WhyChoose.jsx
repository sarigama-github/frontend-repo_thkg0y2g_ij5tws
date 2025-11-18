export default function WhyChoose() {
  const reasons = [
    {
      title: 'Innovation',
      description:
        'Ahead of its time, bringing cutting-edge approaches to traditional educational management.',
    },
    {
      title: 'Efficiency',
      description:
        'Streamlines workflows, reduces administrative burden, and saves time for all stakeholders.',
    },
    {
      title: 'Transparency',
      description:
        'Provides clear insights to parents, teachers, and administrators at all times.',
    },
  ];

  return (
    <section id="why" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Schools Choose EduSync</h2>
          <p className="mt-2 text-slate-300">Transform your school operations with proven results</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/60 transition"
            >
              <h3 className="text-white font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
