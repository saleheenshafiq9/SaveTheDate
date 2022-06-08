import React, { useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactCalender = () => {
    const [date, setDate] = useState(null);
    const onChange = date => {
        setDate(date);
        console.log(date);
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