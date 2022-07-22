import React from 'react'

const ScheduleItem = (props) => {
  return (
    <div>
        <h5 class="card-title">{props.date}</h5>
        <p class="card-text">{props.day}<br/>{props.time}</p>
    </div>
  )
}

export default ScheduleItem;
