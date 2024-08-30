import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import HeaderGeneral from '../header/HeaderGeneral';
import BodyContact from '../Body/BodyContact';
import contact from '../../assets/contact.png';
import Footer from '../footer/Footer';

const Contact = () => {
  const text = 'Contact Us';
  return (
    <>
      <MetaTags>
        <title>Contact: Kovad Ceramics</title>
        <meta
          name="description"
          content="At Kovad Ceramics, at 142, Lawanson Road, Otun-Oba  Bus-stop, Itire, Lagos, Nigeria. Working with you and for you in partnership to find lasting solutions"
        />
        <meta property="og:title" content="Contact" />
        <meta
          property="keywords"
          content="Kovad Ceramics contact,Kovad Ceramics address, Logistics , Kovad Ceramics phone, haulage Lagos"
        />
      </MetaTags>

      <HeaderGeneral image={contact} text={text} />
      <BodyContact />
      <Footer />
    </>
  );
};

export default Contact;
