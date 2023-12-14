import React from 'react';
import "../style.css";
import { Link } from 'react-router-dom';

const SmartphoneApp = ({ onSitCommand, onFireworksCommand }) => {
  return (
    <div className="smartphone-app-overlay">
  <Link to="/playarea2" className="app-button" >
    Sit Command
  </Link>      <button className="app-button" onClick={onFireworksCommand}>Fireworks Command</button>
    </div>
  );
};

export default SmartphoneApp;