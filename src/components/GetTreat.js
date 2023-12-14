import React from "react";
import "../index.css";
import "../style.css";
import SmartphoneApp from "./SmartphoneApp";
import { Link } from 'react-router-dom';

function GetTreat() {
  return (
    <div className="get-treat">
      <div className="call-to-action">
      <Link to="/playarea1" className="btn">Start over</Link>
    </div>
      <SmartphoneApp/>
    </div>
    
  );
}
export default GetTreat;