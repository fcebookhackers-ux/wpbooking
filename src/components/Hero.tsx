import React from 'react';
import PluginMockup from './PluginMockup';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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
    <section id="hero" className="relative pt-8 pb-20 md:py-24 bg-gradient-to-b from-bgLight via-white to-bgLight overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-100/40 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-100/30 blur-2xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left reveal">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-250/50 rounded-full px-3.5 py-1.5 mb-6 text-xs font-bold text-primary">
            <Sparkles size={12} className="fill-primary/20" />
            <span>O PLUGIN DE RESERVAS NÚMERO #1 DO WORDPRESS</span>
          </div>

          {/* Main H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink sm:leading-tight mb-6">
            Automatize seus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">agendamentos</span> no WordPress e converta mais clientes — sem complicação.
          </h1>

          {/* Subheading text */}
          <p className="text-base md:text-lg text-muted font-medium mb-8 leading-relaxed max-w-xl">
            WP Booking é o plugin mais completo para clínicas, estúdios, barbearias e profissionais autônomos que querem receber reservas online 24 horas por dia, com confirmação automática e zero trabalho manual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="#planos"
              onClick={(e) => handleScrollTo(e, '#planos')}
              className="bg-cta text-ink font-bold rounded-xl px-8 py-4.5 text-center text-base hover:brightness-95 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-cta/20 active:scale-95"
            >
              Começar Agora
            </a>
            <button
              onClick={(e) => handleScrollTo(e, '#plugin-mockup')}
              className="border-2 border-primary text-primary font-bold rounded-xl px-8 py-4 text-center text-base hover:bg-bgAlt transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95"
            >
              <Play size={16} className="fill-primary" />
              <span>Ver Teste Prático</span>
            </button>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-slate-100 w-full">
            <div className="flex items-center gap-1.5 focus:outline-none">
              <span className="text-cta font-bold text-xl">⭐</span>
              <span className="text-slate-800 font-bold text-sm">4.9/5</span>
              <span className="text-muted text-xs font-medium">• +320 avaliações</span>
            </div>
            
            <div className="text-muted text-sm font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              +4.800 sites ativos
            </div>

            <div className="text-muted text-sm font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Suporte em português
            </div>
          </div>

        </div>

        {/* Right Product Mockup Column */}
        <div className="lg:col-span-5 w-full reveal">
          <div className="relative">
            {/* Absolute element effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl blur-xl -z-10 transform rotate-1 scale-105 pointer-events-none"></div>
            
            {/* Render direct HTML mockup */}
            <PluginMockup />

            <p className="text-center text-xs text-muted/80 font-medium mt-3 italic">
              *Painel de controle interno interativo — Clique em aprovar/recusar para testar!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
