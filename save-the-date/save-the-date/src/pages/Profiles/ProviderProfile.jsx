import React, { Component } from "react";
import VenueData from "../../data/VenueData";
import "./ProfileStyle.css";

class ProviderProfile extends Component {

    state = {
        venues: VenueData
    }

    render() {
        return(
            <div>
                <h1></h1>
                <img src="\Venue\one.jpeg" class="img-provider" alt="Responsive image"></img><br /><br />
                <h3>Shimanto Convention Center</h3>
            </div>
        )
    }
}

export default ProviderProfile;