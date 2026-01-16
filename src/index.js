import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import { google } from "googleapis";
import { registerCommands } from "./bot/commands.js";
import { registerCallbacks } from "./bot/callbacks.js";
import { setupReminders } from "./cron/reminders.js";

dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
console.log("🤖 Бот запущено...");

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_RANGE_PREFIX = String(new Date().getFullYear());
const OWNER_CHAT_ID = process.env.CHAT_ID;

registerCommands(
  bot,
  sheets,
  SPREADSHEET_ID,
  SHEET_RANGE_PREFIX,
  OWNER_CHAT_ID,
);
registerCallbacks(
  bot,
  sheets,
  SPREADSHEET_ID,
  SHEET_RANGE_PREFIX,
  OWNER_CHAT_ID,
);

setupReminders(bot, OWNER_CHAT_ID);
