import React, { Component } from "react";
import VenueData from "../../../data/VenueData";
import VenueItem from "./VenueItem";
import VenueDetail from "./VenueDetail";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";
import GetReq from "../../../helper/getReq";

class Venue extends Component {
  state = {
    venues: VenueData,
    selectedVenue: null,
    modalOpen: false,
    newVenues: []
  };

  componentDidMount() {
    GetReq("/api/venues").then((res) => {
      this.setState({newVenues: res});
      console.log(res);
      console.log(this.state.newVenues);
    })
  }
  
  onVenueSelect = (newVenue) => {
    //console.log(venue);
    this.setState({ selectedVenue: newVenue, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finalvenue = this.state.newVenues.map((item) => {
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
