import React, {useState} from 'react'
import { MdPayment } from 'react-icons/md'
import Alert from "../../Components/Alert";

function Pay(props) {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
    }

    const payAdded = () => {
        showAlert("Payment Successful!","success");
    }

  return (
    <div>
      <div className="row mt-3">
          <div className="col-6">
          <h6>Select Payment Method</h6><MdPayment className='mb-1 text-secondary'/>
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
          <div className="col-6">
              <button className='btn btn-success' onClick={payAdded}>Pay</button>
              <Alert alert={alert}/>
          </div>
      </div>
    </div>
  )
}

export default Pay
