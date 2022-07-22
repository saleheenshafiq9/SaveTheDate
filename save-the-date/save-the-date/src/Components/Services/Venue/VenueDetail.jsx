import React, { useState, useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import {FaUserFriends} from "react-icons/fa";
import {MdContactPage, MdLocationPin, MdSettingsPhone} from "react-icons/md";
import {RiAuctionFill} from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import ScheduleCard from "../ScheduleCard";
import GalleryAll from "../../../pages/Profiles/GalleryAll";
import ReactCalender from "../../Calender";
import Alert from "../../Alert";

const VenueDetail = (props) => {
  const [alert, setAlert] = useState(null);

  const [scheduleCard, setscheduleCard] = useState(false);
  const [timeTable, setTimeTable] = useState(false);

  const { addToCartItems } = useContext(CartContext);
  const { cartVenueAdded } = useContext(CartContext);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
}

const timeAdded = () => {
    showAlert("Schedule Appointment Confirmed!","success");
}

  const addServiceToCart = () => {
    addToCartItems(props.venue);
    cartVenueAdded(props.venue);
  }

  const cartAdded = () => {
    props.onVenueSelect;
    addServiceToCart();
    setscheduleCard(!scheduleCard);
  }

  const scheduleAdded = () => {
    setTimeTable(!timeTable);
  }

  return (
    <div className="bg-light">
      <Card style={{ marginTop: "10px"}} className="w-100">
        <div className="row">
        <div className="col-6">
        <CardImg top src={props.venue.images[0].image} alt={props.venue.title} height="400px"/>
        </div>
        <div className="col-6">
        <CardImg top src={props.venue.images[1].image} alt={props.venue.title} height="400px"/>
        </div>
        </div>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h4>
              {props.venue.title}
              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h4>
          </CardTitle>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
              <p className="text-secondary">
                    <MdLocationPin /> {props.venue.location}
                    <br/>
                    <FaUserFriends /> {props.venue.capacity} People
                    <br />
                    <IoPricetags /> {props.venue.price} BDT </p>
              </div>
              <div className="col-6 justify-right">
                <button className="btn btn-dark" onClick={props.onVenueSelect}>
                 <a href="mailto:venue@std.com" id="mailto"><MdContactPage className="mr-2"/>Contact</a>
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
          <div className="text-center mt-5">
            { timeTable? <ReactCalender /> : null}
            { timeTable? <button className="btn btn-success" onClick={timeAdded}>Confirm</button> : null}
            <Alert alert={alert} />
          </div>
          <br />
          <br />
          <h4 className="text-center my-4 mb-5">Gallery</h4>
          <GalleryAll id={props.venue}/>
          <h4 className="text-center mt-5">About Venue</h4>
          <CardText className="p-4">{props.venue.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default VenueDetail;
