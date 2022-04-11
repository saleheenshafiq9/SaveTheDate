import React from "react";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../../assets/mirror-ball.png";

const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#FDCA40",
          height: "75px",
        }}
      >
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          <img src={Logo} alt="Logo" width="40px" />
          SaveTheDate
        </NavbarBrand>
        <Nav className="mr-md-5 px-5">
          <NavItem
            style={{
              display: "contents",
            }}
          >
            <NavLink href="#" id="NavLink">
              Home
            </NavLink>
            <NavLink href="#" id="NavLink">
              Services
            </NavLink>
            <NavLink href="#" id="NavLink">
              Blogs
            </NavLink>
            <NavLink href="#" id="NavLink">
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
