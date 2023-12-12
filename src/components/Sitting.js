import React from "react";
import Dog from "../components/Dog";
import backgroundImageUrl from "../images/playarea.png";
import { Link } from 'react-router-dom';

function LivingRoomScene() {
  return (
    <div className="living-room-scene">
      {/* Background image */}
      <img src={backgroundImageUrl} alt="Living room background" />

      {/* Dog image with initial position */}
      {/* <Dog position={{ top: 100, left: 200 }} alt="Dog" /> */}
      <div className="call-to-action">
      <Link to="/playarea2" className="btn">See it in action</Link>
    </div>
      {/* TV screen with initial image */}
      {/* <TvScreen src={initialTvScreenImage} alt="TV screen" /> */}

      {/* Smartphone app overlay */}
      {/* <SmartphoneApp /> */}
    </div>
  );
}
export default LivingRoomScene;