import React, { useState } from "react";
import ReactCalender from "./Calender";

const RecommendationParameters = () => {
    const [formInput, SetInputs]=useState({
        date:'',
        location:'',
        type:'',
        count:''
    })

    const handleChange=(e)=>{
        SetInputs(
            {...formInput,
                [e.target.name]:e.target.value
            }
        )}
    
        const  handleSubmit= async (e)=>{
            e.preventDefault();
            const date=e.target.date.value;
            const type=e.target.type.value;
            const location=e.target.location.value;
            const count=e.target.count.value;
            const data={
                "date":date,
                "location":location,
                "type":type,
                "count":count
            }
            console.log(data);
        }
      
    return (
        <div>
            <div className="text-center p-3">
            <h4 className="p-3">When's your special day?</h4>
            <ReactCalender />
            <h4 className="pt-4">Do you have an idea of where you're going to arrange? (City name)</h4><br/>
            <input type="text" 
            name="date"></input><br />
            <div class="btn-group dropup pt-4">
                <button type="button" class="btn" style={{backgroundColor:"#FDCA40"}}>
                    <b style={{fontWeight:"500"}}>Type of Party?</b>
                </button>
                <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style={{backgroundColor:"#FDCA40"}} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">
                    <option name="Wedding">Wedding</option>
                    <option name="Birthday Party">Birthday Party</option>
                    <option name="Success Party">Success Party</option>
                    <option name="Gaaye Holud">Gaaye Holud</option>
                    <option name="Others">Others</option>
                </div>
            </div>
            <h4 className="pt-4 pb-3">Approx. Number of Guests?</h4>
            <input type="number"></input><br />
            <button type="button" className="btn mt-5" style={{backgroundColor:"#FDCA40"}} value={"Submit"}>
                <b style={{fontWeight:"500"}}>Continue</b>
            </button>
        </div>
        </div>
    )
}

export default RecommendationParameters;