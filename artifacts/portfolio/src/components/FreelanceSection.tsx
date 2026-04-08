import { useEffect, useRef } from "react";
import { BookOpen, TrendingUp, Check } from "lucide-react";

const projects = [
  {
    client: "McLean & Mackenzie Publication",
    icon: BookOpen,
    gradient: "from-blue-500/30 via-cyan-500/10 to-transparent",
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "group-hover:shadow-cyan-500/20",
    summary:
      "Content writing, book formatting, proofreading, and NEP 2020 policy research.",
    deliverables: [
      "Book content development",
      "Research & policy analysis",
      "Graphic & visual content creation",
    ],
  },
  {
    client: "Deepanshi Institute of Education",
    icon: TrendingUp,
    gradient: "from-violet-500/30 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-violet-500/20",
    summary:
      "Online platform support, growth strategy, and revenue generation.",
    deliverables: [
      "Platform growth strategy",
      "Revenue generation support",
      "Online engagement optimization",
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="section-enter"
      style={{ transitionDelay: `${index * 150}ms` }}
      data-testid={`freelance-card-${index}`}
    >
      <div className={`relative glass rounded-2xl border ${project.border} overflow-hidden group hover:shadow-xl ${project.glow} transition-all duration-500`}>
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/2 -translate-y-1/2 translate-x-1/2 blur-2xl" />

        <div className="relative z-10 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl glass border ${project.border} flex items-center justify-center`}>
              <Icon className={`w-7 h-7 ${project.accent}`} />
            </div>
            <div>
              <span className={`text-xs font-mono ${project.accent} tracking-wider uppercase`}>
                Freelance Client
              </span>
              <h3 className="text-xl font-bold text-foreground">{project.client}</h3>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">{project.summary}</p>

          <ul className="space-y-3">
            {project.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full glass border ${project.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Check className={`w-3 h-3 ${project.accent}`} />
                </div>
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function FreelanceSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="freelance" className="relative py-24 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div ref={titleRef} className="section-enter text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest mb-3 block">
            // FREELANCING_&_PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Freelance Work That{" "}
            <span className="gradient-text">Delivers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From content development to revenue strategy, supporting clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.client} project={project} index={i} />
          ))}
        </div>

        {/* Open for work banner */}
        <div className="mt-12 section-enter">
          <div className="relative overflow-hidden rounded-2xl gradient-border p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
            <div className="relative z-10">
              <p className="text-muted-foreground text-sm font-mono mb-2 tracking-widest uppercase">Currently Open To</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {[
                  "Freelance Projects",
                  "Reporting Support",
                  "Content Development",
                  "Business Growth Collaborations",
                  "Data Analysis",
                ].map((item) => (
                  <span key={item} className="tag-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
