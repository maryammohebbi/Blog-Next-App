import React from 'react'
import { FaArrowUpFromBracket } from 'react-icons/fa6'

function FileInput({
  label,
  name,
  value,
  dir = 'rtl',
  onChange,
  isRequired,
  className,
}) {
  return (
    <label
      for="file-upload"
      className={`cursor-pointer border-2 border-primary-900
    rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}
    >
      {label}
      <FaArrowUpFromBracket />
      <input
        id="file-upload"
        type="file"
        className="sr-only"
        name={name}
        dir={dir}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default FileInput
