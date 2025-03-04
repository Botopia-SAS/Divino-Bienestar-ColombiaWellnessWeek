import Hero from "./components/Hero";
import DataSections from "./components/datasections";
import CitySection from "./components/citysection";
import CounterSection from "./components/counter-section";
import EventTimeline from "./components/timeline";
import SponsorshipTiers from "./components/sponsor-ships";

export default function Home() {
  return (
    <>
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src="/images/fondo.png"
          alt="fondo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative">
        <Hero />
        <DataSections />
        <CitySection />
        <CounterSection />
        <EventTimeline />
        <SponsorshipTiers />
      </div>
    </>
  );
}