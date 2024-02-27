import React from 'react'

const InputField = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputField
