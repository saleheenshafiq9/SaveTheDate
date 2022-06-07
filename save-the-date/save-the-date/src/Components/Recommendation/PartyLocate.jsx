import React, { useContext, useState } from 'react';
import {MdLocationCity, MdAddLocationAlt, MdPeopleAlt} from 'react-icons/md';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';

const PartyLocate = () => {
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [count, setCount] = useState(0);
    const [budget, setBudget] = useState(0);
    const {addCity, addArea, addCount, addBudget} = useContext(CartContext);

    const selectAll = () => {
        addCity(city);
        addArea(area);
        addCount(count);
        addBudget(budget);
    }

    const handleChangeCity=(e)=>{
        setCity(e.target.value);
    }

    const handleChangeArea=(e)=>{
        setArea(e.target.value);
    }

    const handleChangeBudget=(e)=>{
        setBudget(e.target.value);
    }

    const handleChangeCount=(e)=>{
        setCount(e.target.value);
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-6">
                <img src='../../../Recommendation/fireworks.png' height="250px" style={{
                    marginTop: '170px',
                    marginLeft: '80px'
                }}/>'
            </div>
            <div className="col-6">
            <h4 className='pt-4 ml-2 pb-4 mt-2 mb-2 tagline'>In which city and area would you like to arrange?</h4>
        <div>
            <div className="row ml-2">
                <div className="col-6">
                <h5>City</h5><MdLocationCity className='mb-1 text-secondary'/>
                <select
                    className="form-control w-50 mt-3"
                    name="location"
                    value={city}
                    onChange={handleChangeCity}
                    required >
                    <option id="option" value="Select City" className="text-secondary">Select City</option>
                    <option id="option" value="Dhaka">Dhaka</option>
                    <option id="option" value="Chittagong">Chittagong</option>
                    <option id="option" value="Rajshahi">Rajshahi</option>
                    <option id="option" value="Khulna">Khulna</option>
                    <option id="option" value="Sylhet">Sylhet</option>
                    <option id="option" value="Barisal">Barisal</option>
                    <option id="option" value="Rangpur">Rangpur</option>
                    <option id="option" value="Comilla">Comilla</option>
                </select>
                </div>
                <div className="col-6">
                <h5>Area</h5><MdAddLocationAlt className='mb-1 text-secondary'/>
                <input
                    type="text"
                    className="form-control w-50 mt-3"
                    name="area"
                    value={area}
                    onChange={handleChangeArea}
                    required >
                </input>
                </div>
            </div><br />
            <h4 className='ml-2 pt-4 pb-4 mt-2 mb-2 tagline'>What's your budget?</h4>
            <div className="row ml-2 mt-4">
                <div className="col-6">
                <h5>Approx. Budget</h5><RiMoneyDollarCircleFill className='mb-1 text-secondary'/>
                <input
                    type="number"
                    className="form-control w-50 mt-3"
                    name="budget"
                    value={budget}
                    onChange={handleChangeBudget}
                    required >
                </input>
                </div>
                <div className="col-6">
                <h5>Approx. Guest Count</h5><MdPeopleAlt className='mb-1 text-secondary'/>
                <input
                    type="number"
                    className="form-control w-50 mt-3"
                    name="guest"
                    value={count}
                    onChange={handleChangeCount}
                    required >
                </input>
                </div>
            </div>
            <div className='text-center'>
        <Link to="/recomm"><button className='btn btn-lg' id='btnParty'><b style={{
            fontWeight: "500"
        }} onClick={selectAll}>Continue</b></button></Link>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default PartyLocate
