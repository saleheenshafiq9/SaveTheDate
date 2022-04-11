import React, { Component } from "react";
import Homepage from "./Homepage/Homepage";
import Landcover from "./Landcover/Landcover";

export default class SaveTheDate extends Component {
  render() {
    return (
      <div>
        <Landcover />
        <Homepage />
      </div>
    );
  }
}
