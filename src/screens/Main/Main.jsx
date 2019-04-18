import React from 'react';

import AppHeader from '/shared/AppHeader';

import ContentControl from './ContentControl';

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
          <div className="column column-65">
            <h2 className="newsColumnTitle">News List</h2>
            <ul className="newsList">
              <li>
                <article className="news">
                  <header>
                    <h3>Sample news title</h3>
                  </header>
                  <section className="newsDetails">
                    <ul>
                      <li>
                        <strong>Section Name:</strong>
                        {' '}
                        Sample Section
                      </li>
                      <li>
                        <strong>Publication Date:</strong>
                        {' '}
                        06.12.2018
                      </li>
                    </ul>
                  </section>
                  <section className="newsActions">
                    <a href="https://theguardian.com" className="button">Full article</a>
                    <button
                      className="button button-outline"
                      type="button"
                    >
                      Read Later
                    </button>
                  </section>
                </article>
              </li>
            </ul>
          </div>
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
