import React from "react";
import ReactCalender from "./Calender";

const RecommendationParameters = () => {
    return (
        <div>
            <div className="text-center p-3">
            <h4 className="p-3">When's your special day?</h4>
            <ReactCalender />
            <h4 className="pt-4">Do you have an idea of where you're going to arrange? (City name)</h4><br/>
            <input type="text"></input><br />
            <div class="btn-group dropup pt-4">
                <button type="button" class="btn" style={{backgroundColor:"#FDCA40"}}>
                    <b style={{fontWeight:"500"}}>Type of Party?</b>
                </button>
                <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style={{backgroundColor:"#FDCA40"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday Party">Birthday Party</option>
                    <option value="Success Party">Success Party</option>
                    <option value="Gaaye Holud">Gaaye Holud</option>
                    <option value="Others">Others</option>
                </div>
            </div>
            <h4 className="pt-4 pb-3">Approx. Number of Guests?</h4>
            <input type="number"></input><br />
            <button type="button" className="btn mt-5" style={{backgroundColor:"#FDCA40"}}>
                <b style={{fontWeight:"500"}}>Continue</b>
            </button>
        </div>
        </div>
    )
}

export default RecommendationParameters;