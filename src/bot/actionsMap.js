import { MESSAGES } from "./messages.js";

export const actionsMap = {
  water: {
    yes: { value: "✅", msg: MESSAGES.WATER_LOGGED },
    no: { value: "🚫", msg: MESSAGES.WATER_SKIPPED },
  },
  meal: {
    yes: { value: "✅", msg: MESSAGES.MEAL_LOGGED },
    no: { value: "🚫", msg: MESSAGES.MEAL_SKIPPED },
  },
  workout: {
    yes: { value: "✅", msg: MESSAGES.WORKOUT_LOGGED },
    no: { value: "🚫", msg: MESSAGES.WORKOUT_SKIPPED },
    rest: { value: "💤", msg: MESSAGES.WORKOUT_REST },
  },
};
