import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Caterer from './Caterer';


const CatererShow = () => {
  return (
    <div>
    <br />
      <h4>
        Explore Caterers <FiArrowRight />
      </h4>
      <br />
      <Caterer />
      <br />
    </div>
  )
}

export default CatererShow;
