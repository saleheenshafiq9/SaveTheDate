import React from "react";
import "./Caterer.css";

const CatererItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.caterer.image}
          alt={props.caterer.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.caterer.name}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onCatererSelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">{props.caterer.label}</span>
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
