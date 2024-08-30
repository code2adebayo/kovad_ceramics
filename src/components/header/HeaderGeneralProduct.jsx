import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './headergeneral.css';
import Navbar from '../navbar/Navbar';

// Pass in imported image alias as image prop
// Passing header text as text prop

const HeaderGeneralProduct = ({ image, text, child }) => {
  const headerStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <header>
        <Navbar />
        <div className="header-container">
          <div className="header-text-container-product">
            <div className="flex-position">
              <div style={{ flex: '1' }}>
                <div className="p-5 h-100 flex-column d-flex justify-content-center align-items-center">
                  <h3>{text}</h3>
                  {child}
                </div>
              </div>
              <div id="img-header" style={headerStyle}>
                <p style={{ visibility: 'hidden' }}>nn</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

HeaderGeneralProduct.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderGeneralProduct;
