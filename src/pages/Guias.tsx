
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const guides = [
  {
    title: "Como automatizar o WhatsApp da sua empresa",
    description: "Um passo a passo completo para mapear scripts, treinar IA e ativar fluxos essenciais em até 1 dia.",
    href: "/guia/como-automatizar-whatsapp-empresa",
    tags: ["Automação", "Assistente virtual"],
    readingTime: "6 min"
  },
  {
    title: "Não perder clientes no WhatsApp",
    description: "Playbook com 5 ações: resposta imediata, follow-up, prova social e recuperação de carrinhos.",
    href: "/guia/como-nao-perder-clientes-no-whatsapp",
    tags: ["Retenção", "Follow-up"],
    readingTime: "5 min"
  },
  {
    title: "Reduzir faltas em consultas",
    description: "Lembretes automáticos, lista de espera e indicadores para clínicas e consultórios.",
    href: "/guia/como-reduzir-faltas-em-consultas",
    tags: ["Clínicas", "Agendamento"],
    readingTime: "4 min"
  },
  {
    title: "Vender mais pelo WhatsApp",
    description: "Estruture funil conversacional, scripts com IA e métricas para atribuir receita.",
    href: "/guia/como-vender-mais-pelo-whatsapp",
    tags: ["Vendas", "Marketing"],
    readingTime: "6 min"
  },
  {
    title: "Ferramenta de automação simples",
    description: "Recursos essenciais para pequenos negócios ativarem mensagens automáticas sem complicação.",
    href: "/guia/ferramenta-de-automacao-simples",
    tags: ["Ferramenta", "Pequenas empresas"],
    readingTime: "4 min"
  }
];

const Guias = () => {
  const canonical = "https://promptaai.com.br/guias";
  const metaTitle = "Guias e artigos sobre automação no WhatsApp | PromptaAI";
  const metaDescription = "Coleção de guias sobre automação de atendimento, vendas e clínicas no WhatsApp com IA.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Guias & Inspiração</p>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4">Tudo sobre automação no WhatsApp</h1>
          <p className="text-lg text-muted-foreground mt-4">
            Aprenda como usar IA, marketing conversacional e fluxos inteligentes para vender, agendar e encantar clientes.
          </p>
        </section>

        <section className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="group rounded-3xl border border-border bg-surface p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="px-3 py-1 rounded-full border border-border">{guide.readingTime}</span>
                <div className="flex gap-2">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="text-primary">#{tag}</span>
                  ))}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-4 text-foreground group-hover:text-primary transition">
                {guide.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{guide.description}</p>
              <div className="mt-6 text-primary font-semibold flex items-center gap-2">
                Ler guia
                <span className="transition group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Guias;
