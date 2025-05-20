import React from 'react'
import { FaArrowUpFromBracket } from 'react-icons/fa6'

function FileInput({
  label,
  name,
  value,
  dir = 'rtl',
  onChange,
  isRequired,
  errors,
  className,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name]
  const hasError = !!(errors && errorMessages)
  return (
    <>
      <label
        htmlFor="file-upload"
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
          {...rest}
        />
      </label>
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </>
  )
}

export default FileInput
