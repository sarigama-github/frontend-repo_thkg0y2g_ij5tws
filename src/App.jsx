import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import WhyChoose from './components/WhyChoose';
import CTA2 from './components/CTA2';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <WhyChoose />
        <CTA />
        <CTA2 />
        <SiteFooter />
      </main>
    </div>
  )
}

function CTA() {
  return (
    <section id="demo" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 sm:p-12 text-center backdrop-blur">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to modernize your school?</h3>
          <p className="mt-3 text-slate-300">Book a live demo and see how EduSync simplifies academics, attendance, communication, and finance in one place.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition">Book a Demo</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5 transition">Explore Platform</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App
