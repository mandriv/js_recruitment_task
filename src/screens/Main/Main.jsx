import React from 'react';

import AppHeader from '/shared/AppHeader';
import ErrorBanner from '/shared/ErrorBanner';

import useNews from './hooks/useNews';
import useReadLater from './hooks/useReadLater';
import ContentControl from './ContentControl';
import NewsList from './NewsList';
import ReadLaterList from './ReadLaterList';

export default function Main() {
  const {
    loading, error, control, handleControlUpdate, news,
  } = useNews();

  const { items, add, remove } = useReadLater();

  return (
    <main className="wrapper">
      <AppHeader title="Recruitment task" />
      <ErrorBanner message={error} />
      <ContentControl
        control={control}
        onUpdate={handleControlUpdate}
      />
      <section className="container newsContainer">
        <div className="row">
          <NewsList items={news} loading={loading} onAddToReadLater={add} />
          <ReadLaterList items={items} onRemoveReadLaterItem={remove} />
        </div>
      </section>
    </main>
  );
}
