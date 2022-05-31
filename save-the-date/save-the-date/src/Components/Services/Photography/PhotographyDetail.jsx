import React, {useState} from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";


const PhotographyDetail = (props) => {
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
    props.onPhotographySelect;
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
            Contact
          </button>
          <button className="btn btn-success" onClick={cartAdded}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={props.onPhotographySelect}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
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
