import { logAction } from "../services/google/sheets.js";
import { requestNumericInput } from "./handleInput.js";
import { MESSAGES } from "./messages.js";
import { checkOwner } from "./checkOwner.js";

export function registerCommands(
  bot,
  sheets,
  spreadsheetId,
  sheetRange,
  ownerChatId,
) {
  bot.onText(/\/start/, (msg) => {
    checkOwner(msg.chat.id, ownerChatId, () => {
      bot.sendMessage(msg.chat.id, MESSAGES.START);
    });
  });

  bot.onText(/\/water/, (msg) => {
    checkOwner(msg.chat.id, ownerChatId, async () => {
      await logAction(sheets, spreadsheetId, sheetRange, "Вода", "✅");
      bot.sendMessage(msg.chat.id, MESSAGES.WATER_LOGGED);
    });
  });

  bot.onText(/\/meal/, (msg) => {
    checkOwner(msg.chat.id, ownerChatId, async () => {
      await logAction(sheets, spreadsheetId, sheetRange, "Їжа", "✅");
      bot.sendMessage(msg.chat.id, MESSAGES.MEAL_LOGGED);
    });
  });

  bot.onText(/\/workout/, (msg) => {
    checkOwner(msg.chat.id, ownerChatId, async () => {
      await logAction(sheets, spreadsheetId, sheetRange, "Тренування", "✅");
      bot.sendMessage(msg.chat.id, MESSAGES.WORKOUT_LOGGED);
    });
  });

  bot.onText(/\/weight/, (msg) => {
    checkOwner(msg.chat.id, ownerChatId, () => {
      requestNumericInput(
        bot,
        msg.chat.id,
        "Вага",
        sheets,
        spreadsheetId,
        sheetRange,
        (w) => MESSAGES.WEIGHT_SAVED(w),
      );
    });
  });
}
