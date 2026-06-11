import TopNavBar from "@/components/TopNavBar";
import HeroSection from "@/components/HeroSection";
import QuemEMaira from "@/components/QuemEMaira";
import Proposito from "@/components/Proposito";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import ViewportScaler from "@/components/ViewportScaler";
import dynamic from "next/dynamic";

const Caminhada = dynamic(() => import("@/components/Caminhada"), {
  loading: () => <div className="w-full min-h-screen bg-surface-container-low" />,
});
const PhotoStack = dynamic(() => import("@/components/PhotoStack"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));

export default function Home() {
  return (
    <>
      <ViewportScaler />
      <ScrollAnimations />
      <TopNavBar />
      <main>
        <HeroSection />
        <QuemEMaira />
        <Proposito />
        <Caminhada />
        <PhotoStack />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
