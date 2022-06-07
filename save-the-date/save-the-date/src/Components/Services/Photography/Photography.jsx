import React, { Component } from "react";
import PhotographyData from "../../../data/PhotographyData";
import PhotographyDetail from "./PhotographyDetail";
import PhotographyItem from "./PhotographyItem";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";
import GetReq from "../../../helper/getReq";

class Photography extends Component {
  state = {
    photographys: PhotographyData,
    selectedVenue: null,
    modalOpen: false,
    newPhotographys: []
  };

  componentDidMount() {
    GetReq("/api/contentmakers").then((res) => {
      this.setState({newPhotographys: res});
    })
  }

  onPhotographySelect = (photography) => {
    //console.log(venue);
    this.setState({ selectedPhotography: photography, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finalphotography = this.state.newPhotographys.map((item) => {
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
        <Modal isOpen={this.state.modalOpen} className="modal-xl">
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
