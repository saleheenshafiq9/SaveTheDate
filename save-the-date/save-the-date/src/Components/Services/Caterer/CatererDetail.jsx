import React,{useState, useContext} from "react";
import { CartContext } from "../../../contexts/cart-context";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import ScheduleCard from "../ScheduleCard";


const CatererDetail = (props) => {
  const [scheduleCard, setscheduleCard] = useState(false);
  const { addToCartItems } = useContext(CartContext);
  const { cartCatererAdded } = useContext(CartContext);

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
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.caterer.images[0].image} alt={props.caterer.title} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.caterer.title}
              <span className="badge badge-warning text-dark">
                Regular
              </span>
            </h5>
          </CardTitle>
          <CardText>{`${props.caterer.description.substring(0, 250)}`}</CardText>
          <button className="btn btn-dark" onClick={props.onCatererSelect}>
          <a href="mailto:venue@std.com" id="mailto">Contact</a>
          </button>
          <button className="btn btn-success" onClick={cartAdded} >
            Book Now
          </button>
          <button className="btn btn-danger" onClick={scheduleAdded}>
            Set Appointment
          </button>
          { scheduleCard? <ScheduleCard /> : null }
          <br />
          <br />
          <div className="card-footer">
            <b>Food Menu: </b>
            {props.caterer.menuItem}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CatererDetail;
