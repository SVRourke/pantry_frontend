import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Row } from '../../common/elements'
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

const GoBack = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray-color);
  padding-left: 1rem;

  &:hover {
    color: var(--red-color)
  }
`;


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
