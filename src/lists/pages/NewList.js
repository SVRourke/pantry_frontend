import React, { useState } from "react";
import {
  GoBack,
  NiceForm,
  NiceLabel,
  EmailInput,
  SubmitButton,
} from "../../common/FormElements";

import { connect } from "react-redux";
import { CreateList } from "../../actions/ListActions";

const NewList = ({ history, userId, create }) => {
  const [inputValue, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    create(userId, inputValue, (listId) => {
      history.push(`/lists/${listId}/items`);
    });
    setInput("");
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <div className="row">
        <h2>NEW LIST</h2>
        <GoBack onClick={() => history.goBack()}>cancel</GoBack>
      </div>
      <NiceForm onSubmit={submitHandler}>
        <NiceLabel for="List Name">list name</NiceLabel>
        <EmailInput
          type="text"
          name="list name"
          value={inputValue}
          onChange={inputHandler}
        />
        <SubmitButton type="submit" value="create" />
      </NiceForm>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.profile.userId,
});

const mapDispatchToProps = (dispatch) => ({
  create: (userId, list, cb) => dispatch(CreateList(userId, list, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
