import { useEffect, useRef, useState } from "react";
import { GraduationCap, Layers } from "lucide-react";

const skills = [
  { name: "Advanced Excel", level: 95, color: "from-emerald-400 to-cyan-400" },
  { name: "SQL", level: 88, color: "from-cyan-400 to-blue-400" },
  { name: "Data Analysis", level: 90, color: "from-blue-400 to-violet-400" },
  { name: "Power BI", level: 82, color: "from-violet-400 to-purple-400" },
  { name: "MIS Reporting", level: 92, color: "from-purple-400 to-pink-400" },
  { name: "Dashboard Creation", level: 80, color: "from-pink-400 to-rose-400" },
  { name: "Data Cleaning", level: 87, color: "from-orange-400 to-amber-400" },
  { name: "KPI Tracking", level: 85, color: "from-amber-400 to-yellow-400" },
];

const tools = [
  { name: "SQL", icon: "🗄️" },
  { name: "Advanced Excel", icon: "📊" },
  { name: "Power BI", icon: "📈" },
  { name: "Data Analysis", icon: "🔍" },
  { name: "MIS Reporting", icon: "📋" },
  { name: "Dashboard Creation", icon: "🖥️" },
  { name: "Data Cleaning", icon: "🧹" },
  { name: "KPI Tracking", icon: "🎯" },
];

function SkillBar({ skill, animate }: { skill: typeof skills[0]; animate: boolean }) {
  return (
    <div className="group" data-testid={`skill-bar-${skill.name.replace(/\s+/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="section-enter text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest mb-3 block">
            // SKILLS_&_EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tools I Use.{" "}
            <span className="gradient-text">Results I Deliver.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Core technical skills honed across multiple data-driven roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Skills bars */}
          <div ref={sectionRef} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 border border-white/8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Core Technical Skills</h3>
              </div>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} animate={animate} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Education */}
            <div className="glass rounded-2xl p-6 border border-secondary/20 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-foreground">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-base font-semibold gradient-text-alt">B.Tech</p>
                  <p className="text-sm text-foreground/80">Mechanical Engineering</p>
                </div>
                <div className="h-px bg-white/8" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineering foundation with strong analytical and problem-solving
                  skills applied to data-driven roles.
                </p>
              </div>
            </div>

            {/* Tools grid */}
            <div className="glass rounded-2xl p-6 border border-white/8">
              <h3 className="text-base font-bold text-foreground mb-4">Toolkit</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    data-testid={`tool-${tool.name.replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 glass rounded-lg px-3 py-2 border border-white/6 hover:border-primary/30 transition-all duration-300 group cursor-default"
                  >
                    <span className="text-base">{tool.icon}</span>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
