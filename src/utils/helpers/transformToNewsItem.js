import ISODateToNewsItemDate from './ISODateToNewsItemDate';

const transformToNewsItem = result => ({
  id: result.id,
  title: result.webTitle,
  section: result.sectionName,
  date: ISODateToNewsItemDate(result.webPublicationDate),
  link: result.webUrl,
});

export default transformToNewsItem;
