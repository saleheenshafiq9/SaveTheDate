import React, { useContext, useState } from "react";
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import UpcomingAppoint from "./BookingInfo/UpcomingAppoint";

const ReactCalender = () => {
    const [date, setDate] = useState(null);
    const {addAppoint} = useContext(CartContext);
    const onChange = date => {
        setDate(date);
        addAppoint(date);
        console.log(date.getMonth());
    }
    
    return (
        <div>
            <DatePicker selected={date} onChange={onChange} value={date} minDate={new Date()}
            isClearable scrollableMonthYearDropdown />
        </div>
    )
}

export default ReactCalender;