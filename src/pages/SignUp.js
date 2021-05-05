import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions/LoginActions'
import { Redirect } from 'react-router-dom'

const initialState = {
  email: '',
  name: '',
  password: ''
}

const SignUp = ({ userId, isLoggedIn, signUp }) => {
  const [input, setInput] = useState(initialState)

  const submitHandler = event => {
    event.preventDefault()
    signUp(input)
    setInput(initialState)
  }

  const changeHandler = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      {isLoggedIn ? <Redirect to={`/users/${userId}`} /> : false}

      <h1>sign up</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={submitHandler} >
        <label for={'name'} >name:</label>
        <input
          name="name"
          type="test"
          value={input['name']}
          onChange={changeHandler} />

        <label for={'email'} >email:</label>
        <input
          name="email"
          type="email"
          value={input['email']}
          onChange={changeHandler} />

        <label for={'password'} >password:</label>
        <input
          name="password"
          type="password"
          value={input['password']}
          onChange={changeHandler} />

        <input
          type="submit"
          value="sign up" />
      </form>

    </div>
  )
}

const mapStateToProps = state => ({
  userId: state.profile.userId,
  isLoggedIn: state.profile.isLoggedIn
})

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
