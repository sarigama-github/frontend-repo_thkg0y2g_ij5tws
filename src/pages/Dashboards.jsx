import { useState } from 'react'

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-5">
      <h3 className="text-white font-semibold">{title}</h3>
      <div className="mt-3 text-sm text-slate-300">{children}</div>
    </div>
  );
}

export default function Dashboards() {
  const [active, setActive] = useState('admin')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Dashboards</h1>
        <p className="mt-2 text-slate-300 max-w-2xl">Switch between role-based dashboards to preview the experience for each stakeholder.</p>

        <div className="mt-6 inline-flex overflow-hidden rounded-lg border border-white/10">
          {['admin','teacher','student','parent'].map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`${active===key?'bg-blue-500/20 text-white':'text-slate-300 hover:text-white'} px-4 py-2 text-sm transition`}
            >
              {key.charAt(0).toUpperCase()+key.slice(1)}
            </button>
          ))}
        </div>

        {active === 'admin' && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card title="KPIs">
              Students: 1,240 • Attendance: 95.4% • Avg Grade: 82%
            </Card>
            <Card title="Recent Activity">
              New enrollment: 24 • Payments processed: 58 • Tickets resolved: 12
            </Card>
            <Card title="Financials">
              MRR: $24,500 • Outstanding: $3,200 • On-time payments: 92%
            </Card>
          </div>
        )}

        {active === 'teacher' && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card title="Today">
              3 classes • 86 students • 2 assignments due
            </Card>
            <Card title="Grading Queue">
              Math Quiz A • History Essay Drafts • Science Lab Reports
            </Card>
            <Card title="Alerts">
              4 attendance anomalies • 6 overdue submissions
            </Card>
          </div>
        )}

        {active === 'student' && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card title="Schedule">
              Algebra • Literature • Physics • Computer Science
            </Card>
            <Card title="Progress">
              GPA: 3.5 • Attendance: 97% • Credits: 18/24
            </Card>
            <Card title="To-Do">
              Submit Physics lab • Review vocab list • Pay lab fee
            </Card>
          </div>
        )}

        {active === 'parent' && (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card title="Children">
              Ava (Grade 8) • Liam (Grade 10)
            </Card>
            <Card title="Updates">
              Attendance normal • 2 assignments graded this week
            </Card>
            <Card title="Billing">
              Balance: $120 • Next due: Nov 30 • Autopay: On
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
