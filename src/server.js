import express from "express";
import cors from "cors";

// Routes
import { sendMessage } from "./controllers/contac.usecases.js";

export const startServer = () => {
  const app = express();

  // middlewares
  app.use(cors());
  app.use(express.json());
  // Routes

  app.use("/api/contact", sendMessage);

  const PORT = process.env.PORT || 4000;

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
