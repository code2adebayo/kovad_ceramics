import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import marble from '../../assets/marble_3_dark.png';
import tiles from '../../assets/tiles.png';
import maintenance_2 from '../../assets/maintenance_2.png';
import fleet from '../../assets/fleet.png';
import './bodyhome.css';
import ConnectedEnterprise from '../connectedEnterprise/ConnectedEnterprise';
import Assessment from '../assessment/Assessment';
import Fade from 'react-reveal/Fade';
import Form1 from '../forms/Form1';

const BodyHome = () => (
  <>
    <main className="body-home">
      <section>
        <div className="d-flex justify-content-center pt-4">
          <h3 className="section-title">Some of our services are</h3>
        </div>

        <div className="card-container">
          <Fade bottom delay={1000}>
            <div className="one">
              <div className="service-img">
                <img src={marble} alt="marble" />
              </div>

              <h4>Wholesales & Retails of Marbles</h4>
              <p>Wholesales & Retails of Marbles</p>

              <div className="learn-more">
                <Link
                  to="/products-rustic_porcelain_tile"
                  className="text-decoration-none"
                >
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1200}>
            <div className="one">
              <div className="service-img bus">
                <img src={tiles} alt="tiles" style={{ maxWidth: '60px' }} />
              </div>

              <h4>Wholesales & Retails of Ceramic Tiles</h4>
              <p>Wholesales & Retails of Ceramic Tiles</p>

              <div className="learn-more">
                <Link
                  to="/products-glazed_porcelain_tile"
                  className="text-decoration-none"
                >
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={1400}>
            <div className="one">
              <div className="service-img">
                <img src={maintenance_2} alt="maintenance_2" />
              </div>

              <h4>Maintenance & Housekeeping of Tiles & Marbles</h4>
              <p>Maintenance & Housekeeping of Tiles & Marbles</p>

              <div className="learn-more" id="three">
                <Link
                  to="/services-maintenance"
                  className="text-decoration-none"
                >
                  <i className="fa fa-long-arrow-right" />
                  <p className="excellent-red">Learn more</p>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
        <span className="see-more">
          <Link to="/services" className="text-decoration-none">
            <button className="see-more-btn">See More</button>
          </Link>
        </span>
      </section>

      {/* <section className="why-choose pt-5">
        <h3 className="text-right pr-5 excellent-red">Why choose our BPO?</h3>

        <Assessment id={'pink-shade'} />
      </section>

      <ConnectedEnterprise />

      <Fade bottom>
        <section id="pink-shade" className="quote-container">
          <div className="quote px-3">
            <div className="quote-text-container">
              <h3>
                Looking for a better way to transport your staffs to & from the
                office
              </h3>
              <p>Engage Excellent Logistics Fleet Management Service today</p>
              <button>Get a Quote</button>
            </div>
            <div className="quote-image">
              <div className="quote-image-container">
                <img src={fleet} alt="always connected" />
              </div>
            </div>
          </div>
        </section>
      </Fade> */}

      <Form1 contact="" />
    </main>
  </>
);

export default BodyHome;
