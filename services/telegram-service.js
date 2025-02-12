import client from "../config/telegram.js";

class TelegramService {

  async sendMessage(userId, message) {
    const responseMessage = await client.sendMessage(userId, { message: message });

    return responseMessage;
  }
}

export const telegramService = new TelegramService()

