import { SiInstagram, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Phone } from "lucide-react";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/6 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="font-mono text-lg font-bold gradient-text">UN.</span>
          <p className="text-xs text-muted-foreground mt-1">
            Data Analyst & Freelancer
          </p>
          <p className="text-xs text-muted-foreground/60 mt-0.5">
            © {year} Udit Narayan. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/udit-narayan-g/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/thebrieftech"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram"
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-pink-400 hover:border-pink-400/30 transition-all duration-300 hover:scale-110"
          >
            <SiInstagram className="w-4 h-4" />
          </a>
          <a
            href="mailto:uditnarayan327@gmail.com"
            data-testid="footer-email"
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-red-400 hover:border-red-400/30 transition-all duration-300 hover:scale-110"
          >
            <SiGmail className="w-4 h-4" />
          </a>
          <a
            href="tel:+919997814136"
            data-testid="footer-phone"
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-emerald-400 hover:border-emerald-400/30 transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60 font-mono text-center sm:text-right">
          Built with data-driven precision ✦
          <br />
          Open for collaborations
        </p>
      </div>
    </footer>
  );
}
