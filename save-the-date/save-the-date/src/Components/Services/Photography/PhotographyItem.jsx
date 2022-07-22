import React from "react";
import { IoPricetags } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import "./Photography.css";

const PhotographyItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75" id="cardStyle">
        <img
          className="card-img-top"
          src={props.photography.images[0]?.image}
          alt={props.photography.title}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.photography.title}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onPhotographySelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">Regular</span>
        </div>
        <div className="card-footer">
          <IoPricetags className="mr-2"/>
          {props.photography.price} BDT
          <br /><br />
        <MdLocationPin className="mr-2"/>
          {props.photography.location}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default PhotographyItem;
