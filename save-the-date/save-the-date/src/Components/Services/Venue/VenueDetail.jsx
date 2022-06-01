import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";
import ScheduleCard from "../ScheduleCard";

const VenueDetail = (props) => {
  const [alert, setAlert] = useState(null);
  const [cartText, setcartText] = useState("Add to Cart");
  const [disable, setdisable] = useState(false);
  const [scheduleCard, setscheduleCard] = useState(false);

  const handleCartClick = () => {
    setcartText("Added");
    setdisable(true);
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const cartAdded = () => {
    showAlert("Successfully Added to Cart!","success");
    props.onVenueSelect;
    handleCartClick();
  }

  const scheduleAdded = () => {
    setscheduleCard(!scheduleCard);
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.venue.image} alt={props.venue.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.venue.name}
              <span className="badge badge-warning text-dark">
                {props.venue.label}
              </span>
            </h5>
          </CardTitle>
          <CardText>{props.venue.desc}</CardText>
          <button className="btn btn-dark" onClick={props.onVenueSelect}>
            <a href="mailto:venue@std.com" id="mailto">Contact</a>
          </button>
          <button className="btn btn-success" onClick={cartAdded} disabled={disable}>
            {cartText}
          </button>
          <button className="btn btn-danger" onClick={scheduleAdded}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
          { scheduleCard? <ScheduleCard /> : null }
          <br />
          <br />
          <div className="card-footer">
            <b>Price: </b>
            {props.venue.price}
            <br />
            <br />
            <b>Address: </b>
            {props.venue.address}
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
