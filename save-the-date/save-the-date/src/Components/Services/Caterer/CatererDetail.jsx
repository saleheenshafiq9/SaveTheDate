import React, { useState, useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import {FaUserFriends} from "react-icons/fa";
import {MdContactPage, MdLocationPin, MdSettingsPhone} from "react-icons/md";
import {RiAuctionFill} from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import ScheduleCard from "../ScheduleCard";
import GalleryAll from "../../../pages/Profiles/GalleryAll";
import FoodItem from "./FoodItem";
import Alert from "../../Alert";
import ReactCalender from "../../../pages/Profiles/Calender";

const CatererDetail = (props) => {
  const [alert, setAlert] = useState(null);
  const [scheduleCard, setscheduleCard] = useState(false);
  const [timeTable, setTimeTable] = useState(false);
  const { addToCartItems } = useContext(CartContext);
  const { cartCatererAdded } = useContext(CartContext);

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
    addToCartItems(props.caterer);
    cartCatererAdded(props.caterer);
  }

  const cartAdded = () => {
    props.onCatererSelect;
    addServiceToCart();
    setscheduleCard(true);
  }

  const scheduleAdded = () => {
    setTimeTable(timeTable);
  }

  return (

    <div className="bg-light">
      <Card style={{ marginTop: "10px" }} className="w-100">
      <div className="row">
        <div className="col-6">
        <CardImg top src={props.caterer.images[0]?.image} alt={props.caterer.title} height="400px"/>
        </div>
        <div className="col-6">
        <CardImg top src={props.caterer.images[1]?.image} alt={props.caterer.title} height="400px"/>
        </div>
        </div>
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h4>
              {props.caterer.title}

              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h4>
          </CardTitle>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
              <p className="text-secondary">
                    <MdLocationPin /> {props.caterer.location}
                    <br/>
                    <FaUserFriends /> {props.caterer.capacity} People
                    <br />
                    <IoPricetags /> {props.caterer.price} BDT </p>
              </div>
              <div className="col-6 justify-right">
                <button className="btn btn-dark" onClick={props.onCatererSelect}>
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
          <FoodItem items={props.caterer.items} />
          <h4 className="text-center my-4 mb-5">Gallery</h4>
          <GalleryAll id={props.caterer}/>
          <h4 className="text-center mt-5">About Caterer</h4>
          <CardText className="p-4">{props.caterer.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CatererDetail;
