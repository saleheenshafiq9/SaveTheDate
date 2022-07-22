import React, { useState, useContext } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CartContext } from "../contexts/cart-context";


const ReactCalender = () => {
    const [date, setDate] = useState(null);
    const {addAppoint} = useContext(CartContext);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
      const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday"
        ];
    const onChange = date => {
        setDate(date);
        const finalDate = weekNames[date.getDay()] + ", " + date.getDate() + " " + monthNames[date.getMonth()];
        addAppoint(finalDate);
    }
    return (
        <div>
            <DatePicker selected={date} onChange={onChange} value={date} minDate={new Date()}
            isClearable scrollableMonthYearDropdown />
                    <div className='text-center mt-4'>
        <select
                className='text-center'
                required >
                <option value="visit">Visit</option>
                <option value="phone call">Phone Call</option>
        </select>
        </div>
        </div>
    )
}

export default ReactCalender;