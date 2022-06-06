import React from "react";
import "./Venue.css";

const VenueItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.venue.images[0]?.image}
          alt={props.venue.title}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.venue.title}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onVenueSelect}>
            Preview
          </button>
          <span className="badge badge-warning text-dark">Regular</span>
        </div>
        <div className="card-footer">
          <b>Price: </b>
          {props.venue.price}
          <br />
          <br />
          <b>Location: </b>
          {props.venue.location}
        </div>
      </div>
    </div>
  );
};

export default VenueItem;
