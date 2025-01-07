import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <h3>Choisissez une date :</h3>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // Format de la date
        placeholderText="Sélectionnez une date"
      />
    </div>
  );
}

export default DatePickerExample;
