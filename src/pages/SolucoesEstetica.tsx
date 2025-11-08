import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";

const SolucoesEstetica = () => {
  const canonical = "https://promptaai.com.br/solucoes/estetica-whatsapp";
  const title = "Chatbot para Estética no WhatsApp: Agendamentos e Lembretes | PromptaAI";
  const description = "Chatbot para estética e consultórios no WhatsApp. Automação de atendimento, agendamento automático e lembretes para reduzir faltas e aumentar fidelização.";

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
            serviceType: "Chatbot para estética e consultórios no WhatsApp",
            provider: { "@type": "Organization", name: "PromptaAI", url: "https://promptaai.com.br/" },
            areaServed: "BR",
          })}
        </script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
          Chatbot para estética no WhatsApp com agendamento automático
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Organize sua agenda e reduza faltas com lembretes automáticos e confirmação de presença. Atenda 24/7 com um assistente virtual humanizado no WhatsApp.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Foco em resultados</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Atendimento automático para consultório</li>
              <li>• Lembrete de consulta automático</li>
              <li>• Respostas comuns (valores, endereço, preparo)</li>
              <li>• Organização de clientes e retornos</li>
              <li>• Relatórios semanais via WhatsApp</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Palavras‑chave cobertas</h2>
            <p className="mt-4 text-muted-foreground">
              chatbot para estética, automação para clínicas, atendimento automático para consultório, lembrete de consulta automático, assistente virtual WhatsApp.
            </p>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
          <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/5527981271965?text=Quero%20automatizar%20minha%20cl%C3%ADnica%20de%20est%C3%A9tica', '_blank')}>Falar no WhatsApp</Button>
          <Button variant="outline-hero" size="lg" onClick={() => window.open('https://promptaai.com.br/checkout/completo', '_blank')}>Assinar plano completo</Button>
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold">Veja também</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-primary">
            <a href="/solucoes/clinicas-whatsapp" className="hover:underline">Solução para Clínicas</a>
            <a href="/guia/como-automatizar-whatsapp-empresa" className="hover:underline">Como automatizar o WhatsApp da minha empresa</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolucoesEstetica;

