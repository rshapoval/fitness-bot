import { formatKyivDateTime } from "../../utils/formatDate.js";

export async function logAction(
  sheets,
  spreadsheetId,
  sheetRange,
  action,
  value = "",
  notes = "",
) {
  const { date, time } = formatKyivDateTime();

  const values = [[date, time, action, value, notes]];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetRange}!A:E`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });

  console.log("✅ Записано:", values);
}
