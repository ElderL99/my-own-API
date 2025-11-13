import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

    const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Kod-01`;

    await mongoose.connect(MONGO_URI);

    console.log("🟢 Conectado a la Base de Datos");
  } catch (error) {
    console.error("🔴 Error conectando MongoDB:", error.message);
    process.exit(1);
  }
};
