import { Section, SectionHead } from "./ui.jsx";

const razones = [
  { t: "Tus clientes no instalan nada", d: "Todo pasa en WhatsApp, la aplicación que ya usan todos los días." },
  { t: "Atiende cuando tú no puedes", d: "Mientras cortas, atiendes a un paciente o duermes, las citas se siguen agendando." },
  { t: "Menos citas perdidas", d: "Los recordatorios automáticos ayudan a que el cliente llegue o avise a tiempo para darle el espacio a otro." },
  { t: "Te lo dejamos funcionando", d: "Nosotros lo configuramos con tus servicios, horarios y forma de hablar, y te acompañamos después." },
];

export default function PorQue() {
  return (
    <Section id="por-que">
      <SectionHead title="Por qué GEVIK">
        Tecnología seria, pensada para el tamaño y el ritmo de los negocios de aquí.
      </SectionHead>
      <div className="grid md:grid-cols-2">
        {razones.map((r) => (
          <div key={r.t} className="border-t border-line py-8 md:pr-10 md:even:border-l md:even:pl-10">
            <h3 className="mb-2.5 text-[17px] leading-[1.4] tracking-[0.04em]">{r.t}</h3>
            <p className="max-w-[30em] text-silver">{r.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
