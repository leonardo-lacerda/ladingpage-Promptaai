import { useState } from "react";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadCapture = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nome: "", whatsapp: "", ramo: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Dados salvos com sucesso!", description: "Suas informações foram registradas e você será redirecionado para o WhatsApp." });

    const message = `Olá! Quero descobrir quantos clientes estou perdendo no WhatsApp. Meus dados: Nome: ${formData.nome}, Ramo: ${formData.ramo}`;
    window.open(`https://wa.me/5527981271965?text=${encodeURIComponent(message)}`, "_blank");

    setTimeout(() => { setFormData({ nome: "", whatsapp: "", ramo: "" }); }, 1000);
  };

  const businessTypes = [
    "Barbearia/Salão",
    "Clínica/Consultório",
    "Loja de Roupas",
    "Restaurante",
    "Academia",
    "Oficina/Mecânica",
    "Estética",
    "Advocacia",
    "Contabilidade",
    "Imobiliária",
    "E-commerce",
    "Outro"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-surface to-primary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 animate-slide-in-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-block animate-bounce-in [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
                  <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 animate-pulse-glow">
                    Diagnóstico Gratuito
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight animate-fade-up [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]">
                  Descubra quantos <span className="text-gradient animate-wave [animation-delay:1s]">clientes você perde</span> no WhatsApp
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed animate-slide-up [animation-delay:0.7s] opacity-0 [animation-fill-mode:forwards]">
                  Responda 3 perguntas rápidas e receba o diagnóstico personalizado.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-surface border border-border animate-zoom-in [animation-delay:0.9s] opacity-0 [animation-fill-mode:forwards] hover:scale-105 hover:shadow-glow transition-smooth">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse-glow flex-shrink-0">
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-bounce" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-xs sm:text-sm truncate">Análise Precisa</p>
                    <p className="text-xs text-muted-foreground truncate">Baseada em dados reais</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-surface border border-border animate-zoom-in [animation-delay:1.1s] opacity-0 [animation-fill-mode:forwards] hover:scale-105 hover:shadow-glow transition-smooth">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse-glow [animation-delay:0.5s] flex-shrink-0">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-bounce [animation-delay:0.2s]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-xs sm:text-sm truncate">Oportunidades de Crescimento</p>
                    <p className="text-xs text-muted-foreground truncate">Recomendações acionáveis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="bg-background rounded-2xl border border-border p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Nome</label>
                      <Input type="text" placeholder="Digite seu nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} required className="h-11 sm:h-12 rounded-lg lg:rounded-xl text-sm sm:text-base" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">WhatsApp</label>
                      <Input type="tel" placeholder="(xx) xxxxx-xxxx" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} required className="h-11 sm:h-12 rounded-lg lg:rounded-xl text-sm sm:text-base" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">Ramo do negócio</label>
                      <Select value={formData.ramo} onValueChange={(value) => setFormData({ ...formData, ramo: value })}>
                        <SelectTrigger className="h-11 sm:h-12 rounded-lg lg:rounded-xl text-sm sm:text-base">
                          <SelectValue placeholder="Selecione seu ramo" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg max-h-60 overflow-y-auto z-50">
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type} className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100 font-medium">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleSubmit} variant="hero" size="hero" className="w-full group h-12 sm:h-14 text-sm sm:text-base font-semibold" disabled={!formData.nome || !formData.whatsapp || !formData.ramo}>
                    <span className="truncate">Receber diagnóstico gratuito</span>
                    <div className="ml-2 transition-transform group-hover:translate-x-1 flex-shrink-0">→</div>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">100% gratuito • Sem compromisso • Resposta em 1 minuto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;

