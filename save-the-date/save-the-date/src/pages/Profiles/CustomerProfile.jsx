import { UserContext } from "../../contexts/user-context";
import React,{ useContext,useEffect } from "react";
import { Navigate,  } from "react-router";
import RecommendationParameters from "./CustomerQuery";
import "./ProfileStyle.css";
import { Link } from "react-router-dom";

function CustomerProfile() {
  
  const {currentUser} = useContext(UserContext);
  // currentUser===null  && navigate('/');
  
  
  return (
    (<div className="p-3">
      <div className="row">
        <div className="col-3">
            <div className="card w-100">
            <img
              className="card-img-top"
              src="/Customer/one.png"
              alt={currentUser.username}
            />
            <div className="card-body">
              <h5 className="card-title">{currentUser.first_name} {currentUser.last_name}</h5>
              <button className="btn btn-dark">
                Edit Profile
              </button>
            </div>
            <div className="card-footer">
              <b>Phone: </b>
              {currentUser.phoneNumber}
              <br />
              <br />
              <b>Email: </b>
              {currentUser.email}
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col text-center m-3" id="starttext">
              <h5>Haven't start planning yet?</h5>
              <button className="btn btn-dark mt-3">
                <Link to="/recommendation" id="plantext">Start here</Link>
              </button>
            </div>
          </div>
          <div className="row">
          <div className="col-2"></div>
        <div className="col-4 mt-4">
          <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Venue</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/venue' id="exploretext"><b style={{fontWeight:"500"}}>Explore Venues</b></Link></button>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-4">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Caterer</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/caterer' id="exploretext"><b style={{fontWeight:"500"}}>Explore Caterers</b></Link></button>
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-2"></div>
        <div className="col-4 mt-5">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Decorator</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/decorator' id="exploretext"><b style={{fontWeight:"500"}}>Explore Decorators</b></Link></button>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
          <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Photography</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><Link to='/photography' id="exploretext"><b style={{fontWeight:"500"}}>Explore Photographers</b></Link></button>
            </div>
          </div>
        </div>
          </div>
          <div className="row">
            <div className="col text-center mt-3" id="starttext">
              <button type="button" className="btn btn-success" disabled>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          Past Bookings
        </div>
        <div className="col-6">
          Booking Info
        </div>
      </div>
    </div>)
  )
}

export default CustomerProfile;