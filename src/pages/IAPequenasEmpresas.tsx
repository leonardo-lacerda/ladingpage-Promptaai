import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IAPequenasEmpresas = () => {
  const canonical = "https://promptaai.com.br/solucoes/ia-para-pequenas-empresas";
  const title = "Inteligência artificial para pequenas empresas (WhatsApp) | PromptaAI";
  const description = "IA para atendimento no WhatsApp: pequenas empresas com assistente virtual, automação de mensagens e experiência do cliente humanizada.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground max-w-3xl">Inteligência artificial para pequenas empresas no WhatsApp</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Atenda e venda no WhatsApp com um assistente inteligente. Atendimento digital humanizado com IA e automações simples para acelerar resultados.
        </p>
        <section className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Destaques</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Atendimento digital humanizado</li>
              <li>• Automação de mensagens e follow‑up</li>
              <li>• Assistente virtual WhatsApp</li>
              <li>• Marketing conversacional</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h2 className="text-2xl font-semibold">Aplicações</h2>
            <p className="mt-4 text-muted-foreground">Varejo local, serviços, profissionais autônomos e atendimento 24/7 sem aumentar equipe.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IAPequenasEmpresas;

