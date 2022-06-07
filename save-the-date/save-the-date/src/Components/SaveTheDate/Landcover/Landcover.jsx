import React from "react";
import Yellow from "../../../assets/Images/yellow-bg.jpg";
import Hilton from "../../../assets/Images/Hilton.jpg";
import Bride from "../../../assets/Images/Bride.jpg";
import "./Landcover.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Landcover = (props) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="row">
            <div className="col-6">
              <div className="carousel-item active">
                <img
                  className="d-block"
                  src={Yellow}
                  alt="First slide"
                  width="600px"
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src={Hilton}
                  alt="Second slide"
                  width="600px"
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src={Bride}
                  alt="Third slide"
                  width="600px"
                  height="400px"
                />
              </div>
            </div>
            <div className="col-6 coverword">
              <FaFacebook
                style={{ fontSize: "30px", margin: "20px" }}
                id="icons"
              />
              <FaInstagram
                style={{
                  fontSize: "30px",
                  marginRight: "20px",
                }}
                id="icons"
              />
              <FaTwitter style={{ fontSize: "30px" }} id="icons" />
              <br />
              Planning for wedding, birthday or your success party? Let's-
              <br />
              <br />
              <br />
              <h3 className="tagline">MAKE EACH OCCASION A FESTIVAL</h3>
              <br />
              <br />
              <Link to="/partytype">
                <button type="button" className="btn btn-dark btn-lg">
                  Start Planning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landcover;
