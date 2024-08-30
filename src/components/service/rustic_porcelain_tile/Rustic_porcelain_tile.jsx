import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Form1 from '../../forms/Form1';
import MetaTags from 'react-meta-tags';
import fleet from '../../../assets/fleet.png';
import courier from '../../../assets/courier.png';
import drivers from '../../../assets/drivers.png';
import lobbyporcelainfloor1 from '../../../assets/tiles/Rustic-Porcelain-Tile/outdoor-rustic-floor-tile-2.png';
import lobbyporcelainfloor2 from '../../../assets/tiles/Rustic-Porcelain-Tile/outdoor-rustic-floor-tile-3.png';
import lobbyporcelainfloor3 from '../../../assets/tiles/Rustic-Porcelain-Tile/outdoor-rustic-floor-tile-4.png';
import importation from '../../../assets/importation.png';
import HeaderGeneralProduct from '../../header/HeaderGeneralProduct';

import bannerImage from '../../../assets/tiles/Rustic-Porcelain-Tile/outdoor-rustic-floor-tile-1.jpeg';
import ServiceCard from '../ServiceCardProduct';
import Footer from '../../footer/Footer';
import '../service.css';

const ProductDetail = () => (
  <div>
    <p>
      Rustic tile designs are produced using a variety of different tile
      materials and can be given an authentic look by staining and carving with
      natural materials such as stone or clay.
    </p>
    <p>
      Use rustic tiles in residential and commercial applications to create or
      complement a rustic, classic design style. The natural tones and finishes
      of these tiles provide a strong contrast to the modern design.
    </p>
  </div>
);
const Rustic_porcelain_tile = () => {
  const text = 'Rustic Porcelain Tile';

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

      <HeaderGeneralProduct
        image={bannerImage}
        text={text}
        child={<ProductDetail />}
      />
      <main className="product-content">
        <Fade delay={1000}>
          <section className="service-container">
            <h2 className="section-title text-center">Selectable Sizes</h2>

            <section className="services">
              <div className="service-cards-container service-cards-container-quad">
                <ServiceCard
                  image={lobbyporcelainfloor1}
                  data={{
                    size: '600*1200mm',
                    content: `Thickness is 10mm.
                    Water absorption rate is
                    under 0.05%.`,
                  }}
                  slug={`/products-rustic_porcelain_tile-${1}`}
                />
                <ServiceCard
                  image={lobbyporcelainfloor2}
                  data={{
                    size: '600*600mm',
                    content: `Thickness is 16mm.
                    Water absorption rate is
                    under 0.05%.`,
                  }}
                  slug={`/products-rustic_porcelain_tile-${2}`}
                />

                <ServiceCard
                  image={lobbyporcelainfloor3}
                  data={{
                    size: '800*800mm',
                    content: `Thickness is 10mm.
                    Water absorption rate is
                    under 0.05%.`,
                  }}
                  slug={`/products-rustic_porcelain_tile-${3}`}
                />
              </div>
            </section>
          </section>
        </Fade>

        <Form1 contact="" />
      </main>
      <Footer />
    </>
  );
};

export default Rustic_porcelain_tile;
