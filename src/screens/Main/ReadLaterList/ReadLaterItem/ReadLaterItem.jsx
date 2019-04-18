import React from 'react';
import PropTypes from 'prop-types';

import NewsItemType from '/types/NewsItemType';

export default function ReadLaterItem({ item, onRemoveReadLaterItem }) {
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
          onClick={() => onRemoveReadLaterItem(item)}
        >
          Remove
        </button>
      </section>
    </li>
  );
}

ReadLaterItem.propTypes = {
  item: NewsItemType.isRequired,
  onRemoveReadLaterItem: PropTypes.func.isRequired,
};
