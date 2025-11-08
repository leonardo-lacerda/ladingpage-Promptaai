import { Button } from "@/components/ui/button-variants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">pAI</span>
          </div>
          <span className="text-xl font-bold text-foreground">promptAI</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Recursos</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">Preços</a>
          <a href="#cases" className="text-muted-foreground hover:text-foreground transition-smooth">Casos</a>
          <a href="/solucoes/clinicas-whatsapp" className="text-muted-foreground hover:text-foreground transition-smooth">Soluções</a>
          <a href="/guias" className="text-muted-foreground hover:text-foreground transition-smooth">Guias</a>
        </nav>

        <Button variant="cta" size="lg">
          Começar agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
