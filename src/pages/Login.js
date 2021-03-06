import React, { useState } from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/LoginActions";
import { Redirect } from "react-router-dom";
import "./login.scss";

const Login = ({ userId, isLoggedIn, login }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    login(input);
  };

  const changeHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={"login"}>
      {isLoggedIn ? <Redirect to={`/users/${userId}`} /> : false}

      <h1>Login</h1>

      <form onSubmit={(event) => submitHandler(event)}>
        <input
          name="email"
          type="email"
          value={input["email"]}
          placeholder="email"
          onChange={(event) => changeHandler(event)}
        />

        <input
          name="password"
          type="password"
          placeholder="password"
          value={input["password"]}
          onChange={(event) => changeHandler(event)}
        />

        <input type="submit" value="login" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state.profile,
});
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(handleLogin(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
