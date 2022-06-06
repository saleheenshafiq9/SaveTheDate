import React, {useState, useContext} from "react";
import { CartContext } from "../../../contexts/cart-context";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import ScheduleCard from "../ScheduleCard";


const PhotographyDetail = (props) => {
  
  const [scheduleCard, setscheduleCard] = useState(false);
  const { addToCartItems } = useContext(CartContext);
  const { cartPhotoAdded } = useContext(CartContext);

  const addServiceToCart = () => {
    addToCartItems(props.photography);
    cartPhotoAdded(props.photography);
  }

  const cartAdded = () => {
    props.onPhotographySelect;
    addServiceToCart();
    setscheduleCard(true);
  }

  const scheduleAdded = () => {
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.photography.images[0].image} alt={props.photography.title} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.photography.title}
              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h5>
          </CardTitle>
          <CardText>{`${props.photography.description.substring(0, 250)}`}</CardText>
          <button className="btn btn-dark" onClick={props.onPhotographySelect}>
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
            <b>Services: </b>
            {props.photography.menuItem}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotographyDetail;
