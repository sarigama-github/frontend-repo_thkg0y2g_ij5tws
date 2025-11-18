export default function BlogPage() {
  const posts = [
    { title: 'How Analytics Improve Student Outcomes', date: 'Oct 03, 2025' },
    { title: 'Building a Connected School Community', date: 'Sep 14, 2025' },
    { title: 'Security Best Practices for K-12', date: 'Aug 30, 2025' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Blog</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {posts.map((p, i) => (
            <article key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{p.date}</p>
              <p className="mt-2 text-sm text-slate-300">Coming soon: full articles and insights from the EduSync team.</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
