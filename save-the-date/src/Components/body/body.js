import React from "react";
import VenueMenu from "./VenueMenu";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blogs from "./Blogs";
import { Route, Redirect } from "react-router-dom";

const body = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/services" exact component={Services} />
      <Route path="/blogs" exact component={Blogs} />
    </div>
  );
};

export default body;
