import React, { useState, useContext } from 'react';
import AppointmentSet from './AppointmentSet';
import "./Schedule.css";
import ScheduleItem from './ScheduleItem';
import Alert from "../Alert";
import { UserContext } from '../../contexts/user-context';
import { Link } from "react-router-dom";

export default function ScheduleCard() {
    const {currentUser} = useContext(UserContext);
    const [alert, setAlert] = useState(null);
    const [cartText, setcartText] = useState("Add to Cart");
    const [disable, setdisable] = useState(false);
    const[success1,setSuccess1] = useState(false);
    const[success2,setSuccess2] = useState(false);
    const[success3,setSuccess3] = useState(false);
    const[confirm,setConfirm] = useState(null);

    const handleCartClick = () => {
        setcartText("Added");
        setdisable(true);
    }

    const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
    }

    const cartAdded = () => {
        showAlert("Successfully Added to Cart!","success");
        handleCartClick();
    }

    const changeAppointment1 = () => {
        setSuccess1(true);
        setConfirm("Selected")
    }

    const changeAppointment2 = () => {
        setSuccess2(true);
        setConfirm("Selected")
    }

    const changeAppointment3 = () => {
        setSuccess3(true);
        setConfirm("Selected")
    }

  return (
      <>
        <div class="card-deck mt-3">
            <div class="card mb-3" id='schedulebg' onClick={changeAppointment1}>
                <div class="card-body" style={{
          cursor: "pointer"
      }}>
                    { success1? null : <ScheduleItem date="June 12th" day="Sunday" time="4.00 PM"/>}
                    { success1? <AppointmentSet confirm={confirm}/> : null }           
                </div>
            </div>
            <div class="card mb-3" id='schedulebg' onClick={changeAppointment2}>
                <div class="card-body" style={{
          cursor: "pointer"
      }}>
                    { success2? null : <ScheduleItem date="June 13th" day="Monday" time="4.00 PM"/>}
                    { success2? <AppointmentSet confirm={confirm}/> : null }
                </div>
            </div>
            <div class="card mb-3" id='schedulebg' onClick={changeAppointment3}>
                <div class="card-body" style={{
          cursor: "pointer"
      }}>
                    { success3? null : <ScheduleItem date="June 14th" day="Tuesday" time="10.00 AM"/>}
                    { success3? <AppointmentSet confirm={confirm}/> : null }
                </div>
            </div>
        </div>
        <div className='text-center mt-4'>
        <select
                className='text-center'
                required >
                <option value="visit">Visit</option>
                <option value="phone call">Phone Call</option>
        </select>
        </div>
        <div className='text-center mt-4'>
            <button className='btn btn-success' onClick={cartAdded} disabled={disable}>{cartText}</button>
            <Alert alert={alert}/>
            { disable? <button className="btn btn-dark text-center">
          {currentUser ? (
            <>
              { currentUser.userType=='customer'&& <Link to="/customerProfile " className="text-light text-decoration-none">Go to Profile</Link>}
              { currentUser.userType=='venue'&& <Link to="venueProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='catering'&& <Link to="cateringProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='decorator'&& <Link to="decoratorProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
              { currentUser.userType=='contentmaker'&& <Link to="photographyProfile " className="text-light text-decoration-none">Go to Profile</Link> } 
            </>
             ) : (<Link to='/login' className="text-light text-decoration-none">Sign In
             </Link>
           )}

            </button> : null }
        </div>
      </>
  )
}
