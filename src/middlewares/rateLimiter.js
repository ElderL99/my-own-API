import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 3,
  standardHeaders: true, // X-RateLimit-* headers
  legacyHeaders: false, // desactiva X-RateLimit-Reset, etc.
  message: {
    success: false,
    msg: "Has enviado demasiados mensajes. Inténtalo de nuevo en un minuto.",
  },
});
