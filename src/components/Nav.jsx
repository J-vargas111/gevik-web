import gMark from "../assets/g-mark.png";
import { Wrap, WhatsAppButton } from "./ui.jsx";

const links = [
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#producto", label: "Agendamiento" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
];

export function Brand() {
  return (
    <a href="#inicio" aria-label="GEVIK, inicio" className="flex items-center gap-3 no-underline">
      <img src={gMark} alt="" width="34" height="28" className="w-[34px]" />
      <span className="font-display pt-0.5 text-[13px] tracking-[0.32em] sm:text-[15px]">GEVIK</span>
    </a>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-black/70 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <Wrap className="flex h-[72px] items-center justify-between gap-6">
        <Brand />
        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] text-silver no-underline transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton small icon={false}>Escríbenos</WhatsAppButton>
      </Wrap>
    </header>
  );
}
