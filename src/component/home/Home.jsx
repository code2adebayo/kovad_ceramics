import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import homeCss from './home.module.css';
class Home extends Component {
  state = {};
  render() {
    const { excellentColor } = homeCss;
    return (
      <>
        {/* indexing */}
        <MetaTags>
          <title>Kovad Ceramics: Business Process Outsourcing</title>
          <meta
            name="description"
            content="At excellent logistics and haulage services, we understand the value of expertise, speciality and have continously upheld them"
          />
          <meta property="og:title" content="Kovad Ceramics" />
          <meta
            property="keywords"
            content="logistics ,haulage services, customer service, Lagos"
          />
        </MetaTags>

        <div className="container-fluid">
          <h2 className={`text-center ${excellentColor} pt-4`}>Home View</h2>
          <a href="/about-us">About uS</a>
          <Link to="/about-us">About Us</Link>
        </div>
      </>
    );
  }
}

export default Home;
