import React, {useContext} from "react";
import { UserContext } from "../../contexts/user-context";
import useFetch from "../../hooks/useFetch"
import {tokenUrl} from "../../constants/constants"

const Gallery = () => {
  const {token}= useContext(UserContext);
  const {data:venueData,error,loading}=useFetch(tokenUrl,"/api/venues/me",token?.access);
  console.log(venueData);

    return (
        <>
<div className="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src={tokenUrl + venueData?.images[0]?.image} alt="First slide" data-target="#carouselExample" data-slide-to="0" height="200px"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src={tokenUrl + venueData?.images[1]?.image} alt="First slide" data-target="#carouselExample" data-slide-to="1" height="200px"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src={tokenUrl + venueData?.images[2]?.image} alt="First slide" data-target="#carouselExample" data-slide-to="2" height="200px"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src={tokenUrl + venueData?.images[3]?.image} alt="First slide" data-target="#carouselExample" data-slide-to="3" height="200px"/>
  </div>
</div>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExample" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExample" data-slide-to="1"></li>
            <li data-target="#carouselExample" data-slide-to="2"></li>
            <li data-target="#carouselExample" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={tokenUrl + venueData?.images[0]?.image} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tokenUrl + venueData?.images[1]?.image} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tokenUrl + venueData?.images[2]?.image} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={tokenUrl + venueData?.images[3]?.image} alt="Fourth slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Gallery;