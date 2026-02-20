import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import IndustriesSection from "@/components/IndustriesSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import RequestForm from "@/components/RequestForm";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CatalogSection />
      <IndustriesSection />
      <AboutSection />
      <CertificatesSection />
      <RequestForm />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
