import React, { Component } from "react";
import CatererData from "../../../data/CatererData";
import CatererDetail from "./CatererDetail";
import CatererItem from "./CatererItem";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";

class Caterer extends Component {
  state = {
    caterers: CatererData,
    selectedVenue: null,
    modalOpen: false,
  };

  onCatererSelect = (caterer) => {
    //console.log(venue);
    this.setState({ selectedCaterer: caterer, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finalcaterer = this.state.caterers.map((item) => {
      return (
        <CatererItem
          caterer={item}
          key={item.id}
          onCatererSelect={() => this.onCatererSelect(item)}
        />
      );
    });
    let catererDetail = null;
    if (this.state.selectedCaterer != null) {
      catererDetail = <CatererDetail caterer={this.state.selectedCaterer} />;
    }
    return (
      <div className="container">
        <CardColumns>{finalcaterer}</CardColumns>
        <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
          <ModalBody>{catererDetail}</ModalBody>
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

export default Caterer;
