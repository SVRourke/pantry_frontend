import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to={`/users/6`}>Login</Link>
    </div>
  )
}

export default Login