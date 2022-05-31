import React, { useContext} from "react";
import { UserContext } from "../../contexts/user-context";
import "./ProfileStyle.css";
import {FaUserFriends, FaRegCalendarAlt} from "react-icons/fa";
import {MdModeEditOutline} from "react-icons/md";
import ReactCalender from "./Calender";
import ScheduleAppoint from "./Schedule";
import { Link } from "react-router-dom";
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
                <img src="/venue/One.jpg" className="provider-img"/>
                </div>
                <div className="col-6">
                <img src="/venue/Two.jpg" className="provider-img"/>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-6">
                    <h2>Shimanta Convention Center</h2>
                    <p className="text-secondary">Dhanmondi, Road 2, Near Pilkana inside Shimanto (Rifles) Square Market, Dhaka 1205
                    <br/>
                    <FaUserFriends /> 500 People</p>
                </div>
                <div className="col-3"></div>
                <div className="col-3">
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
            <div className="row"><br /><br />
                <h4 className="text-center">Gallery</h4>
                    <Gallery />
            </div>
            <div className="row p-5">
                <div className="col-6 text-secondary">
                <h4 className="text-dark">About Venue</h4><br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam cumque odio ut nisi laboriosam quibusdam unde sequi excepturi harum debitis adipisci sunt quaerat nemo, qui facere asperiores nam libero accusantium dignissimos fugit! Pariatur aliquam deleniti, quos voluptatibus earum ipsa eos sed illo nostrum molestiae magni dolorum ullam omnis amet possimus assumenda quaerat facere, quisquam fuga voluptas nulla totam? Recusandae esse facilis tempora culpa hic asperiores non, tenetur molestias quos quasi nihil obcaecati amet, quae, laboriosam consequatur est ipsam similique aspernatur iusto blanditiis laudantium. Numquam tenetur, quis praesentium, nam qui iusto dolores doloremque magni provident officiis ex aliquid incidunt ipsum exercitationem.</p>
                </div>
                <div className="col-6">
                <h4 className="text-dark mx-5">Our Services</h4><br />
                <ul className="text-secondary my-3 mx-2">
                    <li>Dressing room / Bridal Suite</li>
                    <li>Event coordinator</li>
                    <li>Service staff</li>
                    <li>Liability insurance</li>
                    <li>Wifi</li>
                </ul>
                </div>
            </div>
            <div className="row p-3">
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
