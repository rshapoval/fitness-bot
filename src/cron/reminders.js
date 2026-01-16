import cron from "node-cron";
import { reminders } from "./remindersConfig.js";

export function setupReminders(bot, chatId) {
  reminders.forEach(({ times, message, keyboard }) => {
    times.forEach((time) => {
      cron.schedule(time, () => {
        bot.sendMessage(chatId, message, {
          reply_markup: { inline_keyboard: keyboard },
        });
      });
    });
  });
}
