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
        <Link to="/" id="NavLink"  className="mr-auto ml-md-5 mb-5 Brand">
          
            <img src={Logo} alt="Logo" width="40px" />
              SaveTheDate
          
        </Link>
        
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
              { currentUser.userType=='customer'&& <Link to="customerProfile " id="NavLink"><img src="../../../Customer/user.png" id="proficon"/></Link>}
              { currentUser.userType=='venue'&& <Link to="venueProfile " id="NavLink" ><img src="../../../Venue/one.jpg" id="proficon"/></Link> } 
              { currentUser.userType=='catering'&& <Link to="cateringProfile " id="NavLink" ><img src="../../../Caterer/b.jpg" id="proficon"/></Link> } 
              { currentUser.userType=='decorator'&& <Link to="decoratorProfile " id="NavLink" ><img src="../../../Decorator/one.jpg" id="proficon"/></Link> } 
              { currentUser.userType=='contentmaker'&& <Link to="photographyProfile " id="NavLink" ><img src="../../../Photography/one.jpg" id="proficon"/></Link> } 
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
