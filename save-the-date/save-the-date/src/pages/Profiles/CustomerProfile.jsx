import { UserContext } from "../../contexts/user-context";
import React,{ useContext,useEffect } from "react";
import { Navigate,  } from "react-router";
import RecommendationParameters from "./CustomerQuery";
import "./ProfileStyle.css";

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
        <div className="col-1"></div>
        <div className="col-2 mt-5">
          <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Venue</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><b style={{fontWeight:"500"}}>Explore Venues</b></button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2 mt-5">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Caterer</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><b style={{fontWeight:"500"}}>Explore Caterers</b></button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2 mt-5">
        <div className="card text-center" id="booking-card">
            <div className="card-body">
              <h5 className="card-title">Decorator</h5>
              <p className="card-text">No bookings yet</p>
              <button className="btn" style={{backgroundColor:"#FDCA40"}}><b style={{fontWeight:"500"}}>Explore Decorators</b></button>
            </div>
          </div>
        </div>
      </div>
    </div>)
  )
}

export default CustomerProfile;