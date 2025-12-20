import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AgentsSection from "@/components/AgentsSection";
import ExamplesSection from "@/components/ExamplesSection";
import TechnicalSection from "@/components/TechnicalSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <AgentsSection />
        <ExamplesSection />
        <TechnicalSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
