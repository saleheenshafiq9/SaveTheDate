import React from "react";
import "./Caterer.css";

const CatererItem = (props) => {
  console.log(props.caterer);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.caterer.images[0]?.image}
          alt={props.caterer.title?props.caterer.title:" Alternate text of  Image"}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.caterer.title}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onCatererSelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">Regular</span>
        </div>
        <div className="card-footer">
          <b>Food Menu: </b>
          {props.caterer.menuItem}
          <br />
          <br />
          <b>Location: </b>
          {props.caterer.location}
        </div>
      </div>
    </div>
  );
};

export default CatererItem;
