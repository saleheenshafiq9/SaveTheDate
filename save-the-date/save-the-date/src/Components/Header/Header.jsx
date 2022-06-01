import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Logo from "../../assets/mirror-ball.png";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { UserContext } from "../../contexts/user-context";
import Logout from "../../pages/Login/Logout";

const Header = () => {
  const {currentUser} = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);

  const clickDropdown = () => {
    setDropdown(!dropdown);
  }
  //console.log(currentUser);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#FDCA40",
          height: "100px",
        }}
      >
        <NavbarBrand href="/" className="mr-auto ml-md-5 mb-4 Brand">
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
            {currentUser ? (
            <>
              { currentUser.userType=='customer'&& <Link to="customerProfile " id="NavLink">CustomerProfile</Link>}
              { currentUser.usertype=='venue'&& <Link to="venueProfile " id="NavLink" >VenueProfile</Link> } 
              { currentUser.usertype=='catering'&& <Link to="cateringProfile " id="NavLink" >Caterer</Link> } 
              { currentUser.usertype=='decorator'&& <Link to="decoratorProfile " id="NavLink" >Decorator</Link> } 
              { currentUser.usertype=='contentmaker'&& <Link to="photographyProfile " id="NavLink" >Photograper</Link> } 
              <Logout />
            </>
             ) : (<Link id="NavLink" to='/login'>Sign In
              </Link>
            )}
            <a onClick={clickDropdown}><CartIcon /></a>
          </NavItem>
        </Nav>
      </Navbar>
      {dropdown ? <CartDropdown /> : null }
    </div>
  );
};

export default Header;
