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

import { connect } from 'react-redux'
import { CreateList } from '../../actions/ListActions'

const NewList = ({ history, userId, create }) => {
  const [inputValue, setInput] = useState("")

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    create(userId, inputValue)
    setInput("")
    history.goBack()
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

const mapStateToProps = state => ({
  userId: state.profile.userId
})

const mapDispatchToProps = dispatch => ({
  create: (userId, list) => dispatch(CreateList(userId, list))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
