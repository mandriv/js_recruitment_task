import React from 'react';
import PropTypes from 'prop-types';

import List from '/utils/List';
import NewsItemType from '/types/NewsItemType';
import Spinner from '/shared/Spinner';

import NewsItem from './NewsItem';

export default function NewsList({ items, loading, onAddToReadLater }) {
  return (
    <div className="column column-65">
      <h2 className="newsColumnTitle">News List</h2>
      <ul className="newsList">
        { loading ? <Spinner /> : (
          <List
            data={items}
            renderItem={item => (
              <NewsItem
                item={item}
                key={item.id}
                onAddToReadLater={onAddToReadLater}
              />
            )}
            renderEmpty={() => <p>There are no news to display</p>}
          />
        )}
      </ul>
    </div>
  );
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(NewsItemType).isRequired,
  loading: PropTypes.bool.isRequired,
  onAddToReadLater: PropTypes.func.isRequired,
};
