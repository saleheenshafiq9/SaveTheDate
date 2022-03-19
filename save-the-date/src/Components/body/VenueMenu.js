import React, { Component } from "react";
import VENUES from "../../data/venue";
import VenueItem from "./VenueItem";
import VenueDetail from "./VenueDetail";

class VenueMenu extends Component {
  state = {
    venues: VENUES,
    selectedVenue: null,
  };

  onVenueSelect = (venue) => {
    this.setState({
      selectedVenue: venue,
    });
  };

  render() {
    const venueMenu = this.state.venues.map((item) => {
      return (
        <VenueItem
          venue={item}
          key={item.id}
          VenueSelect={() => this.onVenueSelect(item)}
        />
      );
    });

    let venueDetail = null;
    if (this.state.selectedVenue != null) {
      venueDetail = <VenueDetail venue={this.state.selectedVenue} />;
    }

    return (
      <div className="container" id="venueList">
        <br />
        <br />
        <div className="row">
          <div className="col-6">{venueMenu}</div>
          <div className="col-6">{venueDetail}</div>
        </div>
      </div>
    );
  }
}

export default VenueMenu;
