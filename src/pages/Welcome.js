import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.scss'
const Welcome = () => {
  return (
    <div className={'welcome'}>
      <h1>Welcome</h1>
      <Link to='/login'>login</Link><br/>
      <Link to='/sign-up'>sign up</Link>


    </div>
  )
}

export default Welcome
