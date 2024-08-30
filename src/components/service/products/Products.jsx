import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Form1 from '../../forms/Form1';
import MetaTags from 'react-meta-tags';
import glazed_Porcelain_Tile from '../../../assets/tiles/Glazed_Porcelain_Tile.png';
import rustic_Porcelain_Tile from '../../../assets/tiles/Rustic_Porcelain_Tile.png';
import wood_Look_Tile from '../../../assets/tiles/Wood_Look_Tile.png';
import interior_Wall_Tile from '../../../assets/tiles/Interior_Wall_Tile.png';

import exterior_Wall_Tile from '../../../assets/tiles/Exterior_Wall_Tile.png';
import skirting_Tile from '../../../assets/tiles/Skirting_Tile.png';
import HeaderGeneral from '../../header/HeaderGeneral';
import bannerImage from '../../../assets/tiles/tile-background.png';
// import bannerImage from '../../../assets/services.png';
import ServiceCard from '../ServiceCard';
import Footer from '../../footer/Footer';
import '../service.css';

const Products = () => {
  const text = 'Products';

  return (
    <>
      {/* Metatags  brief explain of  Products for google bots */}
      <MetaTags>
        <title>
          Installation, Maintenance and Repair Service: Kovad Ceramics
        </title>
        <meta
          name="description"
          content="We are a wholly owned indigenous company incorporated in Nigeria to offer superior logistics management services to diverse clients in the public and private sectors."
        />
        <meta property="og:title" content="Logistics Service" />
        <meta
          property="keywords"
          content="fleet management, corporate courier service, training of drivers, import/exportservices, Excellent Logistics and Logistics Services, ells,"
        />
      </MetaTags>

      <HeaderGeneral image={bannerImage} text={text} />
      <main>
        <Fade delay={1000}>
          <section className="service-container">
            <h3 className="section-title">One Stop Tile Collections</h3>
            <div className="service-text">
              <p>
                Kovad Ceramics is a subsidiary company of Kovad Ventures.
                <br /> Kovad Ceramics includes:-
                <br /> Kovad Ceramics Sales of Ceramics Tiles & Marbles
                <br /> Kovad Ceramics Installation & Maintenance of Ceramics
                Tiles & Marbles
                <br /> <br />
              </p>
            </div>
          </section>
        </Fade>
        <section className="services">
          <div className="service-cards-container service-cards-container-quad">
            <ServiceCard
              image={glazed_Porcelain_Tile}
              title={'Glazed Porcelain Tile'}
              slug="/products-glazed_porcelain_tile"
            />
            <ServiceCard
              image={rustic_Porcelain_Tile}
              title={'Rustic Porcelain Tile'}
              slug="/products-rustic_porcelain_tile"
            />
            <ServiceCard
              image={wood_Look_Tile}
              title={'Wood Look Tile'}
              slug="/products-rustic_porcelain_tile"
            />
            <ServiceCard
              image={interior_Wall_Tile}
              title={'Interior Wall Tile'}
              slug="/products-rustic_porcelain_tile"
            />
            <ServiceCard
              image={exterior_Wall_Tile}
              title={'Exterior Wall Tile'}
              slug="/products-rustic_porcelain_tile"
            />
            <ServiceCard
              image={skirting_Tile}
              title={'Skirting Tile'}
              slug="/products-rustic_porcelain_tile"
            />
          </div>
        </section>
        <Form1 contact="" />
      </main>
      <Footer />
    </>
  );
};

export default Products;
