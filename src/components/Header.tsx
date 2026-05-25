import React, { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of Header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')} 
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity focus:outline-none"
        >
          <div className="bg-primary hover:bg-blue-605 transition-colors p-2 rounded-xl text-white shadow-md shadow-primary/20">
            <CalendarCheck className="w-6 h-6 stroke-[2.25]" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-ink flex items-center">
              WP<span className="text-primary ml-1 font-bold">Booking</span>
            </span>
            <span className="block text-[9px] text-muted uppercase tracking-widest font-bold leading-none">
              Agendamentos Inteligentes
            </span>
          </div>
        </a>

        {/* Center: Navigation Links Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm text-slate-700">
          {menuItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="relative py-1.5 transition-colors hover:text-primary group text-slate-700 font-medium"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Dynamic CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#planos"
            onClick={(e) => handleScrollTo(e, '#planos')}
            className="text-sm font-bold text-primary hover:text-blue-600 transition-colors pr-2"
          >
            Ver Planos
          </a>
          <a
            href="#planos"
            onClick={(e) => handleScrollTo(e, '#planos')}
            className="bg-cta text-ink font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-95 shadow-md shadow-cta/20 flex items-center gap-2 active:scale-95"
          >
            Começar Agora
            <ArrowRight size={14} className="stroke-[2.5]" />
          </a>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-750 hover:text-primary transition-colors hover:bg-slate-100 rounded-lg"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="px-6 py-6 pb-8 space-y-4">
            <nav className="flex flex-col gap-4 font-semibold text-base text-slate-800">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="py-1 border-b border-slate-50 text-slate-705 active:text-primary hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#planos"
                onClick={(e) => handleScrollTo(e, '#planos')}
                className="w-full text-center py-3 rounded-xl border border-primary text-primary font-bold text-sm"
              >
                Ver Tabela de Preços
              </a>
              <a
                href="#planos"
                onClick={(e) => handleScrollTo(e, '#planos')}
                className="w-full text-center py-3.5 rounded-xl bg-cta text-ink font-bold text-sm uppercase tracking-wide shadow-md shadow-cta/15"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
