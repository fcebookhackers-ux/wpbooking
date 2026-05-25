import { Check, X, ShieldAlert } from 'lucide-react';

export default function Comparison() {
  const comparisonRows = [
    {
      criterio: 'Tempo de gestão/dia',
      manual: '+2 horas e muita conversa no chat',
      manualOk: false,
      wpbooking: 'Menos de 15 min de acompanhamento',
      wpbookingOk: true,
    },
    {
      criterio: 'Erros de agendamento',
      manual: 'Frequentes (esquecimentos, overbooking)',
      manualOk: false,
      wpbooking: 'Eliminados (grade sincronizada em tempo real)',
      wpbookingOk: true,
    },
    {
      criterio: 'Taxa de resposta',
      manual: 'Apenas em horário comercial',
      manualOk: false,
      wpbooking: '24 horas por dia, 7 dias por semana no automático',
      wpbookingOk: true,
    },
    {
      criterio: 'Escalabilidade',
      manual: 'Limitada ao seu tempo focado no celular',
      manualOk: false,
      wpbooking: 'Ilimitada (vários profissionais gerenciados juntos)',
      wpbookingOk: true,
    },
    {
      criterio: 'Experiência do cliente',
      manual: 'Inconsistente (depende da sua disponibilidade)',
      manualOk: false,
      wpbooking: 'Profissional, instantânea e padronizada',
      wpbookingOk: true,
    },
    {
      criterio: 'Custo com retrabalho',
      manual: 'Alto (clientes esquecem e cancelam de surpresa)',
      manualOk: false,
      wpbooking: 'Zero (lembretes automáticos reduzem no-shows)',
      wpbookingOk: true,
    },
  ];

  return (
    <section id="comparativo" className="py-20 md:py-24 bg-bgAlt">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-extrabold text-blue-600 mb-3">
            COMPARAÇÃO DIRETA
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Chega de fazer tudo no braço
          </h2>
          <p className="text-muted text-base md:text-lg">
            Veja como a automação deixa para trás a gestão de reservas manual no lápis e papel ou no WhatsApp.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-border bg-white reveal">
          <table className="w-full text-left border-collapse min-w-[600px] md:min-w-[768px]">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider font-extrabold text-slate-500">
                <th className="py-5 px-6 bg-slate-50">Critério</th>
                <th className="py-5 px-6 bg-slate-50">Método Manual</th>
                <th className="py-5 px-6 bg-primary text-white text-center">WP Booking</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr 
                  key={idx}
                  className={`border-b border-border/70 last:border-0 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  {/* Criterio */}
                  <td className="py-5 px-6 font-bold text-ink text-sm sm:text-base">
                    {row.criterio}
                  </td>

                  {/* Manual Column */}
                  <td className="py-5 px-6 text-muted text-xs sm:text-sm font-medium">
                    <div className="flex items-start gap-2.5">
                      <div className="bg-red-50 text-red-500 p-0.5 rounded-full shrink-0 mt-0.5">
                        <X size={14} className="stroke-[3]" />
                      </div>
                      <span>{row.manual}</span>
                    </div>
                  </td>

                  {/* WP Booking Column */}
                  <td className="py-5 px-6 bg-blue-50/40 text-primary-dark font-semibold text-xs sm:text-sm border-l border-r border-blue-100">
                    <div className="flex items-start gap-2.5">
                      <div className="bg-green-100 text-green-750 p-0.5 rounded-full shrink-0 mt-0.5">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                      <span className="text-ink font-bold">{row.wpbooking}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info tip */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-muted font-bold uppercase reveal">
          <ShieldAlert size={14} className="text-blue-500" />
          <span>Sua agenda organizada economiza em média até 15 horas semanais de digitação</span>
        </div>

      </div>
    </section>
  );
}
