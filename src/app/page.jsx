import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import ApproachSection from "@/components/sections/ApproachSection";
import AboutSection from "@/components/sections/AboutSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="fixed -top-20 z-50 bg-ink p-3 text-white focus:top-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <WorkSection />
        <ApproachSection />
        <AboutSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
