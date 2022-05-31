import React from 'react';
import "./Schedule.css";

export default function AppointmentSet(props) {

  return (
    <div>
        <a className='text-center'><br/><h6 className='text-center'>{props.confirm}</h6></a>
    </div>
  )
}
