import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Form1 from '../../forms/Form1';
import MetaTags from 'react-meta-tags';
import fleet from '../../../assets/fleet.png';
import courier from '../../../assets/courier.png';
import drivers from '../../../assets/drivers.png';
import lobbyporcelainfloor1 from '../../../assets/tiles/glazed-porcelain-tiles/lobby-porcelain-floor-tiles-2.png';
import lobbyporcelainfloor2 from '../../../assets/tiles/glazed-porcelain-tiles/lobby-porcelain-floor-tiles-3.png';
import lobbyporcelainfloor3 from '../../../assets/tiles/glazed-porcelain-tiles/lobby-porcelain-floor-tiles-4.png';
import lobbyporcelainfloor4 from '../../../assets/tiles/glazed-porcelain-tiles/lobby-porcelain-floor-tiles-5.png';
import importation from '../../../assets/importation.png';
import HeaderGeneralProduct from '../../header/HeaderGeneralProduct';

import bannerImage from '../../../assets/tiles/glazed-porcelain-tiles/lobby-porcelain-floor-tiles-1.jpeg';
import ServiceCard from '../ServiceCardProduct';
import Footer from '../../footer/Footer';
import '../service.css';

const ProductDetail = () => (
  <div>
    <p>
      Glazed porcelain tiles applied to polished tiles combine the advantages of
      polished tiles and antique tiles, and the surface uses a special formula
      glaze.
    </p>
    <p>
      The glazed surface is as smooth as polished bricks, and the glazed surface
      is rich in patterns like antique bricks, and the colors are thick or
      gorgeous. The convex glaze is screen printed on the surface of the tiles
      to form a discontinuous convex granular glaze, which is fired and then
      polished to make the effect more vivid.
    </p>
    <p>
      make the effect more vivid. Our polished tile manufacturer specializes in
      producing and selling polished tiles in various sizes and styles to suit
      different consumer preferences. You will find your favorite tiles on this
      page.
    </p>
  </div>
);

const Glazed_porcelain_tile = () => {
  const text = 'Glazed Porcelain Tile';

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
              Water absorption rate is under 0.05%.`,
                  }}
                  slug={`/products-glazed_porcelain_tile-${1}`}
                />
                <ServiceCard
                  image={lobbyporcelainfloor2}
                  data={{
                    size: '600*600mm',
                    content: `Thickness is9 9mm.
                Water absorption rate is under 0.05%.`,
                  }}
                  slug={`/products-glazed_porcelain_tile-${2}`}
                />

                <ServiceCard
                  image={lobbyporcelainfloor3}
                  data={{
                    size: '750*1500mm',
                    content: `Thickness is 11mm.
                Water absorption rate is under 0.05%.`,
                  }}
                  slug={`/products-glazed_porcelain_tile-${3}`}
                />
                <ServiceCard
                  image={lobbyporcelainfloor4}
                  data={{
                    size: '800*800mm',
                    content: `Thickness is 10mm.
                Water absorption rate is under 0.05%.`,
                  }}
                  slug={`/products-glazed_porcelain_tile-${4}`}
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

export default Glazed_porcelain_tile;
