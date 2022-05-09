import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const VenueDetail = (props) => {
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={props.venue.image} alt={props.venue.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>
            <h5>
              {props.venue.name}
              <span className="badge badge-warning text-dark">
                {props.venue.label}
              </span>
            </h5>
          </CardTitle>
          <CardText>{props.venue.desc}</CardText>
          <button className="btn btn-dark" onClick={props.onVenueSelect}>
            Contact
          </button>
          <button className="btn btn-success" onClick={props.onVenueSelect}>
            Book Now
          </button>
          <br />
          <br />
          <div className="card-footer">
            <b>Price: </b>
            {props.venue.price}
            <br />
            <br />
            <b>Address: </b>
            {props.venue.address}
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
