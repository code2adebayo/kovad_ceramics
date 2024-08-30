import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import MdTime from 'react-ionicons/lib/MdTime';
import logo from '../../assets/logo_white.png';
// import logo from '../../assets/kovad.png';

import phone from '../../assets/phone.svg';
import kovad from '../../assets/kovad.png';
import bolt from '../../assets/bolt.png';
import mail from '../../assets/mail.svg';
import location from '../../assets/location.svg';
import './footer.css';

const Footer = () => (
  <>
    <Fade bottom>
      <footer>
        <div className="footer-container">
          <div className="footer footer-services">
            <h4>Services</h4>

            <Link to="/services-installation" className="white-link">
              <h6>Installation</h6>
            </Link>
            <Link to="/services-maintenance" className="white-link">
              <h6>Maintenance</h6>
            </Link>
            <Link to="/services-repair" className="white-link">
              <h6>Repair</h6>
            </Link>
          </div>

          <div className="footer footer-company">
            <h4>Company</h4>
            <Link to="/about" className="white-link">
              <h6>About Us</h6>
            </Link>
          </div>

          <div className="footer footer-support">
            <h4>Support</h4>
            <Link to="/contact" className="white-link">
              <h6>Contact Us</h6>
            </Link>
          </div>

          <div className="footer footer-quick-contact">
            <h4>Quick Contact</h4>
            <div className="contact-location">
              <img src={location} alt="location icon" />
              <h6>
                142, Lawanson Road, Otun-Oba Bus-stop, <br /> Itire, Lagos,
                Nigeria.
              </h6>
            </div>
            <div className="contact-location">
              <img src={phone} alt="phone icon" />
              <h6 href="tel:234-703-484-9938">07034849938</h6>
            </div>
            <div className="contact-location">
              <img src={mail} alt="mail icon" />
              <h6>info@kovadceramics.com</h6>
            </div>

            <div className="contact-location special">
              <MdTime
                fontSize="2rem"
                color="#fafafa"
                style={{
                  backgroundColor: 'transparent',
                  marginRight: '7px',
                  textAlign: 'center',
                }}
              />
              <h6>Mon - Friday 8am - 5pm</h6>
            </div>
          </div>
        </div>

        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="social">
          <a href="#">
            {' '}
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-instagram" />
          </a>
        </div>

        <div className="copyright">
          <p>© Copyright Kovad Ceremics</p>
        </div>
        <div className="powered">
          <div className="bolt">
            <img src={bolt} alt="bolt icon" />
          </div>
          <span className="px-1">by</span>
          <div className="kovad-icon">
            <a href="https://kovad.net/" target="blank">
              <img src={kovad} alt="kovadlogo" />
            </a>
          </div>
        </div>
      </footer>
    </Fade>
  </>
);

export default Footer;
