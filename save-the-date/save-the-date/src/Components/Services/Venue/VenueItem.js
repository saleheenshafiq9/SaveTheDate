import React from "react";

const VenueItem = (props) => {
  console.log(props);
  return (
    <div>
      <div className="card w-25">
        <img
          className="card-img-top"
          src={props.venue.image}
          alt={props.venue.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.venue.name}</h5>
          <span class="badge badge-danger">{props.venue.label}</span>
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
      <br />
    </div>
  );
};

export default VenueItem;
