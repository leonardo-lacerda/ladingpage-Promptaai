import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import LeadCapture from "@/components/LeadCapture";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Automação de Atendimento no WhatsApp com IA | PromptaAI</title>
        <meta name="description" content="Automação de atendimento no WhatsApp com IA. Assistente virtual e chatbot para clínicas, consultórios e pequenas empresas. Agendamentos automáticos e vendas 24/7." />
        <link rel="canonical" href="https://promptaai.com.br/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <div className="animate-fade-up [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]">
          <Features />
        </div>
        <div className="animate-slide-in-left [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
          <Offer />
        </div>
        <div className="animate-zoom-in [animation-delay:1.5s] opacity-0 [animation-fill-mode:forwards]">
          <SocialProof />
        </div>
        <div className="animate-slide-in-right [animation-delay:2s] opacity-0 [animation-fill-mode:forwards]">
          <HowItWorks />
        </div>
        <div className="animate-fade-up [animation-delay:2.5s] opacity-0 [animation-fill-mode:forwards]">
          <LeadCapture />
        </div>
        <div className="animate-scale-in [animation-delay:3s] opacity-0 [animation-fill-mode:forwards]">
          <FinalCTA />
        </div>
        <div className="animate-fade-up [animation-delay:3.2s] opacity-0 [animation-fill-mode:forwards]">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
