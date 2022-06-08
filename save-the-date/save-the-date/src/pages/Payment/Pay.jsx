import React from 'react'
import { MdPayment } from 'react-icons/md'

function Pay(props) {
  return (
    <div>
      <div className="row mt-3">
          <div className="col-6">
          <h5>Select Payment Method</h5><MdPayment className='mb-1 text-secondary'/>
                <select
                    className="form-control w-50 mt-3"
                    name="location"
                    required >
                    <option id="option" value="Select City" className="text-secondary"></option>
                    <option id="option" value="Dhaka">Mobile Banking</option>
                    <option id="option" value="Chitagong">Online Banking</option>
                    <option id="option" value="Rajshahi">Hand-to-Hand</option>
                </select>
          </div>
      </div>
    </div>
  )
}

export default Pay
