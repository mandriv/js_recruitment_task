import React from 'react';

import AppHeader from '/shared/AppHeader';

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
  return (
    <main className="wrapper">
      <AppHeader title="Recruitment task" />
      <ContentControl
        searchQuery="Test"
        activeSection="books"
        activePage={2}
      />
      <section className="container newsContainer">
        <div className="row">
          <NewsList items={TEST_NEWS_DATA} />
          <ReadLaterList items={TEST_NEWS_DATA} />
        </div>
      </section>
    </main>
  );
}
