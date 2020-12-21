import React from "react"

const Input = ({
  label,
  placeholder,
  field,
  onChange,
  onFocus,
  onBlur,
  form,
}) => (
  <label
    className={`relative text-xs font-sans font-light ${
      form[field].error ? "text-red-400" : "text-gray-600"
    }`}
  >
    {label}
    <input
      className={`w-full p-3 mt-1 mb-2 text-base font-sans font-light text-gray-900 border ${
        form[field].error ? "border-red-400" : "border-gray-400"
      } ${
        field === "name" ? "contact-input" : ""
      } rounded-md focus:outline-none focus:ring-2`}
      type="text"
      placeholder={placeholder}
      name={field}
      value={form[field].value}
      onChange={e => onChange(e)}
      onFocus={e => onFocus(e)}
      onBlur={e => onBlur(e)}
    />
    {form[field].touched && form[field].error ? (
      <span className="absolute top-0 right-0">{form[field].error}</span>
    ) : null}
  </label>
)

export default Input
