import { Section, SectionHead } from "./ui.jsx";

const servicios = [
  { t: "Atención por WhatsApp con IA", d: "Un asistente que responde preguntas frecuentes, toma datos y agenda, las 24 horas, con el tono de tu negocio." },
  { t: "Flujos que conectan tus herramientas", d: "Tu calendario, tus hojas de cálculo, tus formularios y tus mensajes trabajando juntos, sin copiar y pegar información a mano." },
  { t: "Recordatorios y seguimiento", d: "Mensajes automáticos para confirmar citas, avisar cambios y volver a contactar a clientes que no han regresado." },
  { t: "Soluciones a la medida", d: "Si una tarea se repite en tu negocio, probablemente se puede automatizar. Cuéntanos cuál es y la revisamos contigo." },
];

export default function QueHacemos() {
  return (
    <Section id="que-hacemos">
      <SectionHead title="Automatizamos lo que te quita tiempo">
        Revisamos cómo funciona tu negocio, encontramos las tareas que se repiten todos los días y las ponemos a
        funcionar solas, sin cambiar la forma en que tus clientes te contactan.
      </SectionHead>
      <ul className="border-t border-line">
        {servicios.map((s) => (
          <li key={s.t} className="grid gap-4 border-b border-line py-8 md:grid-cols-[5fr_7fr] md:gap-[clamp(16px,5vw,72px)]">
            <h3 className="flex items-start gap-3.5 text-[17px] leading-[1.4] tracking-[0.04em]">
              <span className="bg-metal cut-tri mt-1.5 size-2.5 flex-none" />
              {s.t}
            </h3>
            <p className="max-w-[36em] text-silver">{s.d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
