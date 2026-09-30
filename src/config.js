// ===== CONFIGURACIÓN: cambia solo estos datos =====
export const CONFIG = {
  whatsapp: "573015982822", // número con indicativo 57, sin + ni espacios
  mensajeWhatsapp: "Hola GEVIK, quiero saber más sobre la automatización para mi negocio.",
  correo: "contacto@gevik.co",
  instagram: "https://instagram.com/gevik",
};
// ===================================================

export const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensajeWhatsapp)}`;
