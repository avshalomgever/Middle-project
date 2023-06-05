
import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function CalendarPick() {
  const [value, onChange] = useState(new Date());
  
  const handleDateChange = (date) => {
    onChange(date);

    const isButtonClicked = localStorage.getItem('isButtonClicked');

    if (isButtonClicked === 'true') {
      localStorage.setItem('selectedDate', date.toDateString());
    }
  };

  const paymentDataString = localStorage.getItem('payments');
  const paymentData = paymentDataString && JSON.parse(paymentDataString);
  //  paymentData && paymentData.selectedDate;
  //  paymentData && paymentData.map((value,index)=>{
  //  return value.selectedDate;
   
  // }) ;
  
  const tileDisabled = ({ date }) => {
     
    const dateString = date.toDateString();
    const selectedDate = paymentData && paymentData.map((value) => value.selectedDate);
    return selectedDate && selectedDate.includes(dateString);
    
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={value} tileDisabled= {tileDisabled  } />

    </div>
  );
}

export default CalendarPick;




