import React,{useContext} from "react";
import { UserContext } from "../../contexts/user-context";
import { tokenUrl } from "../../constants/constants";
import useFetch from "../../hooks/useFetch";
import "./ProfileStyle.css";
import { FaRegCalendarAlt} from "react-icons/fa";
import {GiPartyFlags} from "react-icons/gi";
import {MdModeEditOutline} from "react-icons/md";
import ReactCalender from "./Calender";
import ScheduleAppoint from "./Schedule";
import { Link } from "react-router-dom";

function DecoratorProfile() {
    const {token}= useContext(UserContext);
    const {data:decoratorData,error,loading}=useFetch(tokenUrl,"/api/decorators/me",token?.access);
    console.log(decoratorData);
    return(
        <div>
            <div className="row">
                <div className="col-6">
                <img src="/Decorator/One.jpg" className="provider-img"/>
                </div>
                <div className="col-6">
                <img src="/Decorator/Two.jpg" className="provider-img"/>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-6">
                    <h2>{decoratorData?decoratorData.title:"Title"}</h2>
                    <p className="text-secondary">{decoratorData?decoratorData.location :"Location"}
                    <br/>
                    <GiPartyFlags /> Modern, Classic, Traditional</p>
                </div>
                <div className="col-3"></div>
                <div className="col-3">
                    <button className="btn btn-dark">
                        <Link to='/editdecorator' id="plantext">Edit Profile <MdModeEditOutline style={{
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
                <h4 className="text-center">Themes</h4>
                <div className="col-3">
                <img src="/Decorator/One.jpg" className="gallery-img"/>
                </div>
                <div className="col-3">
                <img src="/Decorator/Two.jpg" className="gallery-img"/>
                </div>
                <div className="col-3">
                <img src="/Decorator/Three.jpg" className="gallery-img"/>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-6 text-secondary">
                <h4 className="text-dark">About Decorators</h4><br />
                    <p>{decoratorData?decoratorData.description: "Description" }</p>
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

export default DecoratorProfile;
