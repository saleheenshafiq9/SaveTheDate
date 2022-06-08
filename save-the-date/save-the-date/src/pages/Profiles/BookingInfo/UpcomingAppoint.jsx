import React, {useContext} from 'react'
import { CartContext } from '../../../contexts/cart-context';

const UpcomingAppoint = () => {
  const {appointment} = useContext(CartContext);
  console.log(appointment);
  return (
    <div>
      <p>{appointment}</p>
    </div>
  )
}

export default UpcomingAppoint;
