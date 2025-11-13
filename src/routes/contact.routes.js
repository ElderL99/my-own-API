import { Router } from "express";
import { sendMessage } from "../controllers/contact.controller.js";
import { contactLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/", contactLimiter, sendMessage);

export default router;
