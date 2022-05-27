import React, { Component } from "react";
import "./ProfileStyle.css";
import {FaUserFriends} from "react-icons/fa";

function ProviderProfile() {
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
                        Contact
                    </button>
                    <button className="btn btn-success">
                        Book Now
                    </button>
                </div>
            </div>
            <hr />
            <div className="row"><br /><br />
                <h4 className="text-center">Gallery</h4>
                <div className="col-3">
                <img src="/venue/One.jpg" className="gallery-img"/>
                </div>
                <div className="col-3">
                <img src="/venue/Two.jpg" className="gallery-img"/>
                </div>
                <div className="col-3">
                <img src="/venue/Three.jpg" className="gallery-img"/>
                </div>
                <div className="col-3">
                <img src="/venue/Four.jpg" className="gallery-img"/>
                </div>
                <div className="col-3"><br />
                <img src="/venue/Four.jpg" className="gallery-img"/>
                </div>
                <div className="col-3"><br />
                <img src="/venue/Three.jpg" className="gallery-img"/>
                </div>
                <div className="col-3"><br />
                <img src="/venue/Two.jpg" className="gallery-img"/>
                </div>
                <div className="col-3"><br />
                <img src="/venue/One.jpg" className="gallery-img"/>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-6 text-secondary">
                <h4 className="text-dark">About Venue</h4><br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam cumque odio ut nisi laboriosam quibusdam unde sequi excepturi harum debitis adipisci sunt quaerat nemo, qui facere asperiores nam libero accusantium dignissimos fugit! Pariatur aliquam deleniti, quos voluptatibus earum ipsa eos sed illo nostrum molestiae magni dolorum ullam omnis amet possimus assumenda quaerat facere, quisquam fuga voluptas nulla totam? Recusandae esse facilis tempora culpa hic asperiores non, tenetur molestias quos quasi nihil obcaecati amet, quae, laboriosam consequatur est ipsam similique aspernatur iusto blanditiis laudantium. Numquam tenetur, quis praesentium, nam qui iusto dolores doloremque magni provident officiis ex aliquid incidunt ipsum exercitationem.</p>
                </div>
                <div className="col-6">
                <h4 className="text-dark mx-3 float-end">Our Services</h4><br />
                <ul className="text-secondary m-2">
                    <li>Dressing room / Bridal Suite</li>
                    <li>Event coordinator</li>
                    <li>Service staff</li>
                    <li>Liability insurance</li>
                    <li>Wifi</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default ProviderProfile;
