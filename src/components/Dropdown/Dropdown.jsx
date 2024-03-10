import React, { useEffect, useState } from "react";

const Dropdown = ({ options = [], selectedVal, label, handleOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(selectedVal);

  useEffect(() => {
    setSelectedOption(selectedVal);
  }, [selectedVal]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    handleOptionChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown__select">{label}</label>
      <select
        id="dropdown__select"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
