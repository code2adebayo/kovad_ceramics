import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import bannerImage from '../../../assets/slide3.png';
import consulting from '../../../assets/fleet.png';
import recruitment from '../../../assets/recruitment.png';
import payroll from '../../../assets/payroll.png';
import training from '../../../assets/training.png';
import HeaderGeneral from '../../header/HeaderGeneral';
import Form1 from '../../forms/Form1';
import Assessment from '../../assessment/Assessment';
import ServiceCard from '../ServiceCard';
import Footer from '../../footer/Footer';
import '../service.css';

const HumanResource = () => {
  const text = 'Human Resource Outsourcing';

  return (
    <>
      <MetaTags>
        <title>Human Resources: Kovad Ceramics</title>
        <meta
          name="description"
          content="Our Human Capital Management Consultancy offers HR consultancy, training and outsourcing services to various organizations in the Pubic and Private Sectors. "
        />
        <meta property="og:title" content="Human Resources" />
        <meta
          property="keywords"
          content="Human Resource Consultancy,
    Management Training ,Strategic Planning, Management efficiency, Performance Measurement, Customer Service, Leadership,Team Building,
    Industrial Engineering Training,  Outsourcing of Professional, Temporary,Contract staff"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />

      <main>
        <section className="service-container">
          <h3 className="section-title">Our Human Resource Outsourcing</h3>
          <div className="service-text">
            <p>
              Our Human Capital Management Consultancy offers HR consultancy,
              training and outsourcing services to various organizations in the
              Pubic and Private Sectors.
              <br /> <br /> Our consultants are professionals with proven
              expertise in all the key areas of Human Resource Management. We
              are an highly experienced team of dynamic individuals with over
              100 years combined experience in Business and People Management.{' '}
              <br /> <br />
              With the increasingly flexible and highly volatile corporate
              landscape, our Clients rely on us to provide a dedicated approach
              to providing customized HR solutions to meet their specific needs.
            </p>
          </div>
        </section>

        <section className="services">
          <div className="service-cards-container">
            <ServiceCard image={consulting} title={'CONSULTING'} />
            <ServiceCard image={recruitment} title={'RECRUITMENT'} />
            <ServiceCard image={payroll} title={'PAYROLL AND BENEFITS'} />
            <ServiceCard image={training} title={'TRAINING'} />
          </div>
        </section>

        <section>
          <Assessment id={'pink-shade'} />
        </section>

        <Form1 contact="" />
      </main>
      <Footer />
    </>
  );
};

export default HumanResource;
