
import Navbar from "./homepage/Navbar";
import HeroSection from "./homepage/HeroSection";
import TrustBar from "./homepage/TrustBar";
import FeaturesSection from "./homepage/FeaturesSection";
import HowItWorksSection from "./homepage/HowItWorksSection";
import ComparisonSection from "./homepage/ComparisonSection";
import TestimonialsSection from "./homepage/TestimonialsSection";
import ProofSection from "./homepage/ProofSection";
import CaseStudySection from "./homepage/CaseStudySection";
import CtaSection from "./homepage/CtaSection";
import FooterSection from "./homepage/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <ProofSection />
      <CaseStudySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
