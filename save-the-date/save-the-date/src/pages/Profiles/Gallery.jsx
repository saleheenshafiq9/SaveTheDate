import React from "react";

const Gallery = () => {
    return (
        <>
<div className="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src="/venue/One.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="0"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src="/venue/Two.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="1"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src="/venue/Three.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="2"/>
  </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img className="w-100" src="/venue/Four.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="3"/>
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
              <img className="d-block w-100" src="/venue/One.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/venue/Two.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/venue/Three.jpg" alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/venue/Four.jpg" alt="Fourth slide"/>
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