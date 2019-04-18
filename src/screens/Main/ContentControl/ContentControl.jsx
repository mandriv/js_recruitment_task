import React from 'react';
import PropTypes from 'prop-types';

export default function ContentControl({ searchQuery, activeSection, activePage }) {
  return (
    <section className="container filtersContainer">
      <div className="row">
        <div className="column searchColumn">
          <label htmlFor="newsContentSearch">News content search</label>
          <input
            type="search"
            placeholder="News content search"
            id="newsContentSearch"
            value={searchQuery}
          />
        </div>
        <div className="column">
          <label htmlFor="sectionSelect">Section</label>
          <select id="sectionSelect" value={activeSection}>
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="business">Business</option>
            <option value="culture">Culture</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="column column-20">
          <label htmlFor="activePageSelect">Active Page</label>
          <select id="activePageSelect" value={activePage.toString()}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
    </section>
  );
}

ContentControl.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  activeSection: PropTypes.oneOf([
    'all', 'books', 'business', 'culture', 'sport',
  ]).isRequired,
  activePage: PropTypes.number.isRequired,
};
