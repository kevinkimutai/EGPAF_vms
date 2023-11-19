export function getTimeFromTimestamp(timestamp) {
  const parsedDate = new Date(timestamp);

  // Extracting hours, minutes, and seconds
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const seconds = parsedDate.getSeconds();

  // Formatting to HH:mm:ss
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedTime;
}
