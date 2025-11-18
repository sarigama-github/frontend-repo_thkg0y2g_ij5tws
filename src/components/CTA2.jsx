export default function CTA2() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 sm:p-12 text-center backdrop-blur">
          <h3 className="text-3xl font-bold text-white">Ready to Transform Your School?</h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Join hundreds of schools already experiencing the EduSync difference. Get started with a free demo today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition">Book Free Demo</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
