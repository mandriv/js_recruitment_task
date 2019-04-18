import React from 'react';

import NewsItemType from '/types/NewsItemType';

export default function ReadLaterItem({ item }) {
  return (
    <li>
      <h4 className="readLaterItem-title">{ item.title }</h4>
      <section>
        <a
          href={item.link}
          className="button button-clear"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read
        </a>
        <button
          className="button button-clear"
          type="button"
        >
          Remove
        </button>
      </section>
    </li>
  );
}

ReadLaterItem.propTypes = {
  item: NewsItemType.isRequired,
};
