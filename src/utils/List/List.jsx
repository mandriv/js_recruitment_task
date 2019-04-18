import React from 'react';
import PropTypes from 'prop-types';

export default function List({ data, renderItem, renderEmpty }) {
  return (
    <React.Fragment>
      { data.length === 0 && renderEmpty() }
      { data.map(renderItem) }
    </React.Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  renderItem: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func,
};

List.defaultProps = {
  renderEmpty: () => null,
};
