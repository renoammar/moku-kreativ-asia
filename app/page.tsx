
import HomeHero from "./components/beranda/HomeHero";
import CompanySolution from "./components/beranda/CompanySolution";
import PressHighlights from "./components/beranda/PressHighlights";
import MapLocation from "./components/beranda/MapLocation";
import ContactSection from "./components/beranda/ContactSection";
import Footer from "./components/UI/Footer";
export default function Home() {
  return (
    <>
      <HomeHero />
      <CompanySolution />
      <PressHighlights />
      <ContactSection />
      <MapLocation />
     
      
    </>
  );
}
