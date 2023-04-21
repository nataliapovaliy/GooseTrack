
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './MyApp.css';


export function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar 
      onChange={onChange} 
      value={value} 
      // nextLabel='month >'
      
      />
    </div>
  );
}