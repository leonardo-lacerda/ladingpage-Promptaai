import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "Como automatizar o WhatsApp da minha empresa?",
    a: "Com a PromptaAI você conecta seu WhatsApp Business e define fluxos de atendimento: respostas automáticas, qualificação de leads, agendamento e lembretes. Em até 1 dia seu atendente virtual fica no ar, sem precisar de equipe técnica." 
  },
  {
    q: "Como não perder clientes no WhatsApp?",
    a: "Ative respostas 24/7 e follow-up automático. O sistema identifica carrinhos abandonados, envia lembretes e reengaja contatos que não responderam — tudo no WhatsApp, sem fricção." 
  },
  {
    q: "Como reduzir faltas em consultas?",
    a: "Use lembretes automáticos com confirmação no WhatsApp. Para clínicas e consultórios, a PromptaAI envia lembrete 24h/1h antes e reprograma horários cancelados, reduzindo no-shows." 
  },
  {
    q: "Como vender mais pelo WhatsApp?",
    a: "Ative a automação de vendas: qualificação de leads, ofertas contextuais, upsell/cross-sell e recuperação de carrinho. Relatórios mostram quais mensagens mais convertem." 
  },
  {
    q: "Chatbot para clínicas funciona?",
    a: "Sim. Nosso assistente virtual agenda consultas, confirma presença e responde dúvidas comuns (endereço, convênios, preparo). Integra com Google Calendar para evitar overbooking." 
  },
  {
    q: "O atendimento é humanizado?",
    a: "Sim. A IA responde com contexto e tom de voz definidos pela sua marca. Quando necessário, transfere para um humano com histórico completo da conversa." 
  }
];

const FAQ = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Perguntas Frequentes</span>
            <h2 className="text-4xl font-bold text-foreground">FAQ sobre automação no WhatsApp</h2>
            <p className="text-muted-foreground">Tire suas dúvidas sobre chatbot, IA e agendamentos automáticos.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-surface">
                <h3 className="text-lg font-semibold text-foreground">{item.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

