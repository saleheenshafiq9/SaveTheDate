import React from "react";
import "./Venue.css";

const VenueItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.venue.image}
          alt={props.venue.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.venue.name}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onVenueSelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">{props.venue.label}</span>
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
