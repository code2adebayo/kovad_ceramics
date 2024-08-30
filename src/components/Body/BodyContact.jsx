import React from 'react';
import mail from '../../assets/mail-red.svg';
import location from '../../assets/location-red.svg';
import phone from '../../assets/phone-red.svg';
import hours from '../../assets/hours-red.svg';
import './bodycontact.css';
import Form2 from '../forms/Form2';

const BodyContact = () => (
  <main>
    <section>
      <h3 className="section-title">Locate Us</h3>
      <div className="contact-items-container">
        <div className="contact-item">
          <div className="contact-image-container">
            <img src={location} alt="location icon" />
          </div>
          <h6>
            142, Lawanson Road, Otun-Oba, <br />
            Bus-stop, Itire, Lagos, Nigeria.
          </h6>
        </div>
        <div className="contact-item">
          <div className="contact-image-container">
            <img src={phone} alt="phone icon" style={{ color: 'blue' }} />
          </div>
          <h6 href="tel:234-807-467-9938">07034849938</h6>
        </div>
        <div className="contact-item">
          <div className="contact-image-container">
            <img src={mail} alt="mail icon" />
          </div>
          <h6>info@kovadceramics.com</h6>
        </div>
        <div className="contact-item">
          <div className="contact-image-container">
            <img src={hours} alt="work hours icon" style={{ color: 'blue' }} />
          </div>
          <h6>Mon - Friday 8am - 5pm</h6>
        </div>
      </div>
    </section>

    <section>
      <div className="contact-group2">
        <div className="contact-social-container">
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
          <a href="#">
            {' '}
            <i className="fa fa-linkedin-square" />
          </a>
        </div>
        <div className="form2-container">
          <Form2 />
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4413.701864518562!2d3.3364704476591145!3d6.510457627410366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e9da5216d91%3A0x51f363a4be7323da!2s142%20Lawanson%20Rd%2C%20otunoba%20102215%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2snl!4v1697962072570!5m2!1sen!2snl"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.588782614201!2d3.4042637143740095!3d6.446809495335944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b24571cb903%3A0x76a230111f4905f4!2s27A%20Macarthy%20Street%2C%20Lagos%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1583366303570!5m2!1sen!2sng"
            title="Kovad Ceramics physical location"
            width="1040"
            height="560"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen=""
          />
        </div>
      </div>
    </section>
  </main>
);

export default BodyContact;
