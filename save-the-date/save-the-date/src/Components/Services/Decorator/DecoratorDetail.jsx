import React, { useState, useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { GiPartyFlags } from "react-icons/gi";
import {MdContactPage, MdLocationPin, MdSettingsPhone} from "react-icons/md";
import {RiAuctionFill} from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import ScheduleCard from "../ScheduleCard";
import GalleryAll from "../../../pages/Profiles/GalleryAll";


const DecoratorDetail = (props) => {
  const [scheduleCard, setscheduleCard] = useState(false);
  const { addToCartItems } = useContext(CartContext);
  const { cartDecoratorAdded } = useContext(CartContext);

  const addServiceToCart = () => {
    addToCartItems(props.decorator);
    cartDecoratorAdded(props.decorator);
  }

  const cartAdded = () => {
    props.onDecoratorSelect;
    addServiceToCart();
    setscheduleCard(true);
  }

  const scheduleAdded = () => {
    
  }

  return (
    <div className="bg-light">
      <Card style={{ marginTop: "10px" }}className="w-100">
      <div className="row">
        <div className="col-6">
        <CardImg top src={props.decorator.images[0].image} alt={props.decorator.title} height="400px"/>
        </div>
        <div className="col-6">
        <CardImg top src={props.decorator.images[1].image} alt={props.decorator.title} height="400px"/>
        </div>
        </div>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h4>
              {props.decorator.title}
              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h4>
          </CardTitle>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
              <p className="text-secondary">
                    <MdLocationPin /> {props.decorator.location}
                    <br/>
                    <GiPartyFlags /> Modern, Classic, Traditional
                    <br />
                    <IoPricetags /> {props.decorator.price} BDT </p>
              </div>
              <div className="col-6 justify-right">
                <button className="btn btn-dark" onClick={props.onDecoratorSelect}>
                 <a href="mailto:decorator@std.com" id="mailto"><MdContactPage className="mr-2"/>Contact</a>
                </button>
                <button className="btn btn-success" onClick={cartAdded}>
                 <RiAuctionFill className="mr-2"/>Book Now
                </button>
                <button className="btn btn-danger" onClick={scheduleAdded}>
                  <MdSettingsPhone className="mr-2"/>Set Appointment
                </button>
              </div>
            </div>
          </div>
          { scheduleCard? <ScheduleCard /> : null }
          <br />
          <br />
          <h4 className="text-center my-4 mb-5">Gallery</h4>
          <GalleryAll id={props.decorator}/>
          <h4 className="text-center mt-5">About Decorator</h4>
          <CardText className="p-4">{props.decorator.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DecoratorDetail;
