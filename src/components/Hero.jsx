export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      {/* Background gradient blob */}
      <div className="absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              The Future of Education Starts Here
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              EduSync empowers schools, teachers, parents, and students with modern, intuitive tools to revolutionize how education is managed, delivered, and experienced.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition">
                Book a Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                Explore Platform
              </a>
            </div>
            <div id="stats" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat number="500+" label="Schools Transformed" />
              <Stat number="50K+" label="Active Users" />
              <Stat number="99.9%" label="Uptime" />
              <Stat number="24/7" label="Support" />
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur p-4 shadow-2xl">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 grid place-items-center text-slate-300">
                Platform preview coming soon
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 opacity-30 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/40 p-4 text-center">
      <div className="text-2xl font-bold text-white">{number}</div>
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
    </div>
  );
}
