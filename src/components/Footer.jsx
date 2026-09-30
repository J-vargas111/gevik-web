import { CONFIG, waUrl } from "../config.js";
import { Wrap } from "./ui.jsx";
import { Brand } from "./Nav.jsx";

export default function Footer() {
  const link = "text-[15px] text-silver no-underline transition-colors hover:text-white";
  return (
    <footer className="relative z-[1] border-t border-line pb-[calc(48px+env(safe-area-inset-bottom))] pt-10">
      <Wrap className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
        <Brand />
        <nav aria-label="Contacto y legal" className="flex flex-wrap gap-x-7 gap-y-3">
          <a className={link} href={waUrl} target="_blank" rel="noopener">WhatsApp</a>
          <a className={link} href={`mailto:${CONFIG.correo}`}>Correo</a>
          <a className={link} href={CONFIG.instagram} target="_blank" rel="noopener">Instagram</a>
          <a className={link} href="/privacidad.html">Política de tratamiento de datos</a>
        </nav>
        <small className="text-sm text-steel">© {new Date().getFullYear()} GEVIK · Colombia</small>
      </Wrap>
    </footer>
  );
}
