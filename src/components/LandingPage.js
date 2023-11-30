import React from "react";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <p className="text-wrapper">Is your dog scared of fireworks?</p>
        <div className="overlap-group">
          <p className="p">Go Dogo fireworks sound training</p>
          <div className="rectangle" />
          <div className="text-wrapper-2">See it in action</div>
        </div>
        <img
          className="element-godogo-nose"
          alt="Element godogo nose"
          src="https://c.animaapp.com/HXTTUAgs/img/2021-godogo-nose-blue-1@2x.png"
        />
        <img className="image" alt="Image" src="https://c.animaapp.com/HXTTUAgs/img/image-1.png" />
      </div>
    </div>
  );
};
export default LandingPage;