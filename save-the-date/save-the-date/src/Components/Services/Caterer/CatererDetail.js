import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const CatererDetail = (props) => {
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
          <button className="btn btn-success" onClick={props.onCatererSelect}>
            Book Now
          </button>
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
