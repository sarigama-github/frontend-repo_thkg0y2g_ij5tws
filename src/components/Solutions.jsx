export default function Solutions() {
  return (
    <section id="solutions" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Solutions for Everyone</h2>
          <p className="mt-2 text-slate-300">Tailored solutions designed for each stakeholder group</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Stakeholder
            title="School Administrators"
            bullets={[
              'Automate administrative tasks and improve team efficiency',
              'Track student performance and generate data-driven insights',
              'Streamline financial reporting and operations',
            ]}
          />
          <Stakeholder
            title="Teachers"
            bullets={[
              'Easy grade entry, attendance tracking, and assessment management',
              'Analytics to understand student progress and provide actionable feedback',
              'Reduce administrative burden and focus on teaching',
            ]}
          />
          <Stakeholder
            title="Students"
            bullets={[
              'Track academic performance and receive timely feedback',
              'Access learning resources and course materials anytime, anywhere',
              'Get prepared for a modern, technology-driven learning environment',
            ]}
          />
          <Stakeholder
            title="Parents & Guardians"
            bullets={[
              "Clear visibility of child's academic progress and attendance",
              'Real-time updates on school fees and payment status',
              'Convenient communication tools with teachers and administrators',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Stakeholder({ title, bullets }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i} className="leading-relaxed">{b}</li>
        ))}
      </ul>
    </div>
  );
}
