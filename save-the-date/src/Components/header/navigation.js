import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Route, Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggle} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mx-5 px-5" navbar>
                <NavItem className="px-5">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem className="px-5">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <NavItem className="px-5">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </NavItem>
                <NavItem className="px-5">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </NavItem>
                {/* <NavItem className="px-5">
                <Link>
                  <SearchSharpIcon />
                </Link>
              </NavItem> */}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* <Route path="/" exact render={() => <Navigation />} />
        <Route path="/about" exact render={() => <b>About</b>} />
        <Route path="/services" exact render={() => <b>Our Services</b>} />
        <Route path="/blogs" exact render={() => <b>Blogs</b>} /> */}
      </div>
    );
  }
}

export default Navigation;
