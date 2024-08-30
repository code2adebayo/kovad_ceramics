import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './headergeneral.css';
import Navbar from '../navbar/Navbar';

// Pass in imported image alias as image prop
// Passing header text as text prop

const HeaderGeneral = ({ image, text }) => {
  const headerStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <header>
        <Navbar />
        <div className="header-container">
          <div className="header-text-container" style={headerStyle}>
            <h3>{text}</h3>
          </div>
        </div>
      </header>
    </>
  );
};

HeaderGeneral.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderGeneral;
