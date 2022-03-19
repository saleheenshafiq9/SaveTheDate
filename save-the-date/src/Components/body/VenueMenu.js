import React, { Component } from "react";
import VENUES from "../../data/venue";
import VenueItem from "./VenueItem";

class VenueMenu extends Component {
  state = {
    venues: VENUES,
  };

  render() {
    const venueMenu = this.state.venues.map((item) => {
      return <VenueItem venue={item} key={item.id} />;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{venueMenu}</div>
        </div>
      </div>
    );
  }
}

export default VenueMenu;
