import React from "react";
import "../style.css";
import "../index.css";
import logo from '../images/godogo-nose-blue.png';

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
      <a href="/see-it-in-action" className="btn">See it in action</a>
    </div>
      </section>
    </body>

  );
};
export default LandingPage;