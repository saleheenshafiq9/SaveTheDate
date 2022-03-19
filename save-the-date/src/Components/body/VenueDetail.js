import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const VenueDetail = (props) => {
  return (
    <div>
      <Card
        style={{
          margin: "12px",
          backgroundColor: "#fdca40",
          fontFamily: "'Proza Libre', sans-serif",
        }}
      >
        <CardImg top src={props.venue.image} alt={props.venue.name} />
        <CardBody
          style={{
            textAlign: "left",
          }}
        >
          <CardTitle>
            <b>{props.venue.name}</b>
          </CardTitle>
          <CardText>
            <p>{props.venue.address}</p>
            <p>
              <b>{props.venue.price}/-</b>
            </p>
          </CardText>
          <hr />
          <LoadComments comments={props.venue.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default VenueDetail;
