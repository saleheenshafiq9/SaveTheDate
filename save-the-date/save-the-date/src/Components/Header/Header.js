import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from "../../assets/mirror-ball.png";
import { UserContext } from "../../contexts/user-context";
const Header = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser);
  
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
            <Link to="/" id="NavLink">
              Home
            </Link>
            <Link to="/services" id="NavLink">
              Services
            </Link>
            <Link to="/blogs" id="NavLink">
              Blogs
            </Link>
            <Link to="/contact" id="NavLink">
              Contact Us
            </Link>
            <Link to="/navbarnew" id="NavLink">
              Auth
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
