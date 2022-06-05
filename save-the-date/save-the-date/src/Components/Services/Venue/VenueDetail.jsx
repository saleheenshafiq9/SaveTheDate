import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../contexts/cart-context";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Alert from "../../Alert";
import ScheduleCard from "../ScheduleCard";
import { UserContext } from "../../../contexts/user-context";


const VenueDetail = (props) => {
  const {currentUser} = useContext(UserContext);

  const [alert, setAlert] = useState(null);
  const [cartText, setcartText] = useState("Add to Cart");
  const [disable, setdisable] = useState(false);
  const [scheduleCard, setscheduleCard] = useState(false);

  const { addToCartItems } = useContext(CartContext);
  const { cartVenueAdded } = useContext(CartContext);

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

  const addServiceToCart = () => {
    addToCartItems(props.venue);
    cartVenueAdded(props.venue);
  }

  const cartAdded = () => {
    showAlert("Successfully Added to Cart!","success");
    props.onVenueSelect;
    handleCartClick();
    addServiceToCart();
  }

  const scheduleAdded = () => {
    setscheduleCard(!scheduleCard);
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
          <button className="btn btn-success" onClick={cartAdded} disabled={disable}>
            {cartText}
          </button>
          <button className="btn btn-danger" onClick={scheduleAdded}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
          { disable? <Button className="btn btn-dark text-center">
          {currentUser ? (
            <>
              { currentUser.userType=='customer'&& <Link to="/customerProfile " className="text-light text-decoration-none">Go to Profile</Link>}
              { currentUser.userType=='venue'&& <Link to="venueProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='catering'&& <Link to="cateringProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='decorator'&& <Link to="decoratorProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='contentmaker'&& <Link to="photographyProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
            </>
             ) : (<Link to='/login' className="text-light text-decoration-none">Sign In
             </Link>
           )}

            </Button> : null }
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
