import React, { useState } from 'react'

import {
  NiceForm,
  NiceLabel,
  TextField,
  TextArea,
  SubmitButton
} from '../../common/FormElements'

export default function ItemForm (props) {
  const [info, setInfo] = useState(props.record || {
    name: '',
    amount: ''
  })

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
