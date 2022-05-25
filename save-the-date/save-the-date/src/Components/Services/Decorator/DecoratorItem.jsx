import React from "react";
import "./Decorator.css";

const DecoratorItem = (props) => {
  //console.log(props);
  return (
    <div>
      <div className="card w-75">
        <img
          className="card-img-top"
          src={props.decorator.image}
          alt={props.decorator.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.decorator.name}</h5>
          <br />
          <button className="btn btn-dark" onClick={props.onDecoratorSelect}>
            Preview
          </button>
          <span class="badge badge-warning text-dark">{props.decorator.label}</span>
        </div>
        <div className="card-footer">
          <b>Themes: </b>
          {props.decorator.menuItem}
          <br />
          <br />
          <b>Location: </b>
          {props.decorator.location}
        </div>
      </div>
    </div>
  );
};

export default DecoratorItem;