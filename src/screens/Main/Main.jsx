import React from 'react';

import AppHeader from '/shared/AppHeader';

import useNews from './hooks/useNews';
import ContentControl from './ContentControl';
import NewsList from './NewsList';
import ReadLaterList from './ReadLaterList';

const TEST_NEWS_DATA = [
  {
    id: '123',
    title: 'Test Title',
    section: 'books',
    date: '05.05.2012',
    link: 'https://google.com',
  },
  {
    id: '124',
    title: 'Test Title 2',
    section: 'sport',
    date: '06.05.2012',
    link: 'https://google.pl',
  },
];

export default function Main() {
  const { control, news } = useNews();

  return (
    <main className="wrapper">
      <AppHeader title="Recruitment task" />
      <ContentControl
        searchQuery={control.searchQuery}
        activeSection={control.activeSection}
        activePage={control.activePage}
      />
      <section className="container newsContainer">
        <div className="row">
          <NewsList items={news} />
          <ReadLaterList items={TEST_NEWS_DATA} />
        </div>
      </section>
    </main>
  );
}
