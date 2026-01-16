import { handleUserAction } from "./actions.js";
import { requestNumericInput } from "./handleInput.js";
import { actionsMap } from "./actionsMap.js";
import { MESSAGES } from "./messages.js";
import { checkOwner } from "./checkOwner.js";

function capitalizeAction(action) {
  return action.charAt(0).toUpperCase() + action.slice(1);
}

export function registerCallbacks(
  bot,
  sheets,
  spreadsheetId,
  sheetRange,
  ownerChatId,
) {
  bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;

    checkOwner(
      chatId,
      ownerChatId,
      async () => {
        const data = query.data;
        const [actionKey, type] = data.split("_");

        if (actionsMap[actionKey] && actionsMap[actionKey][type]) {
          const { value, msg } = actionsMap[actionKey][type];
          return handleUserAction(
            bot,
            query,
            capitalizeAction(actionKey),
            value,
            msg,
            sheets,
            spreadsheetId,
            sheetRange,
          );
        }

        if (data === "weight") {
          await bot.deleteMessage(chatId, query.message.message_id);
          requestNumericInput(
            bot,
            chatId,
            "Вага",
            sheets,
            spreadsheetId,
            sheetRange,
            (w) => MESSAGES.WEIGHT_SAVED(w),
          );
        }
      },
      bot,
      query.id,
    );
  });
}
