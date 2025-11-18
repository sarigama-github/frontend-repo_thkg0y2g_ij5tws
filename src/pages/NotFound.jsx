export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 p-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white">404</h1>
        <p className="mt-2 text-slate-300">The page you were looking for could not be found.</p>
        <a href="/" className="mt-6 inline-flex rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition">Go Home</a>
      </div>
    </div>
  );
}
