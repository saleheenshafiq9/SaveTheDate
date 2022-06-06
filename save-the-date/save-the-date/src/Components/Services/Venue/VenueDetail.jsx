import React, { useState, useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import ScheduleCard from "../ScheduleCard";
import Gallery from "../../../pages/Profiles/Gallery";

const VenueDetail = (props) => {
  const [scheduleCard, setscheduleCard] = useState(false);

  const { addToCartItems } = useContext(CartContext);
  const { cartVenueAdded } = useContext(CartContext);

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
  
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.venue.images[0].image} alt={props.venue.title} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.venue.title}
              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h5>
          </CardTitle>
          <CardText>{props.venue.description}</CardText>
          <button className="btn btn-dark" onClick={props.onVenueSelect}>
            <a href="mailto:venue@std.com" id="mailto">Contact</a>
          </button>
          <button className="btn btn-success" onClick={cartAdded}>
            Book Now
          </button>
          <button className="btn btn-danger" onClick={scheduleAdded}>
            Set Appointment
          </button>
          { scheduleCard? <ScheduleCard /> : null }
          <br />
          <br />
          <div className="card-footer">
            <b>Price: </b>
            {props.venue.price}
            <br />
            <br />
            <b>Address: </b>
            {props.venue.location}
            <br />
            <br />
            <b>Capacity: </b>
            {props.venue.capacity}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default VenueDetail;
