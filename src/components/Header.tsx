import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinkClass = "text-muted-foreground hover:text-foreground transition-smooth";

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
          <Link to="/#features" className={navLinkClass}>Recursos</Link>
          <Link to="/#pricing" className={navLinkClass}>Preços</Link>
          <Link to="/#cases" className={navLinkClass}>Casos</Link>
          <Link to="/solucoes/clinicas-whatsapp" className={navLinkClass}>Soluções</Link>
          <Link to="/guias" className={navLinkClass}>Guias</Link>
        </nav>

        <Button
          variant="cta"
          size="lg"
          onClick={() => window.open('https://wa.me/5527981271965?text=Quero%20conhecer%20a%20PromptaAI', '_blank')}
        >
          Começar agora
        </Button>
      </div>
    </header>
  );
};

export default Header;

