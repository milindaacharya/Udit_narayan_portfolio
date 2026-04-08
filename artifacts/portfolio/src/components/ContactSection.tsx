import { useEffect, useRef } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { SiInstagram, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const contacts = [
  {
    icon: SiGmail,
    label: "Email",
    value: "uditnarayan327@gmail.com",
    href: "mailto:uditnarayan327@gmail.com",
    color: "from-red-500/20 to-rose-500/5",
    accent: "text-red-400",
    border: "border-red-500/20",
    glow: "hover:shadow-red-500/20",
    testId: "contact-email",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "udit-narayan-g",
    href: "https://www.linkedin.com/in/udit-narayan-g/",
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    glow: "hover:shadow-blue-500/20",
    testId: "contact-linkedin",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    value: "@thebrieftech",
    href: "https://instagram.com/thebrieftech",
    color: "from-pink-500/20 to-purple-500/5",
    accent: "text-pink-400",
    border: "border-pink-500/20",
    glow: "hover:shadow-pink-500/20",
    testId: "contact-instagram",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 9997814136",
    href: "tel:+919997814136",
    color: "from-emerald-500/20 to-cyan-500/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/20",
    testId: "contact-phone",
  },
];

export default function ContactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    if (cardsRef.current) obs.observe(cardsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div ref={titleRef} className="section-enter text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest mb-3 block">
            // LET'S_CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Available for freelance projects, data-driven assignments, and business
            collaborations. Reach out — let's connect.
          </p>
        </div>

        {/* Contact cards grid */}
        <div
          ref={cardsRef}
          className="section-enter grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
        >
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-testid={c.testId}
                className={`contact-card relative glass rounded-2xl p-6 border ${c.border} flex items-center gap-5 group hover:shadow-xl ${c.glow} overflow-hidden`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`relative w-14 h-14 rounded-2xl glass border ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.accent}`} />
                </div>

                <div className="relative flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase mb-1">
                    {c.label}
                  </p>
                  <p className={`text-sm font-semibold ${c.accent} truncate`}>
                    {c.value}
                  </p>
                </div>

                <ArrowRight
                  className={`relative w-5 h-5 ${c.accent} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0`}
                />
              </a>
            );
          })}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/udit-narayan-g/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0A66C2] text-white font-semibold text-sm tracking-wide hover:bg-[#0854a0] hover:shadow-lg hover:shadow-[#0A66C2]/30 hover:scale-105 transition-all duration-300"
          >
            <FaLinkedinIn className="w-5 h-5" />
            View LinkedIn Profile
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
