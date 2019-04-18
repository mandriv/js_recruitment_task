import React from 'react';

import NewsItemType from '/types/NewsItemType';

export default function NewsItem({ item }) {
  return (
    <li>
      <article className="news">
        <header>
          <h3>{ item.title }</h3>
        </header>
        <section className="newsDetails">
          <ul>
            <li>
              <strong>Section Name:</strong>
              { ` ${item.section}` }
            </li>
            <li>
              <strong>Publication Date:</strong>
              { ` ${item.date}`}
            </li>
          </ul>
        </section>
        <section className="newsActions">
          <a
            href={item.link}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full article
          </a>
          <button
            className="button button-outline"
            type="button"
          >
            Read Later
          </button>
        </section>
      </article>
    </li>
  );
}

NewsItem.propTypes = {
  item: NewsItemType.isRequired,
};
