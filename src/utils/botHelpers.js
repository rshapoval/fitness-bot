export async function updateInlineKeyboard(bot, chatId, messageId, keyboard) {
  return bot.editMessageReplyMarkup(
    { inline_keyboard: keyboard },
    { chat_id: chatId, message_id: messageId },
  );
}

export async function answerQuery(bot, queryId, text) {
  return bot.answerCallbackQuery(queryId, { text });
}
