import { Router } from "express";
import { sendMessage } from "../controllers/contac.usecases.js";
import { contactLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/", contactLimiter, sendMessage);

export default router;
