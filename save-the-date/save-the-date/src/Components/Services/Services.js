import React from "react";
import Venue from "./Venue/Venue";
import Caterer from "./Caterer/Caterer";
import Decorator from "./Decorator/Decorator";
import Photography from "./Photography/Photography";

const Services = (props) => {
  return (
    <div>
      <p>Services</p>
      <Venue />
      <Caterer />
      <Decorator />
      <Photography />
    </div>
  );
};

export default Services;
