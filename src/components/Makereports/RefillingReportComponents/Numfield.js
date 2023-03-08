import React from "react";

const Numfield = ({label, name, placeholder, handleFieldChange, handleFocus, handleBlur, handleKeyPress}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleFieldChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />
      <br />
    </>
  );
}

export default Numfield;