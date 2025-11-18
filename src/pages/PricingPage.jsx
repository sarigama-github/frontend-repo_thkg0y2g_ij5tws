export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '$99/mo', features: ['Up to 200 students', 'Core modules', 'Email support'] },
    { name: 'Growth', price: '$249/mo', features: ['Up to 1000 students', 'All modules', 'Priority support'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited students', 'SSO, SSO', 'Dedicated CSM'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Pricing</h1>
        <p className="mt-2 text-slate-300 max-w-2xl">Choose a plan that scales with your school.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc pl-5">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition">Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
