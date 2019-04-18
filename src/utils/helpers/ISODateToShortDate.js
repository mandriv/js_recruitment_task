// would use moment normally
export default function formatDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate();
  const monthNumber = date.getMonth() + 1;
  const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
