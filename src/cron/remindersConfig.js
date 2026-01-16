import { getKeyboardByAction } from "../bot/keyboards.js";

export const reminders = [
  {
    action: "Вода",
    times: [
      "45 6 * * *",
      "45 9 * * *",
      "45 12 * * *",
      "15 16 * * *",
      "0 19 * * *",
      "15 20 * * *",
    ],
    message: "💧 Час пити воду!",
    keyboard: getKeyboardByAction("Вода"),
  },
  {
    action: "Їжа",
    times: [
      "0 7 * * *",
      "0 10 * * *",
      "0 13 * * *",
      "30 16 * * *",
      "15 19 * * *",
      "30 20 * * *",
    ],
    message: "🍗 Час поїсти!",
    keyboard: getKeyboardByAction("Їжа"),
  },
  {
    action: "Тренування",
    times: ["0 18 * * *"],
    message: "🏋️‍♂️ Час на тренування!",
    keyboard: getKeyboardByAction("Тренування"),
  },
  {
    action: "Вага",
    times: ["50 6 * * 1"],
    message: "⚖️ Пора зважитись!",
    keyboard: getKeyboardByAction("Вага"),
  },
];
