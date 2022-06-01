import React, { Component } from "react";
import PhotographyData from "../../../data/PhotographyData";
import PhotographyDetail from "./PhotographyDetail";
import PhotographyItem from "./PhotographyItem";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";

class Photography extends Component {
  state = {
    photographys: PhotographyData,
    selectedVenue: null,
    modalOpen: false,
  };

  onPhotographySelect = (photography) => {
    //console.log(venue);
    this.setState({ selectedPhotography: photography, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finalphotography = this.state.photographys.map((item) => {
      return (
        <PhotographyItem
          photography={item}
          key={item.id}
          onPhotographySelect={() => this.onPhotographySelect(item)}
        />
      );
    });
    let photographyDetail = null;
    if (this.state.selectedPhotography != null) {
      photographyDetail = <PhotographyDetail photography={this.state.selectedPhotography} />;
    }
    return (
      <div className="container">
        <CardColumns>{finalphotography}</CardColumns>
        <Modal isOpen={this.state.modalOpen}>
          <ModalBody>{photographyDetail}</ModalBody>
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

export default Photography;
