import React from "react";
import Header from "./Header/Header";
import SaveTheDate from "./SaveTheDate/SaveTheDate";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <SaveTheDate />
      </div>
    </div>
  );
};

export default Main;
