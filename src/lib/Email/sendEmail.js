import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ to, from, replyTo, subject, html }) => {
  try {
    await sgMail.send({
      to,
      from,
      replyTo,
      subject,
      html,
    });

    console.log(`📬 Email enviado a ${to}`);
  } catch (error) {
    console.error("❌ Error al enviar email:", error.response?.body || error);
    throw new Error("Error enviando email");
  }
};
