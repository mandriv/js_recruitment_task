import React from 'react';

import AppHeader from '/shared/AppHeader';

import ContentControl from './ContentControl';
import NewsList from './NewsList';

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
          <NewsList />
          <div className="column column-55">
            <h2 className="newsColumnTitle">Read Later</h2>
            <ul className="readLaterList">
              <li>
                <h4 className="readLaterItem-title">Saved news title</h4>
                <section>
                  <a href="https://theguardian.com" className="button button-clear">Read</a>
                  <button
                    className="button button-clear"
                    type="button"
                  >
                    Remove
                  </button>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
