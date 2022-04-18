import React, { Component } from "react";
import VenueData from "../../../data/VenueData";
import VenueItem from "./VenueItem";

class Venue extends Component {
  state = {
    venues: VenueData,
  };

  render() {
    const finalvenue = this.state.venues.map((item) => {
      return <VenueItem venue={item} key={item.id} />;
    });
    return <div className="container">{finalvenue}</div>;
  }
}

export default Venue;
