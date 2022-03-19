import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar id="navbar">
        <div className="container">
          <NavbarBrand id="navbrand" href="/">
            Home
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/">
            About
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/">
            Our Services
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/">
            Blogs
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
