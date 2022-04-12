import React from "react";
import Yellow from "../../../assets/Images/yellow-bg.jpg";
import Hilton from "../../../assets/Images/Hilton.jpg";
import Modern from "../../../assets/Images/Modern.jpg";
import "./Landcover.css";
import { Button } from "reactstrap";

const Landcover = (props) => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-9">
                <img
                  className="d-block"
                  src={Yellow}
                  alt="First slide"
                  width="800px"
                  height="550px"
                  id="cover"
                />
              </div>
              <div className="col-3 start">
                <Button color="dark" size="lg">
                  Start Exploring
                </Button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={Hilton}
                  alt="Second slide"
                  height="600px"
                />
              </div>
              <div className="col-6">
                <img
                  className="d-block w-100"
                  src={Modern}
                  alt="Third slide"
                  height="600px"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item"></div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Landcover;
