import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DecoratorDetail = (props) => {
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
          <button className="btn btn-success" onClick={props.onDecoratorSelect}>
            Book Now
          </button>
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
