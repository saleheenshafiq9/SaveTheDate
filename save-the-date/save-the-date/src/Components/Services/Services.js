import React from "react";
import Venue from "./Venue/Venue";
import Caterer from "./Caterer/Caterer";
import Decorator from "./Decorator/Decorator";
import Photography from "./Photography/Photography";
import { FiArrowRight } from "react-icons/fi";

const Services = (props) => {
  return (
    <div>
      <br />
      <h4>
        Explore Venues <FiArrowRight />
      </h4>
      <br />
      <Venue />
      <br /><br />
      <h4>
        Explore Caterers <FiArrowRight />
      </h4>
      <br />
      <Caterer />
      <Decorator />
      <Photography />
    </div>
  );
};

export default Services;
