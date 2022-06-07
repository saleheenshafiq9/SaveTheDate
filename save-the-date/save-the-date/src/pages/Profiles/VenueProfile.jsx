import React, { useContext} from "react";
import { UserContext } from "../../contexts/user-context";
import "./ProfileStyle.css";
import {FaUserFriends, FaRegCalendarAlt} from "react-icons/fa";
import {MdModeEditOutline, MdLocationPin} from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import ReactCalender from "./Calender";
import ScheduleAppoint from "./Schedule";
import { Link } from "react-router-dom";
import Map from "../../Components/map/Map";
import Gallery from "./Gallery";
import useFetch from "../../hooks/useFetch"
import {tokenUrl} from "../../constants/constants"

function VenueProfile() {
    const {token}= useContext(UserContext);
    const {data:venueData,error,loading}=useFetch(tokenUrl,"/api/venues/me",token?.access);
    console.log(venueData);
    return(
        <div>
            <div className="row">
                <div className="col-6">
                <img src={tokenUrl + venueData?.images[0]?.image} className="provider-img"/>
                </div>
                <div className="col-6">
                <img src={tokenUrl + venueData?.images[1]?.image} className="provider-img"/>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-2">
                    <h2>{venueData?venueData.title:"Title"}</h2>
                    <br />
                    <p className="text-secondary">
                    <MdLocationPin /> {venueData?venueData.location :"Location"}
                    <br/>
                    <FaUserFriends /> {venueData?venueData.capacity: "Capacity No." } People
                    <br />
                    <IoPricetags /> {venueData?venueData.price: "Price"} BDT </p>
                    
                </div>
                <div className="col-6">
                <Map location={venueData?.location}/>
                </div>
                <div className="col-4">
                    <button className="btn btn-dark">
                        <Link to='/editvenue' id="plantext">Edit Profile<MdModeEditOutline style={{
                    marginLeft: "7px"
                }}/></Link>
                    </button>
                    <a className="btn btn-success" href="#cal">
                        Go to Calendar <FaRegCalendarAlt style={{
                    marginLeft: "7px"
                }}/>
                    </a>
                </div>
            </div>
            <hr />
            <div className="row"><br /><br /><br />
                <h4 className="text-center">Gallery</h4><br />
                    <Gallery /> 
            </div>
            <br /><br />
            

            <div className="row p-5">
                <div className="col-6 text-secondary">
                <h4 className="text-dark">About Venue</h4><br />
                    <p>{venueData?venueData.description: "Description" }</p>
                </div>
                <div className="col-6 text-center">
                    <p>
                    <a className="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Past Bookings</a>
                    </p>
                    <div className="row">
          <div className="col">
            <div className="collapse multi-collapse ml-5 mb-3" id="multiCollapseExample1">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          </div>
          <p>
          <button className="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Upcoming Appointments</button>
          </p>
          <div className="row">
          <div className="col">
            <div className="collapse multi-collapse ml-5" id="multiCollapseExample2">
              <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          </div>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-6">
                <h4 className="text-dark">Add to Schedule</h4><br />
                <ReactCalender />
                </div>
            </div>
            <div className="row p-3" id="cal">
            <h4 className="text-dark my-3">Appointment & Booking Schedule</h4><br />
            <ScheduleAppoint />
            </div>
        </div>
    )
}

export default VenueProfile;
