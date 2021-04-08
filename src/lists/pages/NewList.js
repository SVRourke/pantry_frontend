import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Row } from '../../common/elements'
import {
  GoBack,
  NiceForm,
  NiceLabel,
  EmailInput,
  SubmitButton
} from '../../common/FormElements'

const NewList = () => {
  const history = useHistory();
  const [ inputValue, setInput ] = useState("")

  const inputHandler = (event) => { 
    setInput(event.target.value)
  }
  // ALERT: REDIRECT AFTER FORM SUBMIT history.push(list/id)
  const submitHandler = (event) => {
    event.preventDefault()
    alert(`Creating ${inputValue}`)
    setInput("")
    // ALERT: MAKE DYNAMIC REDIRECT WITH RETURNED LIST ID VALUE
  }

  return (
    <div style={{ margin: "1rem 0" }}>
      <Row>
        <h2>NEW LIST</h2>
        <GoBack onClick={() => history.goBack()}>cancel</GoBack>
      </Row>
      <NiceForm onSubmit={submitHandler}>
        <NiceLabel for="List Name">list name</NiceLabel>
        <EmailInput type="text" name="list name" value={inputValue} onChange={inputHandler} />
        <SubmitButton type="submit" value="send request" />
      </NiceForm>
    </div>
  );
}

export default NewList;
