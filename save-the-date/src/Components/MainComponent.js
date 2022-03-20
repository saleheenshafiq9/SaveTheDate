import React from "react";
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";
// import { Route } from "react-router-dom";

const MainComponent = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      {/* <Route path="/" exact render={() => <Header />} /> */}
      {/* <Route path="/about" exact render={() => <b>About</b>} />
      <Route path="/services" exact render={() => <b>Our Services</b>} />
      <Route path="/blogs" exact render={() => <b>Blogs</b>} /> */}
    </div>
  );
};

export default MainComponent;
