import React from 'react'
import Calendar from 'react-calendar';
import { useState} from "react";
import 'react-calendar/dist/Calendar.css';


function CalendarPick() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
        <Calendar onChange={onChange} value={value} />
        {value.toDateString()}
    </div>
  )
}

export default CalendarPick