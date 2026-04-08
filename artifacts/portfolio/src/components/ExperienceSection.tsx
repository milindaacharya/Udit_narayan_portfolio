import { useEffect, useRef } from "react";
import { Briefcase, BarChart2, Database, FileText } from "lucide-react";

const experiences = [
  {
    number: "01",
    title: "Report Analyst",
    company: "ACMT Group of Colleges",
    icon: FileText,
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/10",
    description:
      "Prepared structured reports and managed institutional data for leadership decisions.",
    tags: ["Reporting", "Data Management", "Analytics", "Excel"],
  },
  {
    number: "02",
    title: "Data Mining Executive",
    company: "Deepali Designs & Exhibits Pvt. Ltd.",
    icon: Database,
    color: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/10",
    description:
      "Extracted and processed large datasets to support business intelligence and strategy.",
    tags: ["Data Mining", "Business Intelligence", "SQL", "Strategy"],
  },
  {
    number: "03",
    title: "MIS Executive",
    company: "Radix Computer & Communication Pvt. Ltd.",
    icon: BarChart2,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/10",
    description:
      "Built MIS reports and tracked KPIs to monitor organizational performance.",
    tags: ["MIS Reports", "KPI Tracking", "Power BI", "Operations"],
  },
  {
    number: "04",
    title: "Data Entry Specialist",
    company: "Radical Minds Technologies Pvt. Ltd.",
    icon: Briefcase,
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/10",
    description:
      "Maintained high-accuracy data records and supported database operations.",
    tags: ["Data Entry", "Database", "Accuracy", "Operations"],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = exp.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="section-enter"
      style={{ transitionDelay: `${index * 120}ms` }}
      data-testid={`experience-card-${index}`}
    >
      <div
        className={`card-3d relative glass rounded-2xl p-6 border ${exp.borderColor} hover:shadow-xl ${exp.glowColor} transition-all duration-500 group overflow-hidden`}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
        />

        {/* Number watermark */}
        <span className="absolute top-4 right-5 font-mono text-5xl font-bold text-white/3 select-none">
          {exp.number}
        </span>

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`w-12 h-12 rounded-xl glass flex items-center justify-center border ${exp.borderColor} flex-shrink-0`}
            >
              <Icon className={`w-6 h-6 ${exp.iconColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className={`text-sm ${exp.iconColor} font-medium`}>
                {exp.company}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full glass border border-white/10 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="section-enter text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest mb-3 block">
            // PROFESSIONAL_EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Career Built on{" "}
            <span className="gradient-text">Data & Precision</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each role sharpened my ability to manage data, build reports, and
            support business decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
