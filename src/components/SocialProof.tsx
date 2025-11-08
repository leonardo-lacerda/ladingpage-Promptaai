import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const cases = [
    {
      business: "Barbearia em Vitória",
      result: "Aumento de 37% nos agendamentos após 1 mês",
      owner: "Carlos M.",
      testimonial: "Nunca mais perdi cliente por não responder na hora. O promptAI responde até quando estou cortando cabelo.",
      rating: 5
    },
    {
      business: "Clínica em Jardim da Penha",
      result: "Nunca mais perdeu clientes no WhatsApp",
      owner: "Dra. Patrícia L.",
      testimonial: "Revolucionou meu atendimento. Agora os pacientes conseguem agendar sozinhos e eu foco no que realmente importa.",
      rating: 5
    },
    {
      business: "Loja de Roupas Online",
      result: "Recuperação de 45% dos carrinhos abandonados",
      owner: "Amanda S.",
      testimonial: "As vendas aumentaram muito! O sistema lembra os clientes dos produtos que eles deixaram no carrinho.",
      rating: 5
    }
  ];

  return (
    <section id="cases" className="py-24 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">Casos de Sucesso</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Empresas locais já estão <span className="text-gradient">crescendo</span> com o promptAI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados reais de negócios que transformaram seu atendimento com inteligência artificial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((testimonial, index) => (
              <div key={index} className="relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-smooth shadow-md hover:shadow-xl group">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed font-medium">"{testimonial.testimonial}"</p>

                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-primary font-semibold text-sm">{testimonial.result}</p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="space-y-1">
                      <p className="font-semibold text-foreground">{testimonial.owner}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8 pt-8">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>+50 empresas atendidas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>97% de satisfação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Implementação garantida em 1 dia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

