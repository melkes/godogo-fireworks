import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom';

const SmartphoneApp = ({ onSitCommand, onFireworksCommand }) => {
  return (
    <div className="smartphone-app-overlay">
  <Link to="/playarea2" className="app-button" >
    Sit Command
  </Link>   
  <Link to="/playarea3" className="app-button" >Fireworks Command
</Link>
  <Link to="/playarea4" className="app-button" >Give Treat
  </Link>
    </div>
  );
};

export default SmartphoneApp;