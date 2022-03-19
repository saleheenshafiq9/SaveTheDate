import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const VenueItem = (props) => {
  console.log(props);
  return (
    <div>
      <Card
        style={{
          margin: "10px",
          fontFamily: "'Proza Libre', sans-serif",
        }}
      >
        <CardBody>
          <CardImg
            width="100%"
            alt={props.venue.name}
            src={props.venue.image}
            style={{
              opacity: "0.8",
            }}
          />
          <CardImgOverlay>
            <CardTitle
              style={{
                backgroundColor: "#353535",
                color: "#fdca40",
                fontSize: "22px",
                cursor: "pointer",
                padding: "20px",
              }}
              onClick={props.VenueSelect}
            >
              {props.venue.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default VenueItem;
