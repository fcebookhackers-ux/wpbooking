export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Instale em 1 clique',
      description: 'Faça o upload do plugin no painel do WordPress, ative e pronto. Configuração guiada passo-a-passo e em português, sem tocar em uma única linha de código.'
    },
    {
      num: '2',
      title: 'Configure seus serviços',
      description: 'Adicione seus serviços com duração, preços, profissionais encarregados e disponibilidade da grade de horários. De forma super visual e flexível.'
    },
    {
      num: '3',
      title: 'Receba agendamentos',
      description: 'Seu cliente entra, escolhe o dia, horário e profissional, faz o pagamento e o sistema confirma instantaneamente. Tudo funciona de forma 100% no piloto automático!'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-bgAlt border-y border-blue-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section header */}
        <p className="text-xs uppercase tracking-widest font-extrabold text-blue-600 mb-3">
          MUITO MAIS SIMPLICIDADE
        </p>

        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-16">
          Configure em minutos. Receba reservas para sempre.
        </h2>

        {/* Steps container */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-12 lg:gap-8">
          
          {/* Connector Line on Desktop inside Grid */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] border-t-2 border-dashed border-primary/30 -z-10 pointer-events-none"></div>

          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="flex-1 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col items-center text-center reveal"
            >
              {/* Step number circle */}
              <div className="w-14 h-14 rounded-full bg-primary text-white font-black flex items-center justify-center text-xl shadow-lg shadow-primary/20 mb-6 border-4 border-bgAlt">
                {step.num}
              </div>

              {/* Step content */}
              <h3 className="text-xl font-bold text-ink mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed font-medium">
                {step.description}
              </p>

              {/* Step label helper */}
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-blue-500 bg-blue-50/80 px-2.5 py-1 rounded-full mt-6">
                Passo {step.num} de 3
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
