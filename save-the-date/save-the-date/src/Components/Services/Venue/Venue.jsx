import React, { Component } from "react";
import VenueData from "../../../data/VenueData";
import VenueItem from "./VenueItem";
import VenueDetail from "./VenueDetail";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";

class Venue extends Component {
  state = {
    venues: VenueData,
    selectedVenue: null,
    modalOpen: false,
  };

  componentDidMount() {

  }
  
  onVenueSelect = (venue) => {
    //console.log(venue);
    this.setState({ selectedVenue: venue, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finalvenue = this.state.venues.map((item) => {
      return (
        <VenueItem
          venue={item}
          key={item.id}
          onVenueSelect={() => this.onVenueSelect(item)}
        />
      );
    });
    let venueDetail = null;
    if (this.state.selectedVenue != null) {
      venueDetail = <VenueDetail venue={this.state.selectedVenue} />;
    }
    return (
      <div className="container">
        <CardColumns>{finalvenue}</CardColumns>
        <Modal isOpen={this.state.modalOpen} >
          <ModalBody>{venueDetail}</ModalBody>
          <ModalFooter>
            <FaWindowClose
              className="close"
              color="red"
              onClick={this.toggleModal}
            />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Venue;
