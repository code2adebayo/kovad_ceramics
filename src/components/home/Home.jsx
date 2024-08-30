import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import BodyHome from '../Body/BodyHome';
import HeaderHome from '../header/HeaderHome';
import Footer from '../footer/Footer';

const Home = () => (
  <>
    <MetaTags>
      <title>Tiles & Wares: Kovad Ceramics</title>
      <meta
        name="description"
        content="at Kovad Ceramics, we are your number 1 shop for tiles, marbles and  ceramics"
      />
      <meta property="og:title" content="Kovad Ceramics" />
      <meta property="keywords" content="tiles, marbles, ceramics, Lagos" />
    </MetaTags>

    <HeaderHome />
    <BodyHome />
    <Footer />
  </>
);

export default Home;
