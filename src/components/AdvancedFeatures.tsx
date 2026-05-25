import { 
  Settings, 
  CalendarOff, 
  FileText, 
  Bell, 
  Layers, 
  BarChart, 
  Wallet, 
  Puzzle 
} from 'lucide-react';

export default function AdvancedFeatures() {
  const features = [
    {
      icon: Settings,
      title: 'Regras de Disponibilidade',
      description: 'Configure regras flexíveis de horários por dia, intervalos de almoço e folgas recorrentes.'
    },
    {
      icon: CalendarOff,
      title: 'Bloqueio de Datas',
      description: 'Pause agendamentos em feriados, folgas temporárias ou férias coletivas em poucos segundos.'
    },
    {
      icon: FileText,
      title: 'Campos Personalizados',
      description: 'Colete informações extras dos clientes com formulários sob medida para cada tipo de serviço.'
    },
    {
      icon: Bell,
      title: 'Lembretes & Alertas',
      description: 'Envie notificações de sucesso e lembretes periódicos de forma fluida por e-mail e SMS.'
    },
    {
      icon: Layers,
      title: 'Multi-Serviços & Profissionais',
      description: 'Gerencie múltiplos atendentes e categorias de serviços no mesmo painel de controle central.'
    },
    {
      icon: BarChart,
      title: 'Relatórios Estatísticos',
      description: 'Acompanhe métricas de faturamento, reservas bem-sucedidas e taxa de cancelamentos por período.'
    },
    {
      icon: Wallet,
      title: 'Integrações de Pagamentos',
      description: 'Conexão nativa com os gateways mais populares como PagSeguro, Stripe, Pix e Mercado Pago.'
    },
    {
      icon: Puzzle,
      title: 'Compatibilidade Total',
      description: 'Integração sem falhas com Elementor, Divi, Astra, Bricks e o novo Gutenberg do WordPress.'
    }
  ];

  return (
    <section id="recursos" className="py-20 md:py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
            RECURSOS AVANÇADOS
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Tudo que você precisa em um único plugin
          </h2>
          <p className="text-muted text-base md:text-lg">
            Crie fluxos de trabalho perfeitos sem precisar se preocupar com extensões adicionais. O WP Booking faz tudo.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-border flex flex-col justify-between items-start transition-all duration-200 hover:-translate-y-0.5 reveal"
              >
                <div>
                  {/* Icon wrapper */}
                  <div className="bg-slate-50 text-primary rounded-lg p-2.5 mb-4 shrink-0 inline-flex items-center justify-center">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm font-bold text-ink mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted text-xs leading-relaxed font-semibold">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
