import React from 'react';
import PropTypes from 'prop-types';

import logo from '/assets/logo.png';

export default function AppHeader({ title }) {
  return (
    <header className="appHeader">
      <div className="container appHeader-inner">
        <img src={logo} alt="company logo" className="companyLogo" />
        <h1 className="appTitle">
          { title }
        </h1>
      </div>
    </header>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
