import { logAction } from "../services/google/sheets.js";
import { getKeyboardByAction } from "./keyboards.js";
import { updateInlineKeyboard, answerQuery } from "../utils/botHelpers.js";

export async function handleUserAction(
  bot,
  query,
  action,
  value,
  successMsg,
  sheets,
  spreadsheetId,
  sheetRange,
) {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  await updateInlineKeyboard(bot, chatId, messageId, [
    [{ text: "⏳ Зберігаю...", callback_data: "processing" }],
  ]);

  try {
    await logAction(sheets, spreadsheetId, sheetRange, action, value);
    await answerQuery(bot, query.id, "✅ Дані збережено!");
    await bot.deleteMessage(chatId, messageId);
    await bot.sendMessage(chatId, successMsg);
  } catch (err) {
    console.error("❌ Помилка:", err);
    await answerQuery(bot, query.id, "❌ Помилка, спробуй ще раз");
    const restoreKeyboard = getKeyboardByAction(action);
    await bot.editMessageReplyMarkup(
      { inline_keyboard: restoreKeyboard },
      { chat_id: chatId, message_id: messageId },
    );
  }
}
