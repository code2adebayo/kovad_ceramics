import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import ServiceCard from '../ServiceCard';

import bannerImage from '../../../assets/others-banner.png';
import business from '../../../assets/business.png';
import general from '../../../assets/general.png';
import supply from '../../../assets/supply.png';
import HeaderGeneral from '../../header/HeaderGeneral';
import Form1 from '../../forms/Form1';
import Footer from '../../footer/Footer';
import './otherservices.css';

const OtherServices = () => {
  const text = 'Other Business Services';

  return (
    <>
      <MetaTags>
        <title>Other Business Services: Kovad Ceramics</title>
        <meta
          name="description"
          content="Kovad Ceramics is structured and equipped to provide the following business support services "
        />
        <meta property="og:title" content="Other Business Services" />
        <meta
          property="keywords"
          content="business management, general contract, supply chain management,"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />
      <main>
        <section className="service-container">
          <h3 className="section-title">Our Other Business Services</h3>

          <div className="service-text">
            <p>
              Kovad Ceramics is structured and equipped to provide the following
              business support services:
            </p>
          </div>
        </section>

        <section className="services">
          <div className="service-cards-container">
            <ServiceCard image={business} title={'BUSINESS MANAGEMENT'} />
            <ServiceCard image={general} title={'GENERAL CONTRACT'} />
            <ServiceCard image={supply} title={'SUPPLY CHAIN MANAGEMENT'} />
          </div>
        </section>

        <Form1 contact="" />
      </main>

      <Footer />
    </>
  );
};

export default OtherServices;
