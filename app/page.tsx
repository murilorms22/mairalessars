import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import QuemEMaira from "@/components/QuemEMaira";
import Proposito from "@/components/Proposito";
import Caminhada from "@/components/Caminhada";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <TopNavBar />
      <main>
        <HeroSection />
        <QuemEMaira />
        <Proposito />
        <Caminhada />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
