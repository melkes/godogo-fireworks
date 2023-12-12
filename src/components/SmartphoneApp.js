import React from 'react';
import "../style.css";

const SmartphoneApp = ({ onSitCommand, onFireworksCommand }) => {
  return (
    <div className="smartphone-app-overlay">
      <button className="app-button" onClick={onSitCommand}>Sit Command</button>
      <button className="app-button" onClick={onFireworksCommand}>Fireworks Command</button>
    </div>
  );
};

export default SmartphoneApp;