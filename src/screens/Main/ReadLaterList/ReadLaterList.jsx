import React from 'react';
import PropTypes from 'prop-types';

import List from '/utils/List';
import NewsItemType from '/types/NewsItemType';

import ReadLaterItem from './ReadLaterItem';

export default function ReadLaterList({ items, onRemoveReadLaterItem }) {
  return (
    <div className="column column-55">
      <h2 className="newsColumnTitle">Read Later</h2>
      <ul className="readLaterList">
        <List
          data={items}
          renderItem={item => (
            <ReadLaterItem
              item={item}
              key={item.id}
              onRemoveReadLaterItem={onRemoveReadLaterItem}
            />
          )}

          renderEmpty={() => <p>{ 'You don\'t have any saved articles' }</p>}
        />
      </ul>
    </div>
  );
}

ReadLaterList.propTypes = {
  items: PropTypes.arrayOf(NewsItemType).isRequired,
  onRemoveReadLaterItem: PropTypes.func.isRequired,
};
