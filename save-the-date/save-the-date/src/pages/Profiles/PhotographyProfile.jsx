import React,{useContext} from "react";
import { UserContext } from "../../contexts/user-context";
import useFetch from "../../hooks/useFetch";
import { tokenUrl } from "../../constants/constants";
import "./ProfileStyle.css";
import { FaRegCalendarAlt, FaPhotoVideo} from "react-icons/fa";
import {MdModeEditOutline, MdLocationPin} from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import ReactCalender from "./Calender";
import ScheduleAppoint from "./Schedule";
import { Link } from "react-router-dom";
import GalleryPhoto from "./GalleryPhoto";


function PhotographyProfile() {
    const {token}= useContext(UserContext);
    const {data:photoData,error,loading}=useFetch(tokenUrl,"/api/contentmakers/me",token?.access);
    console.log(photoData);
    return(
        <div>
            <div className="row">
                <div className="col-6">
                <img src={tokenUrl + photoData?.images[0]?.image} className="provider-img"/>
                </div>
                <div className="col-6">
                <img src={tokenUrl + photoData?.images[1]?.image} className="provider-img"/>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-6">
                    <h2>{photoData?photoData.title:"Title"}</h2>
                    <br />
                    <p className="text-secondary">
                    <MdLocationPin />{photoData?photoData.location :"Location"}
                    <br/>
                    <FaPhotoVideo /> Wedding, Birthday Photography &  HD Cinematography Service.
                    <br />
                    <IoPricetags /> {photoData?photoData.price: "Price"} BDT </p>
                </div>
                <div className="col-3"></div>
                <div className="col-3">
                    <button className="btn btn-dark">
                        <Link to='/editphotography' id="plantext">Edit Profile <MdModeEditOutline style={{
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
                <h4 className="text-center">Collection</h4><br />
                <GalleryPhoto />
            </div>
            <div className="row p-5">
                <div className="col-6 text-secondary">
                <h4 className="text-dark">About Photographers</h4><br />
                    <p>{photoData?photoData.description: "Description" }</p>
                </div>
                <div className="col-6 text-center">
                    <p>
                    <a class="btn btn-dark" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Past Bookings</a>
                    </p>
                    <div class="row">
          <div class="col">
            <div class="collapse multi-collapse ml-5 mb-3" id="multiCollapseExample1">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
          </div>
          <p>
          <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Upcoming Appointments</button>
          </p>
          <div className="row">
          <div class="col">
            <div class="collapse multi-collapse ml-5" id="multiCollapseExample2">
              <div class="card card-body">
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

export default PhotographyProfile;
