import React from "react";
import { IoPricetags } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import "./Decorator.css";

const DecoratorItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75" id="cardStyle">
        <img
          className="card-img-top"
          src={props.decorator.images[0]?.image}
          alt={props.decorator.title}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">{`${props.decorator.title.substring(0, 25)}`}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onDecoratorSelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">Regular</span>
        </div>
        <div className="card-footer">
          <IoPricetags className="mr-2" />
          {props.decorator.price} BDT
          <br />
          <br />
          <MdLocationPin className="mr-2"/>
          {props.decorator.location}
        </div>
      </div>
    </div>
  );
};

export default DecoratorItem;
