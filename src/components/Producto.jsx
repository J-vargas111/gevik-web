import { Section } from "./ui.jsx";

const pasos = [
  { t: "El cliente escribe", d: "Te escribe a tu WhatsApp de siempre y el asistente le pide su nombre y el servicio que quiere." },
  { t: "Revisa tu agenda", d: "Cada servicio tiene su duración configurada, así que solo ofrece los espacios donde de verdad cabe." },
  { t: "Confirma la cita", d: "El cliente elige un horario y la cita queda guardada en tu calendario al instante." },
  { t: "Recuerda antes", d: "Dos horas antes le envía un recordatorio para confirmar o reprogramar, y así llegan menos clientes tarde o nunca." },
];

export default function Producto() {
  return (
    <Section id="producto">
      <div className="flex max-w-[40em] flex-col gap-5">
        <span className="self-start border border-line px-3.5 py-1.5 text-sm text-silver">Nuestro primer producto</span>
        <h2 className="text-[clamp(22px,2.6vw,32px)] leading-[1.3]">Agendamiento de citas por WhatsApp</h2>
        <p className="text-[clamp(17px,1.6vw,20px)] font-light text-silver">
          Tus clientes escriben como siempre. Un asistente con inteligencia artificial revisa tu agenda, les ofrece los
          horarios libres y deja la cita guardada en tu calendario.
        </p>
      </div>
      <ol className="mt-[clamp(40px,6vw,64px)] grid gap-6 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-4 lg:gap-0">
        {pasos.map((p, i) => (
          <li key={p.t} className="border-t border-steel pb-2 pr-6 pt-7">
            <span className="text-metal font-display mb-5 block text-[44px] leading-none">{i + 1}</span>
            <h3 className="mb-2.5 text-[17px] leading-[1.4] tracking-[0.04em]">{p.t}</h3>
            <p className="text-base text-silver">{p.d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-[clamp(40px,6vw,64px)] max-w-[52em] border-t border-line pt-7 text-silver">
        <strong className="font-medium text-white">Pensado para negocios que viven de citas:</strong> barberías, salones
        de belleza, manicuristas, spas, odontologías, consultorios y centros de estética.
      </p>
    </Section>
  );
}
