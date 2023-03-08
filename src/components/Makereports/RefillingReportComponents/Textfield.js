import React from "react";

const Textfield = ({label, name, type, placeholder, handleFieldChange, dispatch}) => {
  const handleFocusString = (e) => {
    e.target.value='';
    dispatch({ type: e.target.name, payload: e.target.value || '' });
  };

  const handleBluString = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value || "" });
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleFieldChange}
        onFocus={handleFocusString}
        onBlur={handleBluString}
      />
      <br />
    </>
  );
}

export default Textfield;