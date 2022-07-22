import React, {useState, useEffect, useContext} from 'react'
import DatePicker from "react-datepicker";
import './Recommendation.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';

const PartyDate = () => {
    const currentDate = new Date();
    const {addDate} = useContext(CartContext);

    const [myMonth, setMyMonth] = useState(currentDate);
    const [myYear, setMyYear] = useState(currentDate);
    const [myDay, setMyDay] = useState(currentDate);
  
    const minDate = new Date(myYear.getFullYear(), myMonth.getMonth(), 1);
    const maxDate = new Date(myYear.getFullYear(), myMonth.getMonth() + 1, 0);
  
    useEffect(() => {
      setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), 1));
    }, [myMonth, myYear, setMyDay]);
  
    const renderDayContents = (day, date) => {
      if (date < minDate || date > maxDate) {
        return <span></span>;
      }
      return <span>{date.getDate()}</span>;
    };

    const selectDate = () => {
      addDate(myDay); 
    }

  return (
    <div>
      <h2 className='tagline text-center p-5 m-2'>When's the special day?</h2>
      <div className="container text-center">
          <img src='../../../Recommendation/lantern.png' alt="" id='img-party'/>
          <img src='../../../Recommendation/schedule.png' alt="" id='img-party' className='pl-5'/>
        <div className="input-container text-center">
          <div className='pt-5'>
            <label>Year</label>
            <DatePicker
              selected={myYear}
              onChange={(date) => setMyYear(date)}
              showYearPicker
              dateFormat="yyyy"
            />
          </div>
        <div className='pt-3'>
        <label>Month</label>
        <DatePicker
          showMonthYearPicker
          dateFormat="MMMM"
          renderCustomHeader={({ date }) => <div></div>}
          selected={myMonth}
          onChange={(date) => setMyMonth(date)}
        />
      </div>
      <div className='pt-3'>
        <label>Day</label>
        <DatePicker
          dateFormat="dd"
          renderCustomHeader={({ date }) => <div></div>}
          selected={myDay}
          renderDayContents={renderDayContents}
          onChange={(date) => setMyDay(date)}
          minDate={new Date()}
        />
      </div>
      </div>
    </div>
    <div className='text-center'>
        <Link to="/partylocate"><button className='btn btn-lg' id='btnParty'><b style={{
            fontWeight: "500"
        }} onClick={selectDate}>Continue</b></button></Link>
    </div>
    </div>
  )
}

export default PartyDate
