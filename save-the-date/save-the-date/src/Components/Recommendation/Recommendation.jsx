import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context'
import {MdLocationCity, MdDateRange, MdPeopleAlt} from 'react-icons/md';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {GiPartyHat} from 'react-icons/gi';

function Recommendation() {
  const {type, city, area, budget, count} = useContext(CartContext);
  console.log(type);
  return (
    <div className='text-center m-5 p-5'>
      <div className="box orange w-50">
        <h5><GiPartyHat className='mr-5'/>Occasion: {type}</h5>
      </div>
      <div className="box red w-50">
        <h5><MdLocationCity className='mr-5'/>Location: {area}, {city}</h5>
      </div>
      <div className="box blue w-50">
        <h5><RiMoneyDollarCircleFill className='mr-5' />Approx. Budget: {budget} BDT</h5>
      </div>
      <div className="box teal w-50">
        <h5><MdPeopleAlt className='mr-5' />Approx. Guest Count: {count} People</h5>
      </div>
    </div>
  )
}

export default Recommendation

