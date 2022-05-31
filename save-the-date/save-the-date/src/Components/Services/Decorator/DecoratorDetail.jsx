import React, {useState} from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Alert from "../../Alert";

const DecoratorDetail = (props) => {
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
    props.onDecoratorSelect;
  }

  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.decorator.image} alt={props.decorator.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.decorator.name}
              <span className="badge badge-warning text-dark">
                {props.decorator.label}
              </span>
            </h5>
          </CardTitle>
          <button className="btn btn-dark" onClick={props.onDecoratorSelect}>
            Contact
          </button>
          <button className="btn btn-success" onClick={cartAdded}>
            Add to Cart
          </button>
          <button className="btn btn-danger" onClick={props.onDecoratorSelect}>
            Set Appointment
          </button>
          <Alert alert={alert}/>
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
