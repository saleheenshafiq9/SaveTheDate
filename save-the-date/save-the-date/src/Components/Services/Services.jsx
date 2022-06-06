import React from "react";
import VenueShow from "./Venue/VenueShow";
import CatererShow from "./Caterer/CatererShow";
import DecoratorShow from "./Decorator/DecoratorShow";
import PhotographyShow from "./Photography/PhotographyShow";

const Services = (props) => {
  return (
    <div>
      <VenueShow />
      <CatererShow />
      <DecoratorShow />
      <PhotographyShow />
    </div>
  );
};

export default Services;
