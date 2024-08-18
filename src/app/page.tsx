import LandingPageLayout from "@/components/landingPage/LandingPageLayout";
import HeroSection from "@/components/landingPage/sections/HeroSection";
import HeroSection2 from "@/components/landingPage/sections/HeroSection2";
import HeroSection3 from "@/components/landingPage/sections/HeroSection3";
import HeroSection4 from "@/components/landingPage/sections/HeroSection4";

export default function Home() {
  return (
  <LandingPageLayout>
   <HeroSection />
   <HeroSection2 />
   <HeroSection3 />
   <HeroSection4 />
  </LandingPageLayout>
  );
}