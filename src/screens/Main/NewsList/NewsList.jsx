import React from 'react';

export default function NewsList() {
  return (
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
  );
}
