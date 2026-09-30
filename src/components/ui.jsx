import { waUrl } from "../config.js";

export function Wrap({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,56px)] ${className}`}>{children}</div>;
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative border-t border-line py-[clamp(72px,10vw,128px)] ${className}`}>
      <Wrap>{children}</Wrap>
    </section>
  );
}

export function SectionHead({ title, children }) {
  return (
    <div className="mb-[clamp(40px,6vw,72px)] grid items-end gap-6 md:grid-cols-[5fr_7fr] md:gap-[clamp(24px,5vw,72px)]">
      <h2 className="text-[clamp(22px,2.6vw,32px)] leading-[1.3]">{title}</h2>
      {children && <p className="max-w-[32em] text-[clamp(17px,1.6vw,20px)] font-light text-silver">{children}</p>}
    </div>
  );
}

export function WhatsAppIcon({ className = "size-5" }) {
  return (
    <svg className={`flex-none ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

export function WhatsAppButton({ children, small = false, icon = true, className = "" }) {
  const size = small ? "min-h-[42px] px-5 text-[15px]" : "min-h-[52px] px-7 text-base";
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener"
      className={`bg-metal cut-sm inline-flex items-center justify-center gap-2.5 font-semibold text-black no-underline transition hover:brightness-110 active:translate-y-px ${size} ${className}`}
    >
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}
