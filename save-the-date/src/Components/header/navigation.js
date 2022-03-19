import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

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
          <NavbarBrand id="navbrand_search" href="/">
            <SearchSharpIcon />
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
