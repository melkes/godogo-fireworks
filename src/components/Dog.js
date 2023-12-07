import React from "react";
import dogWalks from "../images/dog-walks.png"; // import the image

function Dog({ position, alt }) {
  return (
    <img
      className="dog"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      src={dogWalks} // use the imported image
      alt="dog"
    />
  );
}

export default Dog;