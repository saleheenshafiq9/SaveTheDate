import React from "react";
import "./Photography.css";

const PhotographyItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.photography.image}
          alt={props.photography.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.photography.name}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onPhotographySelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">{props.photography.label}</span>
        </div>
        <div className="card-footer">
          <b>Services: </b>
          {props.photography.menuItem}
          <br />
          <br />
          <b>Location: </b>
          {props.photography.location}
        </div>
      </div>
    </div>
  );
};

export default PhotographyItem;
