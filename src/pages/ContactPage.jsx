export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
        <p className="mt-2 text-slate-300">We'd love to hear from you. Send us a message and we'll respond promptly.</p>
        <form className="mt-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full name" />
            <input type="email" className="w-full rounded-lg bg-slate-800/60 border border-white/10 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email address" />
          </div>
          <input className="w-full rounded-lg bg-slate-800/60 border border-white/10 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" />
          <textarea rows="5" className="w-full rounded-lg bg-slate-800/60 border border-white/10 p-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your message"></textarea>
          <button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition w-fit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
