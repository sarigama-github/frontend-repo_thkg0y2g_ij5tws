import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30 ring-1 ring-white/20 grid place-items-center text-white font-bold">
            E
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">EduSync</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#stats" className="text-slate-300 hover:text-white transition">Why EduSync</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition">Explore Platform</button>
          <button className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition">Book a Demo</button>
          <button className="md:hidden text-white/80 p-2"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  );
}
