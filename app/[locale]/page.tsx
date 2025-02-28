import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";

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
      </div>
    </>
  );
}