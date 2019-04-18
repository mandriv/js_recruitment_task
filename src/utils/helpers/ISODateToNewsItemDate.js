// would use moment normally, format as in example provided
export default function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNumber = date.getMonth() + 1;
  const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString();
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
