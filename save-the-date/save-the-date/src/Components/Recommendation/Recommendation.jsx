import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context'
import {MdLocationCity, MdDateRange, MdPeopleAlt} from 'react-icons/md';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {GiPartyHat} from 'react-icons/gi';
import axios from "axios";
import { tokenUrl} from "../../constants/constants";

function Recommendation() {
  const recomm_key='/api/recommendation/';
  const {type, city, area, budget, count} = useContext(CartContext);

  const handleSubmit= async (e)=> {
      e.preventDefault();
      const budget= e.target.budget;
      const guestCount= e.target.count;
      const city= e.target.city;

      const data={
        "budget":budget,
        "guestCount":guestCount,
        "city":city
      }
    const recommData=await axios.post(tokenUrl+recomm_key,data,{
      headers:{
        Accept:"application/json;",
        'Content-Type':'application/json;charset=UTF-8'
      }
    }).then(s=>s.data);
  }

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
      <div>
        <button className='btn' onClick={handleSubmit}>Generate Plan</button>
      </div>
    </div>
  )
}

export default Recommendation

