import Contact from "../models/Contact.js";
import { sendEmail } from "../lib/Email/sendEmail.js";
import { renderTemplate } from "../lib/Email/renderTemplate.js";
import createError from "http-errors";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw createError(400, "Todos los campos son obligatorios");
    }

    // Guardar en DB
    await Contact.create({ name, email, message });

    // Renderizar plantilla
    const html = renderTemplate("sendEmail.html", {
      name,
      email,
      message,
    });

    // Enviar correo
    await sendEmail({
      to: process.env.MY_EMAIL,
      from: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      html,
    });

    return res.status(200).json({
      success: true,
      msg: "Mensaje enviado ✔️",
    });
  } catch (error) {
    console.error("🔥 Error:", error);

    // Si es error de http-errors, enviar su status
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        msg: error.message,
      });
    }

    // Error desconocido
    return res.status(500).json({
      success: false,
      msg: "Error en el servidor ❌",
    });
  }
};
