import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const { API_DOMAIN } = process.env
  return (
    <div>
    <h2>{API_DOMAIN}</h2>
      <h1>Welcome</h1>
      <Link to='/login'>login</Link><br/>
      <Link to='/sign-up'>sign up</Link>
    </div>
  )
}

export default Welcome
