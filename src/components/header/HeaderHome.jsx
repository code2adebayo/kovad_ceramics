import React, { Fragment } from 'react';
// import MdTime from 'react-ionicons/lib/MdTime';
import Navbar from '../navbar/Navbar';
// import phone from '../../assets/phone.svg';
// import mail from '../../assets/mail.svg';
import Slide from '../slide/Slide';
import './headerhome.css';

const HeaderHome = () => (
  <>
    <header className="header-home">
      <Slide />
      <Navbar />
    </header>
  </>
);

export default HeaderHome;
