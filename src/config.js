// ===== CONFIGURACIÓN: cambia solo estos datos =====
export const CONFIG = {
  whatsapp: "573128042810", // número con indicativo 57, sin + ni espacios
  mensajeWhatsapp: "Hola GEVIK, quiero saber más sobre la automatización para mi negocio.",
  correo: "somosgevik@gmail.com",
  instagram: "https://www.instagram.com/gevik.ai/",
};
// ===================================================

export const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensajeWhatsapp)}`;
