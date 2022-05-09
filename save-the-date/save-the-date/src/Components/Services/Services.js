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
      <br /><br />
      <h4>
        Explore Decorators <FiArrowRight />
      </h4>
      <br />
      <Decorator />
      <br /><br />
      <h4>
        Explore Photographers <FiArrowRight />
      </h4>
      <br />
      <Photography />
    </div>
  );
};

export default Services;
