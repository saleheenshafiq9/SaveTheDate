import React from 'react'
import Decorator from './Decorator';
import { FiArrowRight } from "react-icons/fi";


const DecoratorShow = () => {
  return (
    <div>
    <br />
      <h4>
        Explore Decorators <FiArrowRight />
      </h4>
      <br />
      <Decorator />
      <br />
    </div>
  )
}

export default DecoratorShow;
