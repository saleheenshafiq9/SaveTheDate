import React,{useState, useContext} from "react";
import { CartContext } from "../../../contexts/cart-context";
import { Link } from "react-router-dom";

import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";
import ScheduleCard from "../ScheduleCard";
import { UserContext } from "../../../contexts/user-context";


const CatererDetail = (props) => {
  const {currentUser} = useContext(UserContext);
  const [alert, setAlert] = useState(null);
  const [cartText, setcartText] = useState("Add to Cart");
  const [disable, setdisable] = useState(false);
  const [scheduleCard, setscheduleCard] = useState(false);
  const { addToCartItems } = useContext(CartContext);
  const { cartCatererAdded } = useContext(CartContext);

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
    addToCartItems(props.caterer);
    cartCatererAdded(props.caterer);
  }
  const cartAdded = () => {
    showAlert("Successfully Added to Cart!","success");
    props.onCatererSelect;
    handleCartClick();
    addServiceToCart();
  }

  const scheduleAdded = () => {
    setscheduleCard(true);
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
          <button className="btn btn-success" onClick={cartAdded} disabled={disable}>
          {cartText}
          </button>
          <button className="btn btn-danger" onClick={scheduleAdded}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
          { disable? <button className="btn btn-dark">
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
            </button> : null }
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
