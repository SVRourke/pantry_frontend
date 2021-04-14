import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    loggedIn: 'FALSE'
  })

  const submitHandler = event => {
    event.preventDefault()
    // DO SOMETHING!?!
    // alert(`email: ${input.email}, password: ${input.password}`)
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: input['email'],
          password: input['password']
        }
      })
    })
    .then(resp => {
      if (resp.ok) {
        setInput({
          ...input,
          loggedIn: "TRUE!!!!"
        })
      } else {
        return Promise.reject(resp)
      }
    })
    .catch(error => {
      console.log(error)
      // setInput({
      //   ...input,
      //   loggedIn: error
      // })
    })
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
