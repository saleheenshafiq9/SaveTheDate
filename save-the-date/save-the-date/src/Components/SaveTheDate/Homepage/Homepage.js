import React from "react";
import Venue from "../../Services/Venue/Venue";
import { FiArrowRight } from "react-icons/fi";
import Caterer from "../../Services/Caterer/Caterer";

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
    </div>
  );
};

export default Homepage;
