import React from 'react'

function RHFTextField({
  type = 'text',
  label,
  name,
  dir = 'rtl',
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) {
  const errorMessages = errors?.[name]
  const hasError = !!(errors && errorMessages)

  return (
    <div
      className={`textField relative ${hasError ? 'textField--invalid' : ''}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        autoComplete="off"
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === 'ltr' ? 'text-left' : 'text-right'
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 blobk text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  )
}

export default RHFTextField
