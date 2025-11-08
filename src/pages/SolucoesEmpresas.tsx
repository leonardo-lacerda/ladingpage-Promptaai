import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";

const SolucoesEmpresas = () => {
  const canonical = "https://promptaai.com.br/solucoes/empresas-whatsapp";
  const title = "Automação de WhatsApp para Empresas: Atendimento e Vendas | PromptaAI";
  const description = "Software de atendimento no WhatsApp para empresas. Sistema para responder clientes automaticamente, marketing conversacional e experiência do cliente com IA.";

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
            serviceType: "Automação de WhatsApp para empresas",
            provider: { "@type": "Organization", name: "PromptaAI", url: "https://promptaai.com.br/" },
            areaServed: "BR",
          })}
        </script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">
          Automação de WhatsApp para empresas: atendimento automático e vendas
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Responda clientes automaticamente, qualifique leads e recupere vendas com IA. Alinhe marketing conversacional e experiência do cliente em um único sistema.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Recursos</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Sistema para responder clientes automaticamente</li>
              <li>• Assistente inteligente no WhatsApp (IA)</li>
              <li>• Automação de vendas e follow‑up</li>
              <li>• Carrinho abandonado e reengajamento</li>
              <li>• Relatórios de conversão e atendimento</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Palavras‑chave cobertas</h2>
            <p className="mt-4 text-muted-foreground">
              automação de whatsapp para empresas, software de atendimento whatsapp, sistema para responder clientes automaticamente, experiência do cliente whatsapp, marketing conversacional, chatbot com inteligência artificial.
            </p>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
          <Button variant="hero" size="lg" onClick={() => window.open('https://wa.me/5527981271965?text=Quero%20automatizar%20o%20atendimento%20da%20minha%20empresa', '_blank')}>Falar no WhatsApp</Button>
          <Button variant="outline-hero" size="lg" onClick={() => window.open('https://promptaai.com.br/checkout/completo', '_blank')}>Assinar plano completo</Button>
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold">Veja também</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-primary">
            <a href="/planos/automacao-whatsapp-mensal" className="hover:underline">Plano mensal de automação WhatsApp</a>
            <a href="/guia/como-automatizar-whatsapp-empresa" className="hover:underline">Como automatizar o WhatsApp da minha empresa</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolucoesEmpresas;

