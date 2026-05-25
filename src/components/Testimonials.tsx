import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      initials: 'CM',
      name: 'Carlos Mendes',
      role: 'Dono, Barber King',
      city: 'São Paulo/SP',
      text: 'Antes eu passava horas respondendo mensagens para confirmar horários. Com o WP Booking, minha agenda se preenche sozinha. Aumentei minhas reservas em 60% no primeiro mês.'
    },
    {
      initials: 'AP',
      name: 'Ana Paula Reis',
      role: 'Fisioterapeuta',
      city: 'Curitiba/PR',
      text: 'Instalei em 10 minutos sem precisar chamar ninguém. Meus clientes adoraram poder agendar pelo celular. As faltas caíram muito com os lembretes automáticos.'
    },
    {
      initials: 'RT',
      name: 'Rafael Torres',
      role: 'Diretor, Studio Move',
      city: 'Belo Horizonte/MG',
      text: 'Gerencio 4 profissionais e 12 serviços no mesmo painel. O WP Booking virou o coração do meu negócio. Não consigo imaginar trabalhar sem ele diariamente.'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-24 bg-bgLight">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
            PROVA SOCIAL REAL
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Quem usa, não abre mão
          </h2>
          <p className="text-muted text-base md:text-lg">
            Empresários e profissionais liberais que mudaram a forma de gerenciar o próprio tempo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md border border-border flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal"
            >
              <div>
                {/* Quote Icon */}
                <Quote className="text-primary opacity-25 w-10 h-10 mb-5 shrink-0" />
                
                {/* Paragraph */}
                <p className="text-muted text-sm leading-relaxed mb-6 italic font-medium">
                  "{item.text}"
                </p>
              </div>

              {/* Customer details info */}
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mt-auto">
                {/* Avatar with initials inside */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-sm shadow-md shrink-0">
                  {item.initials}
                </div>
                
                <div>
                  <h4 className="font-bold text-ink text-sm sm:text-base leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-muted text-xs font-semibold mt-0.5">
                    {item.role} • <span className="text-primary font-medium">{item.city}</span>
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mt-1.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-500 text-xs">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
