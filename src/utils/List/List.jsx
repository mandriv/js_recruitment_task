import React from 'react';
import PropTypes from 'prop-types';

export default function List({ data, renderItem }) {
  return (
    <React.Fragment>
      { data.map(renderItem) }
    </React.Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  renderItem: PropTypes.func.isRequired,
};
