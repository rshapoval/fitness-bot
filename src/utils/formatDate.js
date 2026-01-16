export function formatKyivDateTime(date = new Date()) {
  const dateOptions = {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const timeOptions = {
    timeZone: "Europe/Kyiv",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const [year, month, day] = date
    .toLocaleDateString("en-CA", dateOptions)
    .split("-");

  return {
    date: `${year}-${month}-${day}`,
    time: date.toLocaleTimeString("en-GB", timeOptions),
  };
}
