import { telegramService } from "../services/telegram-service.js";

class TelegramController {
  async sendMessage(req, res, next) {
    try {
      const { userId, message } = req.body;

      const response = await telegramService.sendMessage(userId, message)

      return res.json(response)
    } catch (e) {
      next(e)
    }
  }
}

export const telegramController = new TelegramController()