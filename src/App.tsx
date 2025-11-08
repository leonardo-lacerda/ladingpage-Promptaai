import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminRequests from "./pages/AdminRequests";
// import CheckoutEssencial from "./pages/CheckoutEssencial";
// import CheckoutCompleto from "./pages/CheckoutCompleto";
import SolucoesClinicas from "./pages/SolucoesClinicas";
import SolucoesEstetica from "./pages/SolucoesEstetica";
import SolucoesEmpresas from "./pages/SolucoesEmpresas";
import PlanoMensal from "./pages/PlanoMensal";
import GuiaAutomatizarWhatsApp from "./pages/GuiaAutomatizarWhatsApp";
import GuiaNaoPerderClientes from "./pages/GuiaNaoPerderClientes";
import GuiaReduzirFaltas from "./pages/GuiaReduzirFaltas";
import GuiaVenderMaisWhatsApp from "./pages/GuiaVenderMaisWhatsApp";
import FerramentaAutomacaoSimples from "./pages/FerramentaAutomacaoSimples";
import IAPequenasEmpresas from "./pages/IAPequenasEmpresas";
import Guias from "./pages/Guias";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/req" element={<AdminRequests />} />
          <Route path="/solucoes/clinicas-whatsapp" element={<SolucoesClinicas />} />
          <Route path="/solucoes/estetica-whatsapp" element={<SolucoesEstetica />} />
          <Route path="/solucoes/empresas-whatsapp" element={<SolucoesEmpresas />} />
          <Route path="/planos/automacao-whatsapp-mensal" element={<PlanoMensal />} />
          <Route path="/guia/como-automatizar-whatsapp-empresa" element={<GuiaAutomatizarWhatsApp />} />
          <Route path="/guia/como-nao-perder-clientes-no-whatsapp" element={<GuiaNaoPerderClientes />} />
          <Route path="/guia/como-reduzir-faltas-em-consultas" element={<GuiaReduzirFaltas />} />
          <Route path="/guia/como-vender-mais-pelo-whatsapp" element={<GuiaVenderMaisWhatsApp />} />
          <Route path="/guia/ferramenta-de-automacao-simples" element={<FerramentaAutomacaoSimples />} />
          <Route path="/solucoes/ia-para-pequenas-empresas" element={<IAPequenasEmpresas />} />
          <Route path="/guias" element={<Guias />} />
            {/* <Route path="/checkout/essencial" element={<CheckoutEssencial />} /> */}
            {/* <Route path="/checkout/completo" element={<CheckoutCompleto />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
