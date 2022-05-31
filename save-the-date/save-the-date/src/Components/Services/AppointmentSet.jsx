import React, { useState } from 'react';
import "./Schedule.css";

export default function AppointmentSet(props) {
    const [confirm, setConfirm] = useState(false);

    const ClickConfirm = () => {
        setConfirm(true);
    }

  return (
    <div onClick={ClickConfirm}>
        { confirm? <h6 className='text-center'>Done!</h6> : <a className='text-center'><br/><h6 className='text-center'>{props.confirm}</h6></a> }
    </div>
  )
}
