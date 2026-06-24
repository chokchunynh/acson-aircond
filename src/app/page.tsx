import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import ProductCatalog from "@/components/sections/ProductCatalog";
import HowItWorks from "@/components/sections/HowItWorks";
import RentVsBuy from "@/components/sections/RentVsBuy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Comparison from "@/components/sections/Comparison";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Gallery from "@/components/sections/Gallery";
import TeamSection from "@/components/sections/TeamSection";
import SocialProof from "@/components/sections/SocialProof";
import CoverageArea from "@/components/sections/CoverageArea";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductCatalog />
        <HowItWorks />
        <RentVsBuy />
        <ServicesGrid />
        <Comparison />
        <BeforeAfter />
        <Gallery />
        <TeamSection />
        <SocialProof />
        <CoverageArea />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
      <FloatingWhatsApp />
    </>
  );
}
