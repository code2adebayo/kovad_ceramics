import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
// import MdTime from 'react-ionicons/lib/MdTime';

import bannerImage from '../../../assets/virtual.png';
import enquires from '../../../assets/enquires.png';
import enrollment from '../../../assets/enrollment.png';
import digital from '../../../assets/digital.png';
import connected from '../../../assets/connected.png';
import mail from '../../../assets/mail.svg';
import location from '../../../assets/location.svg';
import partner1 from '../../../assets/partner.png';
import phone from '../../../assets/phone.svg';
import ServiceCard from '../ServiceCard';
import HeaderGeneral from '../../header/HeaderGeneral';
import ConnectedEnterprise from '../../connectedEnterprise/ConnectedEnterprise';
import Form1 from '../../forms/Form1';
import Footer from '../../footer/Footer';
import '../service.css';

const CallCenter = () => {
  const text = 'Call Center Solutions';

  return (
    <>
      <MetaTags>
        <title>Call Center: Kovad Ceramics</title>
        <meta
          name="description"
          content="Excellent strategic megahub limited provides contact centre services for various multinationals, Corporates , SMEs and government agencies and parastatals. "
        />
        <meta property="og:title" content="Call Center" />
        <meta
          property="keywords"
          content="real time agent monitoring, CRM integration, call recording, social, web, chat, email interaction interfaces, inbound and outbound customer service, management services"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />
      <main>
        <section className="service-container">
          <h3 className="section-title">Our Call Center Solutions</h3>
          <div className="service-text">
            <p>
              Excellent strategic megahub limited provides contact centre
              services for various multinationals, Corporates , SMEs and
              government agencies and parastatals.
              <br />
              We provide seamless real time agent monitoring, CRM integration
              with call recording, social, web, chat and email interaction
              interfaces. inbound and outbound customer service management
              services.
              <br />
              Our solutions which are flexible, scalable and cost efficient
              enable you build brand loyalty and boost customer experience.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="service-cards-container">
            <ServiceCard image={enquires} title={'CUSTOMER ENQUIRIES'} />
            <ServiceCard image={enrollment} title={'PRODUCT ENROLLMENT'} />
            <ServiceCard image={digital} title={'DIGITAL MARKETING'} />
            <ServiceCard
              image={connected}
              title={'INBOUND AND OUTBOUND COMUNICATION'}
            />
          </div>
        </section>

        <ConnectedEnterprise />

        <section className="technology-partners">
          <h3 className="section-title">Technology partner</h3>
          <div className="partner-image-container">
            <img src={partner1} alt="partners " />
          </div>
        </section>

        <Form1 contact="" />
      </main>

      <Footer />
    </>
  );
};

export default CallCenter;
