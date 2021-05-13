import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.scss'
const Welcome = () => {
  return (
    <div className={'welcome'}>
      <h1>Pantry</h1>
      <p></p>

      <div className={'welcome_buttons'}>
        <Link to='/login'>login</Link><br/>
        <Link to='/sign-up'>sign up</Link>
      </div>


    </div>
  )
}

export default Welcome
