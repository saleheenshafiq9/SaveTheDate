import React from "react";

const Gallery = () => {
    return (
        <>
<div class="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src="/venue/One.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="0"/>
  </div>
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src="/venue/Two.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="1"/>
  </div>
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src="/venue/Three.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="2"/>
  </div>
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src="/venue/Four.jpg" alt="First slide" data-target="#carouselExample" data-slide-to="3"/>
  </div>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="carouselExample" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExample" data-slide-to="1"></li>
            <li data-target="#carouselExample" data-slide-to="2"></li>
            <li data-target="#carouselExample" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="/venue/One.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/venue/Two.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/venue/Three.jpg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/venue/Four.jpg" alt="Fourth slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Gallery;