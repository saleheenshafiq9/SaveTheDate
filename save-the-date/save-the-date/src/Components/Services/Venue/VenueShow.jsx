import React from 'react'
import Venue from './Venue';
import { FiArrowRight } from "react-icons/fi";


const VenueShow = () => {
  return (
    <div>
      <br />
      <h4>
        Explore Venues <FiArrowRight />
      </h4>
      <br />
      <Venue />
      <br />
    </div>
  )
}

export default VenueShow;
