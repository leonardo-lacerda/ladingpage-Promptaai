import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";

const SolucoesClinicas = () => {
  const canonical = "https://promptaai.com.br/solucoes/clinicas-whatsapp";
  const title = "Chatbot para Clínicas: Agendamento e Lembretes no WhatsApp | PromptaAI";
  const description = "Chatbot para clínicas e consultórios no WhatsApp. Sistema de agendamento médico automático, lembrete de consulta, confirmação de presença e atendimento 24h.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Chatbot e automação para clínicas no WhatsApp",
            provider: { "@type": "Organization", name: "PromptaAI", url: "https://promptaai.com.br/" },
            areaServed: "BR",
          })}
        </script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
          Chatbot para clínicas no WhatsApp: agendamento automático e lembretes
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Atenda pacientes 24h por dia com assistente virtual no WhatsApp. Configure agenda, confirmação de presença e lembretes automáticos para reduzir faltas e evitar overbooking.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">O que você resolve</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Sistema de agendamento automático no WhatsApp</li>
              <li>• Lembrete de consulta automático (24h e 1h antes)</li>
              <li>• Confirmação de presença e reprogramação</li>
              <li>• Atendimento 24h para dúvidas frequentes</li>
              <li>• Relatórios e métricas de atendimento</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Palavras‑chave cobertas</h2>
            <p className="mt-4 text-muted-foreground">
              whatsapp para clínicas médicas, sistema de agendamento médico whatsapp, lembrete de consulta automático, atendimento 24h clínica whatsapp, chatbot para clínicas, atendimento automático para consultório.
            </p>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
          <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/5527981271965?text=Quero%20automatizar%20meu%20agendamento', '_blank')}>Falar no WhatsApp</Button>
          <Button variant="outline-hero" size="lg" onClick={() => window.open('https://promptaai.com.br/checkout/completo', '_blank')}>Assinar plano completo</Button>
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold">Veja também</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-primary">
            <a href="/solucoes/estetica-whatsapp" className="hover:underline">Chatbot para Estética</a>
            <a href="/guia/como-reduzir-faltas-em-consultas" className="hover:underline">Como reduzir faltas em consultas</a>
            <a href="/guia/como-nao-perder-clientes-no-whatsapp" className="hover:underline">Como não perder clientes no WhatsApp</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolucoesClinicas;

