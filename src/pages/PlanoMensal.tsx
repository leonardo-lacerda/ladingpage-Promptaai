import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button-variants";

const PlanoMensal = () => {
  const canonical = "https://promptaai.com.br/planos/automacao-whatsapp-mensal";
  const title = "Plano Mensal de Automação de WhatsApp | PromptaAI";
  const description = "Contratar chatbot WhatsApp com plano mensal. Assistente inteligente para atendimento e vendas, com agendamentos e automações prontas para pequenas empresas.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">Plano mensal de automação no WhatsApp</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Assine a PromptaAI e tenha um assistente inteligente no WhatsApp: atendimento automático, agendamentos, lembretes e automação de vendas. Ideal para pequenas empresas e profissionais.
        </p>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Inclui</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Assistente virtual (IA) no WhatsApp</li>
              <li>• Fluxos prontos para atendimento e vendas</li>
              <li>• Agendamentos e lembretes automáticos</li>
              <li>• Relatórios semanais no WhatsApp</li>
              <li>• Suporte especializado</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Palavras‑chave cobertas</h2>
            <p className="mt-4 text-muted-foreground">
              plano mensal de automação whatsapp, contratar chatbot whatsapp, assistente inteligente whatsapp, promptaai (marca principal), software de atendimento whatsapp.
            </p>
          </div>
        </section>

        <div className="mt-10 flex gap-4">
          <Button variant="hero" size="lg" onClick={() => window.open('https://promptaai.com.br/checkout/completo', '_blank')}>Assinar agora</Button>
          <Button variant="outline-hero" size="lg" onClick={() => window.open('https://wa.me/5527981271965?text=Quero%20saber%20sobre%20o%20plano%20mensal', '_blank')}>Falar no WhatsApp</Button>
        </div>

        <section className="mt-16">
          <h3 className="text-xl font-semibold">Veja também</h3>
          <div className="mt-4 flex flex-wrap gap-4 text-primary">
            <a href="/solucoes/empresas-whatsapp" className="hover:underline">Automação para Empresas</a>
            <a href="/solucoes/clinicas-whatsapp" className="hover:underline">Chatbot para Clínicas</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanoMensal;

