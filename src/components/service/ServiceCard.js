import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './service.css';
import { Link, useHistory } from 'react-router-dom';

export default function ServiceCard({ image, title, slug = '/' }) {
  const history = useHistory();
  return (
    <Fade delay={600}>
      {/* <a href="#contact">
        </a> */}
      <div className="service-card" onClick={() => history.push(`${slug}`)}>
        <div className="service-card-image">
          <img src={image} alt="" />
        </div>
        <h4>{title}</h4>
      </div>
    </Fade>
  );
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
