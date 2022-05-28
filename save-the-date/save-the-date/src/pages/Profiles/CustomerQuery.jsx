import React from "react";
import ReactCalender from "./Calender";

const RecommendationParameters = () => {
    return (
        <div>
            When's your special day?
            <ReactCalender />
            Do you have an idea of where you're getting married? (City name)<br/>
            <input type="text"></input><br />
            <div class="btn-group dropup">
                <button type="button" class="btn" style={{backgroundColor:"#FDCA40"}}>
                    Type of Party?
                </button>
                <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style={{backgroundColor:"#FDCA40"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Wedding</a>
                    <a class="dropdown-item" href="#">Birthday Party</a>
                    <a class="dropdown-item" href="#">Success Party</a>
                    <a class="dropdown-item" href="#">Gaaye Holud</a>
                    <a class="dropdown-item" href="#">Others</a>
                </div>
            </div>
        </div>
    )
}

export default RecommendationParameters;