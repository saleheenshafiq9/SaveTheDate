import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const PhotographyDetail = (props) => {
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
          <button className="btn btn-success" onClick={props.onPhotographySelect}>
            Book Now
          </button>
          <br />
          <br />
          <div className="card-footer">
            <b>Food Menu: </b>
            {props.photography.menuItem}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhotographyDetail;
