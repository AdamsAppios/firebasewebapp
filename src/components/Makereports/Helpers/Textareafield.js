import React from 'react';

const Textareafield = ({label, name, placeholder, handleFieldChange, value}) => {
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <textarea
        value={value}
        onChange={handleFieldChange}
        placeholder={placeholder}
        />
    </>
  );
};

export default Textareafield;