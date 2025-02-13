import { StringSession } from "telegram/sessions/index.js";
import { TelegramClient } from "telegram";
import dotenv from "dotenv";
import fs from "fs"

dotenv.config()

const apiId = Number(process.env.TELEGRAM_API_ID);
const apiHash = process.env.TELEGRAM_API_HASH;
const sessionFile = "session.json";
const data = fs.existsSync(sessionFile) ? JSON.parse(fs.readFileSync(sessionFile, "utf-8")) : "";

const stringSession = new StringSession(data.token)

const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,
})

export default client;