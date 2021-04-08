import React, { useState } from 'react';
import styled from 'styled-components';

const NiceForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.input`
  margin: 1rem 0;
  background-color: white;
  border: solid var(--offblack-color) 2px;
  border-radius: 3rem;
  padding: .3rem .7rem;
  width: fit-content;
  font-weight: 500;
  &:hover {
    background-color: var(--offblack-color);
    color: white;
  }
`;

const EmailInput = styled.input`
  border: solid var(--offblack-color) 2px;
  padding: .5rem .7rem;
  border-radius: 5px;
`;

const NiceLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 600
`;


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
