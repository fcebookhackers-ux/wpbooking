import { Clock, Mail, CalendarCheck, CreditCard, BellOff, Users } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      icon: Clock,
      title: 'Agendamentos 24/7',
      description: 'Seus clientes reservam a qualquer hora, mesmo quando você está dormindo. Sem ligações intermináveis, sem trocas de mensagens manuais no WhatsApp.'
    },
    {
      icon: Mail,
      title: 'Confirmações automáticas',
      description: 'E-mails e lembretes disparados automaticamente assim que a reserva for efetuada ou paga. Menos esquecimentos, mais profissionalismo para o seu negócio.'
    },
    {
      icon: CalendarCheck,
      title: 'Integração com calendário',
      description: 'Sincronize com o Google Calendar em duas vias e nunca sofra com overbooking. Visão unificada e organizada da sua rotina direto no seu celular.'
    },
    {
      icon: CreditCard,
      title: 'Pagamentos online',
      description: 'Aceite adiantamentos ou o valor total do atendimento no momento da reserva. Ganhe segurança financeira e reduza desistências na última hora.'
    },
    {
      icon: BellOff,
      title: 'Redução de faltas',
      description: 'Lembretes automáticos de véspera ou com horas de antecedência reduzem cancelamentos surpresa e no-shows em até 40%. Mais aproveitamento do seu dia.'
    },
    {
      icon: Users,
      title: 'Gestão de equipes',
      description: 'Suporta múltiplos profissionais e múltiplos serviços. Cada colaborador tem sua própria grade de horários, regras de escala e sincronização individual.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 md:py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Caption */}
        <p className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
          BENEFÍCIOS EXCLUSIVOS
        </p>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
          Por que mais de 4.800 negócios escolheram o WP Booking?
        </h2>
        
        {/* Subtitle */}
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Nossa ferramenta entrega agilidade total e automatiza agendamentos de ponta a ponta enquanto você foca no que faz de melhor.
        </p>

        {/* Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-start text-left reveal"
              >
                {/* Icon wrapper */}
                <div className="text-primary bg-bgAlt rounded-xl p-3.5 mb-6 flex items-center justify-center shrink-0 shadow-sm shadow-blue-100">
                  <IconComponent className="w-6 h-6 stroke-[2.25]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-ink mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
