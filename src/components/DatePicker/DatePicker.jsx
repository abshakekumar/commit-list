import React, { useEffect, useState } from "react";
import "./DatePicker.css";

function DatePicker({ label, value, onChange }) {
  const [selectedDate, setSelectedDate] = useState(value);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="datepicker__wrapper">
      <label htmlFor="datePicker">{label}</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatePicker;
