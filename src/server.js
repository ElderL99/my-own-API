import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 3000;

// Routes
import { sendMessage } from "./controllers/contac.usecases.js";

export const startServer = () => {
  const app = express();

  // middlewares

  app.use(
    cors({
      origin: ["https://portafolio-six-tawny-94.vercel.app"],
      methods: ["POST"],
      allowedHeaders: ["Content-Type"],
      credentials: false,
    })
  );

  app.use(express.json());
  // Routes

  app.use("/contact", sendMessage);

  // 🌐 GET
  app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "API V 1.0.0 🚀",
    });
  });

  app.listen(PORT, () => {
    console.log(`🚀 server is runing in  http://localhost:${PORT}`);
  });
};
