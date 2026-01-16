export function checkOwner(
  chatId,
  ownerChatId,
  callback,
  bot = null,
  queryId = null,
) {
  if (String(chatId) !== String(ownerChatId)) {
    if (bot && queryId) {
      bot.answerCallbackQuery(queryId, { text: "⛔ Немає доступу" });
    }
    return false;
  }
  callback();
  return true;
}
