import React, { useState } from 'react';
import {
  NiceForm,
  EmailInput,
  SubmitButton,
  NiceLabel
} from '../common/FormElements'

const InviteForm = ({cb}) => {
  const [ email, setEmail] = useState("")

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    cb(email)
    setEmail("")
  }

  return (
    <div style={{
      margin: "1rem 0"
    }}>
      <NiceForm onSubmit={submitHandler}>
        <NiceLabel for="email">email</NiceLabel>
        <EmailInput type="email" name="email" value={email} onChange={handleChange} />
        <SubmitButton type="submit" value="send request" />
      </NiceForm>
    </div>
  );
}

export default InviteForm;
