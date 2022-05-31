import React,{useState} from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";

const CatererDetail = (props) => {
  const [alert, setAlert] = useState(null);

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
            Contact
          </button>
          <button className="btn btn-success" onClick={cartAdded}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={props.onVenueSelect}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
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
