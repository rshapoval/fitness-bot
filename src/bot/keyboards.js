export function getKeyboardByAction(action) {
  switch (action) {
    case "Вода":
      return [
        [
          { text: "✅ Випив", callback_data: "water_yes" },
          { text: "🚫 Пропустив", callback_data: "water_no" },
        ],
      ];
    case "Їжа":
      return [
        [
          { text: "✅ Поїв", callback_data: "meal_yes" },
          { text: "🚫 Пропустив", callback_data: "meal_no" },
        ],
      ];
    case "Тренування":
      return [
        [
          { text: "✅ Зробив", callback_data: "workout_yes" },
          { text: "🚫 Пропустив", callback_data: "workout_no" },
          { text: "💤 Вихідний", callback_data: "workout_rest" },
        ],
      ];
    case "Вага":
      return [[{ text: "📏 Записати вагу", callback_data: "weight" }]];
    default:
      return [];
  }
}
