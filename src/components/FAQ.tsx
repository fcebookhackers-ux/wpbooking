import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'É difícil instalar o WP Booking?',
      a: 'Não. O processo é idêntico ao de qualquer plugin premium WordPress: envie o arquivo .zip comprado através da aba "Fazer Upload de Plugin", ative e siga o assistente inicial de configuração explicada passo a passo. Demora menos de 10 minutos e não necessita de suporte técnico.'
    },
    {
      q: 'Funciona com o meu tema WordPress?',
      a: 'Sim, tranquilamente. O WP Booking foi projetado de acordo com as semânticas estruturais oficiais do ecossistema WordPress, sendo 100% adaptável e compatível com Elementor, Divi, Astra, Avada, Gutenberg e qualquer tema contemporâneo do mercado.'
    },
    {
      q: 'Tem suporte em português?',
      a: 'Sim. Nossa equipe técnica é brasileira e atende em português via Chat ao Vivo e E-mail dentro de horário comercial convencional para os planos Starter e Pro, e com atendimento prioritário 24/7 sobre SLA dedicado no plano Agency.'
    },
    {
      q: 'Posso usar em mais de um site?',
      a: 'Depende diretamente da licença assinada. O plano Starter é restrito a apenas 1 site principal, enquanto o Pro assegura suporte a até 3 sites simultâneos e o Agency decolará com sites e instalações ilimitadas.'
    },
    {
      q: 'Tem garantia de reembolso?',
      a: 'Com certeza. Confiamos tanto na qualidade do WP Booking que outorgamos 14 dias de garantia incondicional e irrestrita. Caso não note as melhorias nas suas reservas online por qualquer razão, devolvemos 100% do seu dinheiro.'
    },
    {
      q: 'Posso aceitar pagamentos no momento do agendamento?',
      a: 'Sim, a partir do plano Pro. O plugin incorpora integração direta com os maiores gateways de processamento do país: PagSeguro, Mercado Pago e Stripe. Permite receber Pix, cartão de crédito e boleto sob verificação automática imediata.'
    },
    {
      q: 'O plugin recebe atualizações?',
      a: 'Sim. Lançamos novidades constantemente para otimizar a segurança, corrigir bugs estruturais de navegadores e implementar recursos modernos requeridos pela nossa comunidade de sites ativos. Todas as atualizações já estão inclusas.'
    },
    {
      q: 'Funciona bem no celular?',
      a: 'Perfeitamente. O formulário gerado para a ponta do cliente final é 10 % responsivo, projetado sob diretrizes Mobile-First e altamente otimizado para navegações por toque rápidas, resultando em conversões acima da média.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-bgLight">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
            PRINCIPAIS RESPOSTAS
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-ink mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Ainda com alguma dúvida para dar o próximo passo? Confira as respostas rápidas para as perguntas mais comuns.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 reveal"
              >
                {/* Header clickable button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-bold text-ink hover:text-primary transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-primary opacity-70 shrink-0" />
                    <span className="text-sm sm:text-base tracking-tight">{faq.q}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {/* Animated expandable content */}
                <div 
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-50' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-xs sm:text-sm text-muted leading-relaxed font-semibold bg-slate-50/50">
                    {faq.a}
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
