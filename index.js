import { connectDB } from "./src/lib/DB/bd.js";
import { startServer } from "./src/server.js";

console.log("ENV LOADED, SENDGRID:", process.env.SENDGRID_API_KEY);

const init = async () => {
  try {
    // Conexión a MongoDB Atlas
    await connectDB();

    // Iniciar servidor
    startServer();
  } catch (err) {
    console.error("❌ Error iniciando la aplicación:", err.message);
    process.exit(1); // Forzar salida si algo crítico falla
  }
};

init();
