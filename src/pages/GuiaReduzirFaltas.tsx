import ArticleLayout from "@/components/articles/ArticleLayout";

const GuiaReduzirFaltas = () => {
  const canonical = "https://promptaai.com.br/guia/como-reduzir-faltas-em-consultas";
  const metaTitle = "Como reduzir faltas em consultas com WhatsApp (no-show) | PromptaAI";
  const metaDescription = "Reduza no-show com lembrete automático, confirmação, lista de espera e reagendamento via WhatsApp para clínicas e consultórios.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metaTitle,
    description: metaDescription,
    author: { "@type": "Organization", name: "PromptaAI" },
    mainEntityOfPage: canonical,
  };

  return (
    <ArticleLayout
      canonical={canonical}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      jsonLd={jsonLd}
      kicker="Especial Clínicas"
      title="Como reduzir faltas em consultas com WhatsApp"
      subtitle="Automatize lembretes, confirmações e reagendamentos para aproveitar cada horário da agenda."
      readingTime="4 min de leitura"
      updatedAt="08 nov 2025"
      tags={["Clínicas", "Agendamento", "WhatsApp Business"]}
      intro="Consultórios perdem de 15% a 30% dos atendimentos por esquecimento ou dificuldade de contato. Com o WhatsApp você confirma presença em segundos e mantém a agenda cheia."
      keyTakeaways={[
        "Envie lembretes 24h e 1h antes com botões de resposta",
        "Aproveite listas de espera para repor horários cancelados",
        "Registre motivos de falta para ajustar políticas",
        "Automatize reengajamento após três faltas"
      ]}
      sections={[
        {
          id: "lembretes",
          title: "1. Lembretes inteligentes",
          paragraphs: [
            "Programe dois lembretes automáticos com botões 'Confirmar', 'Remarcar' ou 'Preciso de ajuda'. Quando o paciente confirma, marque o status automaticamente; se pedir ajuda, direcione para o humano.",
            "Inclua informações úteis: endereço, orientações de preparo, link para pagamento antecipado." 
          ]
        },
        {
          id: "reagendamento",
          title: "2. Reagendamento sem fricção",
          paragraphs: [
            "Ao detectar um cancelamento, ofereça imediatamente os próximos horários livres e registre a nova data sem sair do WhatsApp.",
            "Se o horário ficar vago, acione a lista de espera (pacientes interessados na mesma semana)." 
          ]
        },
        {
          id: "politicas",
          title: "3. Políticas claras e educativas",
          paragraphs: [
            "Envie as regras da clínica no primeiro contato: tolerância, taxa de reagendamento, necessidade de pagamento antecipado.",
            "Automatize um lembrete educativo após a segunda falta, reforçando a importância de avisar com antecedência." 
          ]
        },
        {
          id: "indicadores",
          title: "4. Indicadores a acompanhar",
          bullets: [
            "Taxa de confirmação por especialidade",
            "Horários reaproveitados x perdidos",
            "Pacientes com 2+ faltas",
            "Tempo médio para preencher um horário vago"
          ],
          paragraphs: [
            "Use esses dados para decidir quando cobrar sinal, ajustar comunicação ou abrir mais horários." 
          ]
        },
      ]}
      checklist={[
        "Cadastrar texto padrão para lembretes",
        "Configurar botões de confirmação",
        "Criar lista de espera segmentada",
        "Monitorar estatísticas semanalmente",
      ]}
      relatedLinks={[
        { label: "Solução para clínicas no WhatsApp", href: "/solucoes/clinicas-whatsapp" },
        { label: "Ferramenta de automação simples", href: "/guia/ferramenta-de-automacao-simples" },
      ]}
      cta={{
        title: "Transforme sua agenda com IA",
        description: "A PromptaAI ativa lembretes, confirmações e reagendamentos automáticos em 1 dia, com suporte 100% em português.",
        primaryLabel: "Quero reduzir faltas",
        primaryHref: "https://wa.me/5527981271965?text=Quero%20reduzir%20faltas",
        secondaryLabel: "Ver chatbot para clínicas",
        secondaryHref: "/solucoes/clinicas-whatsapp",
      }}
    />
  );
};

export default GuiaReduzirFaltas;

