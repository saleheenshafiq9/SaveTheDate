import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart-context'
import {MdLocationCity, MdDateRange, MdPeopleAlt} from 'react-icons/md';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {GiPartyHat} from 'react-icons/gi';
import axios from "axios";
import { tokenUrl} from "../../constants/constants";

function Recommendation() {
  const [recom, setRecom] = useState(null);
  const recomm_key='/api/recommendation';
  const {type, city, area, budget, count} = useContext(CartContext);
  console.log(city);

  const handleSubmit= ()=> {
      const data={
        "budget": budget,
        "guestCount": count,
        "city": city
      }
    const recommData= axios.post(tokenUrl+recomm_key,data,{
      headers:{
        Accept:"application/json;",
        'Content-Type':'application/json;charset=UTF-8'
      }
    }).then(s=>s.data);
    recommData.then(s=>setRecom(s));
  }

  return (
    <div className="row">
      <div className="col-6">
      <div className='text-center mt-5 pt-5'>
      <div className="box orange">
        <div className="row my-5">
          <div className="col-4">
          <GiPartyHat className='mr-5'/>
          </div>
          <div className="col-4">
          <h6>Occasion</h6>
          </div>
          <div className="col-4">
            <p>{type}</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4">
          <MdLocationCity className='mr-5'/>
          </div>
          <div className="col-4">
          <h6>Location</h6>
          </div>
          <div className="col-4">
            <p>{area}, {city}</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4">
          <RiMoneyDollarCircleFill className='mr-5' />
          </div>
          <div className="col-4">
          <h6>Guest Count</h6>
          </div>
          <div className="col-4">
            <p>{count} People</p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4">
          <MdPeopleAlt className='mr-5' />
          </div>
          <div className="col-4">
          <h6>Budget</h6>
          </div>
          <div className="col-4">
            <p>{budget} BDT</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="col-6 text-center" style={{
      marginTop: "180px"
    }}>
    <div>
        <button className='btn btn-dark' onClick={handleSubmit}>Generate Plan</button>
      </div>
      <p>{recom?.venue[0].location}</p>
    </div>
    </div>
  )
}

export default Recommendation

