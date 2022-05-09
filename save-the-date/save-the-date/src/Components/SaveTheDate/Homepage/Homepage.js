import React from "react";
import Venue from "../../Services/Venue/Venue";
import { FiArrowRight } from "react-icons/fi";
import Caterer from "../../Services/Caterer/Caterer";
import Decorator from "../../Services/Decorator/Decorator";
import Photography from "../../Services/Photography/Photography";

const Homepage = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>
        Explore Venues <FiArrowRight />
      </h4>
      <br />
      <Venue />
      <br />
      <br />
      <br />
      <h4>
        Explore Caterers <FiArrowRight />
      </h4>
      <br />
      <Caterer />
      <br />
      <br />
      <br />
      <h4>
        Explore Decorators <FiArrowRight />
      </h4>
      <br />
      <Decorator />
      <br />
      <br />
      <br />
      <h4>
        Explore Photographers <FiArrowRight />
      </h4>
      <br />
      <Photography />
    </div>
  );
};

export default Homepage;
