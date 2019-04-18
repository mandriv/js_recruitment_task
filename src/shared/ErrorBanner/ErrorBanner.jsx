import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function ErrorBanner({ message }) {
  return (
    <div className={`container error-banner${message ? '' : ' hidden'}`}>
      <p>{ message }</p>
    </div>
  );
}

ErrorBanner.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};
