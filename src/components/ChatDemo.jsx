import { useEffect, useState } from "react";
import gMark from "../assets/g-mark.png";

const guion = [
  { de: "cliente", t: "Hola, quiero corte con barba para mañana" },
  { de: "bot", t: "¡Hola! Claro. ¿Me regalas tu nombre y apellido?" },
  { de: "cliente", t: "Andrés Gómez" },
  { de: "bot", t: "Gracias, Andrés. Mañana tengo libre a las 10:00 a. m., 2:30 p. m. o 5:00 p. m." },
  { de: "cliente", t: "2:30" },
  { de: "bot", t: "Listo. Tu cita quedó para mañana a las 2:30 p. m. ✅" },
  { de: "aviso", t: "Hoy a las 12:30 p. m.", d: "Recordatorio: tu cita es a las 2:30 p. m. ¿Confirmas?" },
];

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

const estilos = {
  cliente: "self-end rounded-[14px] rounded-br-[4px] bg-white/10",
  bot: "self-start rounded-[14px] rounded-bl-[4px] border border-white/20",
  aviso: "self-stretch max-w-none border-l-2 border-silver bg-white/5 text-sm text-silver",
};

function Mensaje({ m, animar }) {
  return (
    <div className={`max-w-[82%] px-3.5 py-2.5 text-[15px] leading-[1.45] ${estilos[m.de]} ${animar ? "animate-enter" : ""}`}>
      {m.de === "aviso" ? (
        <>
          <b className="mb-0.5 block font-semibold text-white">{m.t}</b>
          {m.d}
        </>
      ) : (
        m.t
      )}
    </div>
  );
}

export default function ChatDemo() {
  const reducir = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visibles, setVisibles] = useState(reducir ? guion.length : 0);
  const [escribiendo, setEscribiendo] = useState(false);

  useEffect(() => {
    if (reducir) return;
    let activo = true;
    (async () => {
      while (activo) {
        setVisibles(0);
        await espera(700);
        for (let i = 0; i < guion.length && activo; i++) {
          const m = guion[i];
          if (m.de === "bot") {
            setEscribiendo(true);
            await espera(1100);
            setEscribiendo(false);
          } else if (m.de === "aviso") {
            await espera(900);
          }
          if (!activo) return;
          setVisibles(i + 1);
          await espera(m.de === "cliente" ? 1300 : 1500);
        }
        await espera(4500);
      }
    })();
    return () => { activo = false; };
  }, [reducir]);

  return (
    <figure className="cut-md m-0 w-full max-w-[460px] bg-[linear-gradient(160deg,rgba(255,255,255,.55),rgba(255,255,255,.06)_45%,rgba(255,255,255,.3))] p-px lg:max-w-none">
      <div className="cut-md flex h-[450px] flex-col bg-black px-4 pb-5 pt-[18px] sm:h-[480px] sm:px-5 sm:pb-6 sm:pt-[22px]">
        <div className="flex items-center gap-3 border-b border-line pb-4">
          <div className="grid size-10 flex-none place-items-center rounded-full bg-white">
            <img src={gMark} alt="" className="w-[22px] invert" />
          </div>
          <div>
            <strong className="block text-[15px] font-semibold">Barbería de ejemplo</strong>
            <small className="text-[13px] text-steel">
              <span className="mr-1.5 inline-block size-[7px] rounded-full bg-silver align-[1px]" />
              Responde al instante
            </small>
          </div>
        </div>
        <div aria-hidden="true" className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden pt-[18px]">
          {guion.slice(0, visibles).map((m, i) => (
            <Mensaje key={i} m={m} animar={!reducir} />
          ))}
          {escribiendo && (
            <div className="flex gap-[5px] self-start rounded-[14px] rounded-bl-[4px] border border-white/20 px-4 py-3.5">
              {[0, 180, 360].map((d) => (
                <i key={d} className="animate-blink size-1.5 rounded-full bg-silver" style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
          )}
        </div>
        <p className="sr-only">
          Ejemplo de conversación: un cliente pide un corte con barba para mañana, el asistente le pide su nombre, le
          ofrece tres horarios, confirma la cita de las 2:30 p. m. y dos horas antes le envía un recordatorio.
        </p>
      </div>
    </figure>
  );
}
