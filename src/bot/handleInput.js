import { logAction } from "../services/google/sheets.js";
import { MESSAGES } from "./messages.js";

export function requestNumericInput(
  bot,
  chatId,
  actionName,
  sheets,
  spreadsheetId,
  sheetRange,
  formatMsg,
) {
  bot.sendMessage(chatId, MESSAGES.WEIGHT_ENTER);

  bot.once("message", async (reply) => {
    const value = reply.text.trim();
    if (!isNaN(value)) {
      await logAction(
        sheets,
        spreadsheetId,
        sheetRange,
        actionName,
        `${value} кг`,
      );
      bot.sendMessage(chatId, formatMsg(value));
    } else {
      bot.sendMessage(chatId, MESSAGES.INVALID_WEIGHT);
    }
  });
}
