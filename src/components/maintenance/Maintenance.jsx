/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
// import Footer from '../template/footer/Footer';
// import Header from '../template/header/Header.jsx';

import style from './maintenance.module.css';

const Maintenance = () => {
  const { message, centerDiv } = style;

  return (
    <>
      <MetaTags>
        <title>Maintenance : Kovad Ceramics</title>
        <meta
          name="description"
          content="Kovad Ceramics Website is under maintenance. Kindly visit  after a while, https://www.kovadceramics.com"
        />
        <meta property="og:title" content="404 Error Page" />
        <meta
          property="keywords"
          content="Kovad Ceramics, maintenance, construction, development .  eghro, business process outsourcing, egbpo, Kindly visit  after a while, https://www.kovadceramics.com "
        />
      </MetaTags>
      {/* <div className="container pt-5">
      <div className="pt-5"><h1 className>Page not Found Click</h1>
        <div><Link className="mt-3" style={{ fontSize: '30px' }} to="/">Go Back Home</Link></div>
      </div>
    </div> */}

      <div style={{ height: '100vh' }}>
        <div className={centerDiv}>
          <div className="">
            <div className={message}>
              <h3 className="text-center">Under Maintenance</h3>
              <h4 className="text-center">
                Our website is currently undergoing scheduled maintenance. We
                Should be back shortly. Thank you for your patience.
                <span role="img" aria-label="face-emoji">
                  {' '}
                  😞
                </span>
              </h4>
              {/* <Link className="my-1 " style={{ fontSize: '20px' }} to="/">Go Back Home</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
