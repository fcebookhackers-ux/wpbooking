import React from 'react';
import { CalendarCheck, Instagram, Youtube, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1 Brand Column (Desk: Spans 4 tabs) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a 
              href="#hero" 
              onClick={(e) => handleScrollToSection(e, '#hero')} 
              className="flex items-center gap-2"
            >
              <div className="bg-primary p-2 rounded-xl text-white shadow-xl shadow-primary/10">
                <CalendarCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                WP<span className="text-primary text-bold ml-0.5">Booking</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm mt-1">
              Agendamentos inteligentes e automação de reservas online no WordPress. Otimize seus atendimentos e converta cliques em faturamento real.
            </p>
          </div>

          {/* Col 2 Quick Navigation (Desk: Spans 2 tabs) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider border-b border-white/5 pb-2">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
              {quickLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="hover:text-primary text-slate-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 Legal/Garantias (Desk: Spans 2 tabs) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider border-b border-white/5 pb-2">
              Termos & Leis
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
              <a href="#planos" className="hover:text-primary text-slate-400 transition-colors">Termos de Uso</a>
              <a href="#planos" className="hover:text-primary text-slate-400 transition-colors">Política de Privacidade</a>
              <a href="#faq" className="hover:text-primary text-slate-400 transition-colors">Garantia Incondicional</a>
              <a href="#credibilidade" className="hover:text-primary text-slate-400 transition-colors">Parceiros Credenciados</a>
            </nav>
          </div>

          {/* Col 4 Contact & Socials (Desk: Spans 4 tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider border-b border-white/5 pb-2">
              Fale Conosco
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-slate-400">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a href="mailto:suporte@wpbooking.com.br" className="hover:text-white transition-colors">
                  suporte@wpbooking.com.br
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>Atendimento e desenvolvimento 100% brasileiro para todo o país.</span>
              </p>
            </div>

            {/* Social Channels Row */}
            <div className="pt-3 flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 p-2.5 rounded-lg transition-colors border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 p-2.5 rounded-lg transition-colors border border-slate-800"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850 p-2.5 rounded-lg transition-colors border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 border-t border-slate-900 text-slate-500 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} WP Booking. Todos os direitos reservados.</p>
          <p className="font-medium text-[10px]">
            Desenvolvido com carinho no Brasil • Compatível com PHP 8.1+ e WordPress 6.0+
          </p>
        </div>

      </div>
    </footer>
  );
}
