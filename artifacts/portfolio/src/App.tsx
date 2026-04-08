import { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FreelanceSection from "@/components/FreelanceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden lg:block" />;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <CursorGlow />

      <ThreeBackground />

      {/* Main content */}
      <div className="relative z-10">
        <NavBar />
        <main>
          <HeroSection />
          <ExperienceSection />
          <FreelanceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
