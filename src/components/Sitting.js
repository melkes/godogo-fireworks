import React from "react";
import "../index.css";
import "../style.css";
import SmartphoneApp from "./SmartphoneApp";
import { Link } from 'react-router-dom';
function Sitting() {
  return (
    <div className="sitting">
      <div className="call-to-action">
      <Link to="/playarea1" className="btn">Start over</Link>
    </div>
      {/* Background image */}

      {/* Dog image with initial position */}
      {/* <Dog position={{ top: 100, left: 200 }} alt="Dog" /> */}

    {/* <div className="call-to-action">
      <Link to="/playarea2" className="btn">See it in action</Link>
    </div> */}

      {/* TV screen with initial image */}
      {/* <TvScreen src={initialTvScreenImage} alt="TV screen" /> */}

      {/* Smartphone app overlay */}
      {/* <SmartphoneApp /> */}
      <SmartphoneApp/>
    </div>
    
  );
}
export default Sitting;