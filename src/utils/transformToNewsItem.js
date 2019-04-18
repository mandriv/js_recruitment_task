const formatDate = (dateString) => {
  // would use moment normally, format as in example provided
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNumber = date.getMonth() + 1;
  const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString();
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const transformToNewsItem = result => ({
  id: result.id,
  title: result.webTitle,
  section: result.sectionName,
  date: formatDate(result.webPublicationDate),
  link: result.webUrl,
});

export default transformToNewsItem;
