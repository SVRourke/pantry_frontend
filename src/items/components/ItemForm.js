import { createEvent } from '@testing-library/dom'
import React, { useState } from 'react'
import { CardBody } from '../../common/elements'
import styled from "styled-components"

const NiceLabel = styled.label`
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 .3rem;
`;

const TextField = styled.input`
    padding: .7rem .2rem;
    font-size: 1rem;
    border: solid var(--offblack-color) 2px;
    border-radius: 5px;
    display: block;
    width: 100%;

`;
const TextArea = styled.textarea`
    padding: .7rem .2rem;
    font-size: 1rem;
    border: solid var(--offblack-color) 2px;
    border-radius: 5px;
    display: block;
    width: 100%;
`;

const SubmitButton = styled.input`
    margin-top: 1rem;
    background: none;
    border: solid var(--offblack-color) 2px;
    padding: .3rem .7rem;
    border-radius: 3rem;
    font-weight: 500;

    &:hover {
        background-color: var(--offblack-color);
        color: white;
    }
`;

export default function ItemForm (props) {
  const [info, setInfo] = useState(props.record || {
    name: '',
    amount: ''
  })
  console.log(info)

  const changeHandler = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.cb(info)
    // REDIRECT
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <NiceLabel for='name'>item</NiceLabel>
            <TextField onChange={changeHandler} type='text' name='name' value={info.name} />
            <NiceLabel for='amount'>amount</NiceLabel>
            <TextArea onChange={changeHandler} name='amount' value={info.amount} />
            <SubmitButton type='submit' value='submit' />
        </form>
    </div>
  )
}
