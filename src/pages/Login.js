import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Interface, Schemas } from '../api/Interface'

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    loggedIn: 'FALSE'
  })

  const submitHandler = event => {
    event.preventDefault()
    const { loggedIn, ...remainder } = input

    Interface('login', Schemas['login'](remainder))
      .then(resp => { setInput({...input, loggedIn: "TRUE!!!!"})})
      .catch(error => { alert("Login Failed, Try Again") })
  }
  
  const changeHandler = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <Link to={`/users/6`}>Login</Link>
      <p>logged in?: {input.loggedIn}</p>
      <form onSubmit={event => submitHandler(event)} >
        <input name="email" type="email" value={input['email']} onChange={event => changeHandler(event)} />
        <input name="password" type="password" value={input['password']} onChange={event => changeHandler(event)} />
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default Login
