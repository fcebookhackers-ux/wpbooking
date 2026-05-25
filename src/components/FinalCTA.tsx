import React from 'react';
import { CalendarCheck2, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cta-final" className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden text-center">
      
      {/* Absolute Decorative Circles */}
      <div className="absolute top-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-300/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10 reveal">
        
        {/* Logo check icon */}
        <div className="bg-white/10 border border-white/20 p-4 rounded-3xl mb-8 animate-bounce duration-3000">
          <CalendarCheck2 className="w-10 h-10 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl">
          Seu negócio merece uma agenda que trabalha por você.
        </h2>

        {/* Subhead */}
        <p className="text-base md:text-xl text-blue-50 max-w-2xl font-medium mb-10 leading-relaxed">
          Instale o WP Booking hoje e comece a receber reservas online ainda esta semana — sem complicação, sem conhecimento de código, sem stress.
        </p>

        {/* Oversized call to action button */}
        <a
          href="#planos"
          onClick={(e) => handleScrollToSection(e, '#planos')}
          className="bg-cta text-ink font-extrabold text-base md:text-lg rounded-2xl px-10 py-5.5 hover:brightness-105 transition-all duration-200 hover:-translate-y-1 shadow-2xl shadow-cta/30 inline-flex items-center gap-3 select-none active:scale-95 cursor-pointer"
        >
          <span>Instalar WP Booking Hoje</span>
          <ArrowRight size={18} className="stroke-[2.5]" />
        </a>

        {/* Security badges below */}
        <div 
          className="text-white/90 text-xs sm:text-sm font-bold tracking-wide mt-8 flex flex-wrap justify-center items-center gap-2 md:gap-4 border-t border-white/10 pt-6 w-full max-w-lg"
          aria-label="Informações de Segurança"
        >
          <span>✓ 14 dias de garantia</span>
          <span className="opacity-45">•</span>
          <span>✓ Suporte em português</span>
          <span className="opacity-45">•</span>
          <span>✓ Atualizações constantes</span>
        </div>

      </div>
    </section>
  );
}
