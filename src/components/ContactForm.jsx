import React, { useState } from "react"
import Input from "../components/Input.jsx"

const ContactForm = () => {
  const initialForm = {
    name: { value: "", touched: false, error: false },
    location: { value: "", touched: false, error: false },
    contact: { value: "", touched: false, error: false },
    message: { value: "", touched: false, error: false },
  }
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [showThankyou, setShowThankyou] = useState(false)
  const updateForm = (field, val) => {
    setForm({
      ...form,
      [field]: { ...form[field], ...val },
    })
  }
  const hasError = (field, val) => {
    const errorMessage = {
      name: "Required",
      location: "Required",
      contact: "Required",
      message: "Required",
    }
    return val.length > 0 ? false : errorMessage[field]
  }
  const hasErrors = () => {
    return (
      Object.keys(initialForm)
        .map(field => {
          return hasError(field, form[field].value)
        })
        .filter(bool => bool).length > 0
    )
  }
  const onChange = e => {
    updateForm(e.target.name, {
      value: e.target.value,
      error: hasError(e.target.name, e.target.value),
    })
  }
  const onFocus = e => {
    setShowThankyou(false)
    updateForm(e.target.name, { touched: true })
  }
  const onBlur = e => {
    updateForm(e.target.name, {
      error: hasError(e.target.name, form[e.target.name].value),
    })
  }
  const onClear = () => {
    setForm({
      name: { value: "", touched: false, error: false },
      location: { value: "", touched: false, error: false },
      contact: { value: "", touched: false, error: false },
      message: { value: "", touched: false, error: false },
    })
  }
  const onSubmit = e => {
    e.preventDefault()
    setForm({
      name: {
        value: form.name.value,
        touched: true,
        error: hasError("name", form.name.value),
      },
      location: {
        value: form.location.value,
        touched: true,
        error: hasError("location", form.location.value),
      },
      contact: {
        value: form.contact.value,
        touched: true,
        error: hasError("contact", form.contact.value),
      },
      message: {
        value: form.message.value,
        touched: true,
        error: hasError("message", form.message.value),
      },
    })
    if (!hasErrors()) {
      setSubmitting(true)
      sendFormData()
        .then(() => {
          setSubmitting(false)
          setShowThankyou(true)
          onClear()
        })
        .catch(err => {
          console.log(err)
          setSubmitting(false)
        })
    }
  }

  const sendFormData = async () => {
    const data = Object.keys(form).reduce((acc, cur) => {
      acc[cur] = form[cur].value
      return acc
    }, {})
    try {
      await fetch(
        "https://24n8449164.execute-api.eu-west-1.amazonaws.com/prod",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        }
      )
    } catch (error) {
      throw error
    }
  }

  return (
    <form onSubmit={onSubmit} className="">
      <Input
        label="Name"
        field="name"
        placeholder="Your name"
        form={form}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="contact-input"
      />
      <Input
        label="Location"
        field="location"
        placeholder="Your general location"
        form={form}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Input
        label="Contact Information"
        field="contact"
        placeholder="Your contact number or email address"
        form={form}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label
        className={`relative text-xs font-sans font-light ${
          form.message.error ? "text-red-400" : "text-gray-600"
        }`}
      >
        Message
        <textarea
          className={`w-full p-3 mt-1 mb-3 text-base font-sans font-light text-gray-900 border ${
            form.message.error ? "border-red-400" : "border-gray-400"
          } rounded-md focus:outline-none focus:ring-2`}
          placeholder="A brief description of the work required"
          name="message"
          value={form.message.value}
          rows="3"
          onChange={e => onChange(e)}
          onFocus={e => onFocus(e)}
          onBlur={e => onBlur(e)}
        />
        {form.message.touched && form.message.error ? (
          <span className="absolute top-0 right-0">{form.message.error}</span>
        ) : null}
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 bg-yellow-800 p-3 rounded-md font-sans font-light text-white text-md focus:outline-none focus:ring-2 hover:bg-yellow-900"
      >
        Send
      </button>
      {showThankyou ? (
        <p className="mt-4 text-center text-lg font-sans font-light text-gray-600">
          Thanks for submitting, we'll be in touch soon.
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm
