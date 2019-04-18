import React from 'react';
import PropTypes from 'prop-types';

import List from '/utils/List';
import NewsItemType from '/types/NewsItemType';

import NewsItem from './NewsItem';

export default function NewsList({ items }) {
  return (
    <div className="column column-65">
      <h2 className="newsColumnTitle">News List</h2>
      <ul className="newsList">
        <List
          data={items}
          renderItem={item => <NewsItem item={item} key={item.id} />}
        />
      </ul>
    </div>
  );
}

NewsList.propTypes = {
  items: PropTypes.arrayOf(NewsItemType).isRequired,
};
