import { Router } from "express";
import { telegramController } from "../controllers/telegram-controller.js";

const router = new Router()

router.post("/send_message", telegramController.sendMessage)

export default router