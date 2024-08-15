import React, { useState } from 'react';

const MultiSelectDropdown = ({
  options,
  selectedOptions,
  setSelectedOptions,
}) => {
  // For multiSelect
  const handleChange = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  // For singleSelect
  // const handleChange = (e) => {
  //   const selectedValues = Array.from(
  //     e.target.selectedOptions,
  //     (option) => option.value
  //   );
  //   setSelectedOptions(selectedValues);
  // };

  return (
    <div>
      <select multiple={true} value={selectedOptions} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelectDropdown;
