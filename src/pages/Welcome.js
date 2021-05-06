import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/login'>login</Link><br/>
      <Link to='/sign-up'>sign up</Link>
    </div>
    {process.env['REACT_APP_API_DOMAIN']}
  )
}

export default Welcome
