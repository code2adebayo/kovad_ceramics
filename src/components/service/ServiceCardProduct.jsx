import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './service.css';
import { Link } from 'react-router-dom';

export default function ServiceCardProduct({ image, data }) {
  //   const history = useHistory();
  return (
    <Fade delay={600}>
      {/* <a href="#contact">
        </a> */}
      <div className="service-card product-cards">
        <div className="service-card-image">
          <img src={image} alt="" />
        </div>
        <h3 className="font-weight-bold">{data.size}</h3>
        <p className=" text-center font-weight-light">{data.content}</p>
        <div className=" text-center my-5">
          <button
            disabled
            className="btn btn-outline-warning btn-more-products"
          >
            More Products
          </button>
        </div>
      </div>
    </Fade>
  );
}

ServiceCardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
