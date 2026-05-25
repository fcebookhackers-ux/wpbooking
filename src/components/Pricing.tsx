import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'R$ 47',
      period: '/mês',
      description: 'Ideal para profissionais avulsos que estão começando a agenda online.',
      features: [
        'Instalação em 1 site WordPress',
        '1 profissional cadastrado',
        'Até 100 agendamentos por mês',
        'Notificações nativas por e-mail',
        'Suporte via Base de Conhecimento'
      ],
      cta: 'Assinar Starter',
      isPopular: false
    },
    {
      name: 'Pro',
      price: 'R$ 97',
      period: '/mês',
      description: 'Recomendado para negócios em crescimento que necessitam de equipe e pagamentos.',
      features: [
        'Instalação em até 3 sites',
        'Até 5 profissionais cadastrados',
        'Reservas e agendamentos ilimitados',
        'Recebimento de pagamentos online',
        'Relatórios de faturamento avançados',
        'Suporte prioritário por Chat Humano'
      ],
      cta: 'Assinar Pro',
      isPopular: true
    },
    {
      name: 'Agency',
      price: 'R$ 197',
      period: '/mês',
      description: 'Perfeito para agências de marketing e desenvolvedores web corporativos.',
      features: [
        'Sites e instalações ilimitadas',
        'Profissionais cadastrados ilimitados',
        'Todos os recursos Pro inclusos',
        'Acesso antecipado a novas funções',
        'Suporte especializado c/ SLA contratual',
        'Licença para revenda/projetos de clientes'
      ],
      cta: 'Assinar Agency',
      isPopular: false
    }
  ];

  return (
    <section id="planos" className="py-20 md:py-24 bg-bgAlt border-t border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-extrabold text-blue-600 mb-3">
            TABELA DE PREÇOS
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Plano certo para cada negócio
          </h2>
          <p className="text-muted text-base md:text-lg">
            Sem pegadinhas ou taxas extras. Escolha o plano que melhor se alinha à sua demanda de atendimento.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto select-none px-2 py-4">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-md flex flex-col relative transition-all duration-300 reveal ${
                plan.isPopular 
                  ? 'border-2 border-primary scale-100 md:scale-105 shadow-xl md:-translate-y-2' 
                  : 'border border-border/70 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {/* Recommended Badge */}
              {plan.isPopular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Mais Popular
                </span>
              )}

              {/* Header Box */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-ink uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted font-medium min-h-[32px]">
                  {plan.description}
                </p>
                
                {/* Price Display */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-black text-ink tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm font-semibold ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 mb-8 border-t border-slate-100 pt-6">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-755">
                    <div className="bg-green-100 text-green-700 p-0.5 rounded-full mt-0.5 shrink-0 flex items-center justify-center">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button CTA */}
              <button 
                className={`w-full py-4 px-6 rounded-xl font-bold text-center text-sm uppercase tracking-wider transition-all duration-200 mt-auto ${
                  plan.isPopular 
                    ? 'bg-cta hover:brightness-95 text-ink hover:-translate-y-0.5 shadow-md shadow-cta/20 active:scale-95 cursor-pointer' 
                    : 'border-2 border-primary text-primary hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-bold'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Security badges row */}
        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-muted text-xs sm:text-sm font-bold tracking-wide flex flex-wrap justify-center items-center gap-1 md:gap-3 leading-loose reveal">
            <span>✓ 14 dias de garantia incondicional</span>
            <span className="opacity-40 hidden md:inline">•</span>
            <span>✓ Cancele quando quiser</span>
            <span className="opacity-40 hidden md:inline">•</span>
            <span>✓ Sem fidelidade</span>
          </p>
          <p className="text-muted/80 text-[11px] font-medium mt-2 leading-relaxed reveal">
            Garantimos o reembolso integral do valor pago caso desista do plugin por qualquer motivo dentro do prazo inicial de 2 semanas de uso.
          </p>
        </div>

      </div>
    </section>
  );
}
