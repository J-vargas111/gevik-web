import { Wrap, WhatsAppButton } from "./ui.jsx";
import ChatDemo from "./ChatDemo.jsx";

export default function Hero() {
  return (
    <div className="py-[clamp(56px,9vw,112px)] pb-[clamp(72px,10vw,128px)]">
      <Wrap className="grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-7">
          <h1 className="text-metal text-[clamp(26px,3.7vw,48px)] leading-[1.22]">
            Tu negocio atiende, agenda y recuerda. Aunque tú estés ocupado.
          </h1>
          <p className="max-w-[34em] text-[clamp(17px,1.6vw,20px)] font-light text-silver">
            En GEVIK automatizamos las tareas repetitivas de los negocios con inteligencia artificial y las herramientas
            que ya usan, empezando por WhatsApp.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-5 sm:gap-7">
            <WhatsAppButton className="w-full sm:w-auto">Escríbenos por WhatsApp</WhatsAppButton>
            <a href="#producto" className="border-b border-steel pb-0.5 font-medium text-silver no-underline transition-colors hover:border-white hover:text-white">
              Conoce nuestro primer producto
            </a>
          </div>
        </div>
        <ChatDemo />
      </Wrap>
    </div>
  );
}
