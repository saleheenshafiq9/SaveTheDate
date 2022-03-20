import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Navigation = () => {
  return (
    <div>
      <Navbar id="navbar">
        <div className="container">
          <NavbarBrand id="navbrand" href="/">
            <b>Home</b>
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/about">
            <b>About</b>
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/services">
            <b>Our Services</b>
          </NavbarBrand>
          <NavbarBrand id="navbrand" href="/blogs">
            <b>Blogs</b>
          </NavbarBrand>
          <NavbarBrand id="navbrand_search" href="/">
            <b>
              <SearchSharpIcon />
            </b>
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
