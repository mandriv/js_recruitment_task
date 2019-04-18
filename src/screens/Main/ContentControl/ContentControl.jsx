import React from 'react';
import PropTypes from 'prop-types';

import NewsSectionType from '/types/NewsSectionType';

export default function ContentControl({ control, onUpdate }) {
  return (
    <section className="container filtersContainer">
      <div className="row">
        <div className="column searchColumn">
          <label htmlFor="newsContentSearch">News content search</label>
          <input
            type="search"
            placeholder="News content search"
            id="newsContentSearch"
            value={control.searchQuery}
            name="searchQuery"
            onChange={onUpdate}
          />
        </div>
        <div className="column">
          <label htmlFor="sectionSelect">Section</label>
          <select
            id="sectionSelect"
            name="activeSection"
            value={control.activeSection}
            onChange={onUpdate}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="business">Business</option>
            <option value="culture">Culture</option>
            <option value="sport">Sport</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="column column-20">
          <label htmlFor="activePageSelect">Active Page</label>
          <select
            id="activePageSelect"
            name="activePage"
            value={control.activePage}
            onChange={onUpdate}
          >
            {
              Array
                .from(new Array(control.availablePages), (val, index) => index + 1)
                .map(value => (
                  <option value={value} key={value}>{ value }</option>
                ))
            }
          </select>
        </div>
      </div>
    </section>
  );
}

ContentControl.propTypes = {
  control: PropTypes.shape({
    searchQuery: PropTypes.string.isRequired,
    activeSection: NewsSectionType.isRequired,
    activePage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    availablePages: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
