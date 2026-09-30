import { Section, SectionHead } from "./ui.jsx";

const etapas = [
  { t: "Conversamos", d: "Nos cuentas cómo agendas hoy, qué servicios ofreces y qué te quita más tiempo." },
  { t: "Lo configuramos", d: "Conectamos tu WhatsApp y tu calendario, y ajustamos el asistente a tu negocio." },
  { t: "Mes de prueba", d: "Lo usas con tus clientes reales durante el primer mes y ves los resultados antes de decidir." },
  { t: "Te acompañamos", d: "Seguimos pendientes de que funcione bien y lo ajustamos a medida que tu negocio cambia." },
];

export default function ComoTrabajamos() {
  return (
    <Section id="como-trabajamos">
      <SectionHead title="Cómo trabajamos">Un proceso corto y claro, sin contratos complicados.</SectionHead>
      <ol>
        {etapas.map((e, i) => (
          <li key={e.t} className="grid grid-cols-[60px_1fr] items-baseline gap-x-[clamp(16px,4vw,48px)] gap-y-2 border-t border-line py-7 lg:grid-cols-[120px_1fr_1.4fr]">
            <span className="font-display text-[15px] tracking-[0.1em] text-steel">0{i + 1}</span>
            <h3 className="text-[17px] leading-[1.4] tracking-[0.04em]">{e.t}</h3>
            <p className="col-start-2 text-silver lg:col-start-auto">{e.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
