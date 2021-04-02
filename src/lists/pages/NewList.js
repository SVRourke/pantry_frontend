import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const NewList = () => {
  const history = useHistory();
  const [ inputValue, setInput ] = useState("")

  const inputHandler = (event) => { 
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    alert(`Creating ${inputValue}`)
    setInput("")
    // ALERT: MAKE DYNAMIC REDIRECT WITH RETURNED LIST ID VALUE
  }

  return (
    <div>
      <h2>NEW LIST</h2>
      <button onClick={() => history.goBack()}>cancel</button>
      <form onSubmit={submitHandler}>
      <label for="list name">List Name</label>
        <input onChange={inputHandler} type="text" name="list name" value={inputValue}/>
        <input type="submit" value="create list" />
      </form>
    </div>
  );
}

export default NewList;
