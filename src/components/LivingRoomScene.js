import React from "react";
import Dog from "../components/Dog";
import backgroundImageUrl from "../images/playarea.png";

function LivingRoomScene() {
  return (
    <div className="living-room-scene">
      {/* Background image */}
      <img src={backgroundImageUrl} alt="Living room background" />

      {/* Dog image with initial position */}
      <Dog
        position={{ top: 100, left: 200 }}
        src={`../public/images/dog-walks.png`}
        alt="Dog"
      />

      {/* TV screen with initial image */}
      {/* <TvScreen src={initialTvScreenImage} alt="TV screen" /> */}

      {/* Smartphone app overlay */}
      {/* <SmartphoneApp /> */}
    </div>
  );
}
export default LivingRoomScene;