import React, {useState, useContext} from "react";

import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import ScheduleCard from "../ScheduleCard";


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
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.decorator.images[0].image} alt={props.decorator.title} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.decorator.title}
              <span className="badge badge-warning text-dark">
                Regular              
              </span>
            </h5>
          </CardTitle>
          <CardText>{props.decorator.description}</CardText>
          <button className="btn btn-dark" onClick={props.onDecoratorSelect}>
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
            <b>Themes: </b>
            {props.decorator.menuItem}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DecoratorDetail;
