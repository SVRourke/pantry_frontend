import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const { REACT_APP_API_DOMAIN } = process.env
  return (
    <div>
      <h1>Welcome</h1>
      <p>first {REACT_APP_API_DOMAIN}</p>
      <p>second {process.env.REACT_APP_API_DOMAIN}</p>
      <Link to='/login'>login</Link><br/>
      <Link to='/sign-up'>sign up</Link>
    </div>
  )
}

export default Welcome
