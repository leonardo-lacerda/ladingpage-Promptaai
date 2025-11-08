import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const DualPricing = () => {
  const essentialFeatures = [
    "Respostas automáticas com IA",
    "Confirmação e lembretes básicos de agendamento",
    "Suporte digital ágil"
  ];

  const completeFeatures = [
    "Agendamentos e lembretes automáticos (Agenda Inteligente)",
    "Automação de Vendas & Follow-up (Esteira Invisível de Vendas)",
    "Relatórios semanais no WhatsApp",
    "Organização em planilhas inteligentes ou mini-CRM"
  ];

  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Planos Disponíveis
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Escolha o plano ideal para seu negócio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Do básico ao completo, temos a solução perfeita para cada momento da sua empresa</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative bg-surface border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">ESSENCIAL</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Pacote Essencial</h3>
                  <p className="text-muted-foreground">Atendimento automatizado no WhatsApp</p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-4xl font-bold text-foreground">R$200</span>
                    <span className="text-lg text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Implementação em até 1 dia</p>
                </div>

                <div className="space-y-3 py-4">
                  <h4 className="font-semibold text-foreground text-sm">O que está incluído:</h4>
                  {essentialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 border border-border p-3 rounded-xl">
                  <p className="text-xs text-foreground">
                    <span className="font-semibold">Ideal para:</span> Pequenos negócios que querem começar com automação sem investir muito
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-11 font-semibold border-2 border-border/60 bg-background hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={() => window.open('https://promptaai.com.br/checkout/essencial')}
                >
                  Começar com o Essencial
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">MAIS POPULAR</span>
                </div>
              </div>

              <div className="relative bg-surface border-2 border-primary rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute -inset-1 bg-primary/10 rounded-2xl -z-10"></div>

                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                    <span className="text-sm font-medium text-primary">COMPLETO</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Pacote Completo</h3>
                    <p className="text-muted-foreground text-lg">Ecossistema completo de crescimento automatizado</p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl lg:text-5xl font-bold text-foreground">R$247</span>
                      <span className="text-lg text-muted-foreground">/mês</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-muted-foreground line-through">antes R$397</span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-semibold border border-primary/20">ECONOMIA DE R$100</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Implementação em até 1 dia</p>
                  </div>

                  <div className="space-y-4 py-6">
                    <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-primary">Inclui tudo do Pacote Essencial, mais:</p>
                    </div>

                    {essentialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 opacity-60">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}

                    {completeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center mt-0.5 flex-shrink-0 border border-primary/40">
                          <Check className="w-3 h-3 text-primary font-bold" />
                        </div>
                        <span className="text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">Ideal para:</span> Negócios que querem <span className="font-semibold text-primary">mais controle, mais vendas e mais inteligência</span> trabalhando por eles
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full h-12 font-semibold bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 hover:border-primary hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]"
                    onClick={() => window.open('https://promptaai.com.br/checkout/completo')}
                  >
                    Assinar Pacote Completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPricing;

