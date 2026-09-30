import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import QueHacemos from "./components/QueHacemos.jsx";
import Producto from "./components/Producto.jsx";
import PorQue from "./components/PorQue.jsx";
import ComoTrabajamos from "./components/ComoTrabajamos.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <div aria-hidden="true" className="grid-diagonal pointer-events-none fixed inset-0 z-0 opacity-50" />
      <Nav />
      <main id="inicio" className="relative z-[1]">
        <Hero />
        <QueHacemos />
        <Producto />
        <PorQue />
        <ComoTrabajamos />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
