import React, {useState, useContext} from "react";
import { CartContext } from "../../../contexts/cart-context";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";
import ScheduleCard from "../ScheduleCard";


const PhotographyDetail = (props) => {
  const [alert, setAlert] = useState(null);
  const [cartText, setcartText] = useState("Add to Cart");
  const [disable, setdisable] = useState(false);
  const [scheduleCard, setscheduleCard] = useState(false);
  const { addToCartItems } = useContext(CartContext);

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

  const addServiceToCart = () => addToCartItems(props.photography);

  const cartAdded = () => {
    showAlert("Successfully Added to Cart!","success");
    props.onPhotographySelect;
    handleCartClick();
    addServiceToCart();
  }

  const scheduleAdded = () => {
    setscheduleCard(true);
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.photography.image} alt={props.photography.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.photography.name}
              <span className="badge badge-warning text-dark">
                {props.photography.label}
              </span>
            </h5>
          </CardTitle>
          <button className="btn btn-dark" onClick={props.onPhotographySelect}>
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
            <b>Services: </b>
            {props.photography.menuItem}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotographyDetail;
