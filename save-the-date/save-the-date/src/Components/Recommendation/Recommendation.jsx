import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart-context'
import {MdLocationCity, MdDateRange, MdPeopleAlt} from 'react-icons/md';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import {GiPartyHat} from 'react-icons/gi';
import axios from "axios";
import { tokenUrl} from "../../constants/constants";
import { Link } from 'react-router-dom';

function Recommendation() {
  const [recom,setRecom]=useState(null)
  const recomm_key='/api/recommendation';
  const {type, city, area, budget, count} = useContext(CartContext);
  console.log(city);

  const handleSubmit= ()=> {
      const data={
        "budget": budget,
        "guestCount": count,
        "city": city
      }

    const recommData= axios.post(tokenUrl+recomm_key,data).then(s=>s.data);
    recommData.then(s=>{console.log(s);setRecom(s)}
    );
    console.log(recom);
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
      marginTop: "80px"
    }}>
    <div>
        <button className='btn btn-dark' onClick={handleSubmit}>Generate Plan</button>
    </div>
    <div className="row my-5 ml-3">
    <div className="col-5 box cyan ml-4"><Link to="/venue" id='fontfix'>
      <h6>{recom?.venue[0].title}</h6>
      <p>{recom?.venue[0].location}</p>
      <p>{recom?.venue[0].price}</p>
      </Link></div>
    <div className="col-5 box teal ml-4"><Link to="/caterer" id='fontfix'>
      <h6>{recom?.catering[0].title}</h6>
      <p>{recom?.catering[0].location}</p>
      <p>{recom?.catering[0].price}</p>
      </Link></div>
    </div>
    <div className="row my-5 ml-3">
    <div className="col-5 box cyan ml-4"><Link to="/decorator" id='fontfix'>
      <h6>{recom?.decorator[0].title}</h6>
      <p>{recom?.decorator[0].location}</p>
      <p>{recom?.decorator[0].price}</p>
      </Link></div>
    <div className="col-5 box teal ml-4"><Link to="/photography" id='fontfix'>
      <h6>{recom?.contentmaker[0].title}</h6>
      <p>{recom?.contentmaker[0].location}</p>
      <p>{recom?.contentmaker[0].price}</p>
      </Link></div>
    </div>
    </div>
    </div>
  )
}

export default Recommendation

