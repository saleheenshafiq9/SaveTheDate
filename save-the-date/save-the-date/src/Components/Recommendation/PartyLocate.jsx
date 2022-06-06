import React from 'react'
import {MdLocationCity, MdAddLocationAlt, MdPeopleAlt} from 'react-icons/md';
import { Link } from 'react-router-dom';

const PartyLocate = () => {
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
            <h3 className='text-center pt-4 pb-5 mt-2 mb-2'>In which city and area would you like to arrange?</h3>
        <div>
            <div className="row justify-content-center">
            <h5 className='text-center'>City</h5><MdLocationCity className='mb-1 text-secondary'/>
            <select
                className="form-control w-50 mt-3"
                name="location"
                required >
                <option id="option" value="Dhaka">Dhaka</option>
                <option id="option" value="Chittagong">Chittagong</option>
                <option id="option" value="Rajshahi">Rajshahi</option>
                <option id="option" value="Khulna">Khulna</option>
                <option id="option" value="Sylhet">Sylhet</option>
                <option id="option" value="Barishal">Barishal</option>
                <option id="option" value="Rangpur">Rangpur</option>
                <option id="option" value="Comilla">Comilla</option>
            </select>
            </div>
            <div className="row justify-content-center mt-4">
            <h5 className='text-center'>Area</h5><MdAddLocationAlt className='mb-1 text-secondary'/>
            <input
                type="text"
                className="form-control w-50 mt-3"
                name="location"
                required >
            </input>
            </div>
            <div className="row justify-content-center mt-4">
            <h5 className='text-center'>Approx. Guest Count</h5><MdPeopleAlt className='mb-1 text-secondary'/>
            <input
                type="number"
                className="form-control w-50 mt-3"
                name="location"
                required >
            </input>
            </div>
            <div className='text-center'>
        <Link to="/partylocate"><button className='btn btn-lg' id='btnParty'>Continue</button></Link>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default PartyLocate
