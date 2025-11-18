import { BarChart3, CheckCircle2, Bell, Lock, Wallet, Layers } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Academic Analytics",
    subtitle: "Track performance with precision",
    description:
      "Input and manage grades, track student progress over time, generate detailed reports, and identify trends for early intervention.",
  },
  {
    icon: CheckCircle2,
    title: "Attendance Management",
    subtitle: "Digital attendance made simple",
    description:
      "Record attendance digitally from any device, track engagement, and generate comprehensive reports for parents and administrators.",
  },
  {
    icon: Bell,
    title: "Communication Hub",
    subtitle: "Connect everyone instantly",
    description:
      "Send bulk messages, receive real-time alerts on grades and attendance, and keep all stakeholders informed with seamless notifications.",
  },
  {
    icon: Lock,
    title: "Secure Access",
    subtitle: "Privacy and protection built-in",
    description:
      "Parent and student portals with role-based access, track academic progress, attendance, and fees in a secure environment.",
  },
  {
    icon: Wallet,
    title: "Finance Management",
    subtitle: "Manage fees effortlessly",
    description:
      "Handle student payments, track balances, generate financial reports, and send automated reminders and invoices to parents.",
  },
  {
    icon: Layers,
    title: "Scalable Ecosystem",
    subtitle: "Grow with your needs",
    description:
      "Modular design allows seamless integration of new features, learning resources, and advanced predictive analytics.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powerful Features Built for Success</h2>
          <p className="mt-2 text-slate-300">Comprehensive tools designed to streamline every aspect of educational management</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <FeatureCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, subtitle, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/60 transition relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white grid place-items-center shadow-lg shadow-blue-500/30">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-sm text-blue-300/90">{subtitle}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
