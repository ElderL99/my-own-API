import { connectDB } from "./src/lib/DB/bd.js";
import { startServer } from "./src/server.js";

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
