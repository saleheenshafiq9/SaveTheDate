import React,{useState} from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";
import ScheduleCard from "../ScheduleCard";


const CatererDetail = (props) => {
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
    props.onCatererSelect;
    handleCartClick();
  }

  const scheduleAdded = () => {
    setscheduleCard(true);
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.caterer.image} alt={props.caterer.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.caterer.name}
              <span className="badge badge-warning text-dark">
                {props.caterer.label}
              </span>
            </h5>
          </CardTitle>
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
