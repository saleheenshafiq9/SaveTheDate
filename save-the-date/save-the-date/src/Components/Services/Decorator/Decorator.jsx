import React, { Component } from "react";
import DecoratorData from "../../../data/DecoratorData";
import DecoratorDetail from "./DecoratorDetail";
import DecoratorItem from "./DecoratorItem";
import { CardColumns, Modal, ModalBody, ModalFooter } from "reactstrap";
import { FaWindowClose } from "react-icons/fa";
import GetReq from "../../../helper/getReq";

class Decorator extends Component {
  state = {
    decorators: DecoratorData,
    selectedVenue: null,
    modalOpen: false,
    newDecorators: []
  };

  componentDidMount() {
    GetReq("/api/decorators").then((res) => {
      this.setState({newDecorators: res});
    })
  }

  onDecoratorSelect = (decorator) => {
    //console.log(venue);
    this.setState({ selectedDecorator: decorator, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    const finaldecorator = this.state.newDecorators.map((item) => {
      return (
        <DecoratorItem
          decorator={item}
          key={item.id}
          onDecoratorSelect={() => this.onDecoratorSelect(item)}
        />
      );
    });
    let decoratorDetail = null;
    if (this.state.selectedDecorator != null) {
      decoratorDetail = <DecoratorDetail decorator={this.state.selectedDecorator} />;
    }
    return (
      <div className="container">
        <CardColumns>{finaldecorator}</CardColumns>
        <Modal isOpen={this.state.modalOpen} className="modal-xl">
          <ModalBody>{decoratorDetail}</ModalBody>
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

export default Decorator;
