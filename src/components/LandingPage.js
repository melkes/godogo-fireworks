import React from "react";
import "../index.css";
import "../style.css";
import logo from '../images/godogo-nose-blue.png';
import { Link } from 'react-router-dom';


export const LandingPage = () => {
  return (
    <body className="container full-height-grow">
      <header className="main-header">
        <a href="/" className="brand-logo">
        <img src={logo} alt="logo" height="130px"/>
        </a>
      </header>

      <section className="home-main-section">
        <div className="img-wrapper">
          <div className="main-image" />
        </div>
      <div className="call-to-action">
      <h1 className="title">Is your dog scared of fireworks?</h1>
      <span className="subtitle">Go Dogo fireworks sound training</span>
      <Link to="/playarea1" className="btn">See it in action</Link>
    </div>
      </section>

    </body>

  );
};
export default LandingPage;