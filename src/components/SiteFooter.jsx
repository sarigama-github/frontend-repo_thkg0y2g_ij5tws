export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 grid place-items-center text-white font-bold">E</div>
              <span className="text-white font-semibold text-lg">EduSync</span>
            </div>
            <p className="mt-4 text-slate-400 max-w-sm">Transforming education management worldwide.</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/security" className="hover:text-white">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/status" className="hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} EduSync. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
