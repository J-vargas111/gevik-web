import gMark from "../assets/g-mark.png";
import { Section, WhatsAppButton } from "./ui.jsx";

export default function Contacto() {
  return (
    <Section id="contacto">
      <div className="cut-lg bg-[linear-gradient(120deg,rgba(255,255,255,.5),rgba(255,255,255,.05)_50%,rgba(255,255,255,.35))] p-px">
        <div className="cut-lg relative grid items-end gap-10 overflow-hidden bg-black p-[clamp(40px,7vw,88px)] md:grid-cols-[1.3fr_auto]">
          <img src={gMark} alt="" className="pointer-events-none absolute -right-10 -top-8 w-[220px] opacity-[0.06] md:w-[320px]" />
          <div className="relative">
            <h2 className="max-w-[16em] text-[clamp(22px,2.6vw,32px)] leading-[1.3]">
              ¿Cuánto tiempo se te va al día respondiendo mensajes?
            </h2>
            <p className="mt-5 text-[clamp(17px,1.6vw,20px)] font-light text-silver">
              Escríbenos y te mostramos una demo funcionando en tu propio celular.
            </p>
          </div>
          <WhatsAppButton className="relative">Pedir una demo</WhatsAppButton>
        </div>
      </div>
    </Section>
  );
}
