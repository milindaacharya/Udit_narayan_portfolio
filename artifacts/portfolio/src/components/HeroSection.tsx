import { useEffect, useState, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail, ChevronDown, Database, BarChart3, FileSpreadsheet } from "lucide-react";

const roles = [
  "Data Analyst",
  "Freelancer",
  "MIS Expert",
  "Power BI Developer",
  "Business Intelligence Pro",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 40 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

function FloatingCard({ icon: Icon, label, value, delay, className }: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: string;
  className: string;
}) {
  return (
    <div
      className={`glass rounded-xl px-4 py-3 flex items-center gap-3 float-animation ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const role = useTypewriter(roles);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 230, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 210, 230, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none z-[1]" />

      {/* Floating stat cards */}
      <FloatingCard
        icon={BarChart3}
        label="Experience"
        value="4+ Roles"
        delay="0s"
        className="absolute top-32 right-8 md:right-24 z-10 hidden sm:flex"
      />
      <FloatingCard
        icon={Database}
        label="Data Tools"
        value="SQL, Power BI"
        delay="1s"
        className="absolute bottom-40 left-4 md:left-16 z-10 hidden sm:flex"
      />
      <FloatingCard
        icon={FileSpreadsheet}
        label="Specialty"
        value="Advanced Excel"
        delay="2s"
        className="absolute top-48 left-4 md:left-12 z-10 hidden md:flex"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-xs font-mono mb-8 pulse-glow">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for Freelance Projects
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight">
          <span className="text-foreground">Udit</span>
          <br />
          <span className="gradient-text glow-cyan-text">Narayan</span>
        </h1>

        {/* Role typewriter */}
        <div className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground mb-8 h-10 flex items-center justify-center gap-2">
          <span className="text-primary">&gt;</span>
          <span className="text-foreground">{role}</span>
          <span className="typewriter-cursor" />
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming raw data into{" "}
          <span className="text-primary font-medium">clear insights</span>,
          structured reports, and impactful solutions. Detail-oriented, accurate,
          and ready to{" "}
          <span className="text-secondary font-medium">deliver results</span>{" "}
          for your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            data-testid="hero-contact-btn"
            className="px-8 py-4 rounded-full bg-primary text-background font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            Let's Work Together
          </a>
          <a
            href="https://www.linkedin.com/in/udit-narayan-g/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-linkedin-btn"
            className="px-8 py-4 rounded-full gradient-border text-foreground font-semibold text-sm tracking-wide flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:glow-cyan"
          >
            <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
            LinkedIn Profile
          </a>
          <a
            href="mailto:uditnarayan327@gmail.com"
            data-testid="hero-email-btn"
            className="px-8 py-4 rounded-full glass text-muted-foreground text-sm tracking-wide flex items-center gap-2 hover:text-foreground hover:scale-105 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            uditnarayan327@gmail.com
          </a>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {["SQL", "Power BI", "Advanced Excel", "MIS Reporting", "Data Analysis", "Dashboard Creation", "KPI Tracking"].map(
            (tag) => (
              <span key={tag} className="tag-pill" data-testid={`skill-tag-${tag.replace(/\s+/g, '-')}`}>
                {tag}
              </span>
            )
          )}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono tracking-widest">SCROLL</span>
          <div className="w-6 h-10 rounded-full border border-border/50 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-primary scroll-dot" />
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
