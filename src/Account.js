import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout, authCheck } from './actions/LoginActions'
import api from './api/Index'

const Account = (props) => {
  const { logout, history } = props

  useEffect(() => {
    authCheck()
  })

  const handleLogout = () => {
    logout(() => history.push("/"))
  }

  return (
    <div>
      <button onClick={handleLogout} >Logout</button>

      <h2>Account</h2>
      <h2>edit info</h2>
      <h2>log out</h2>
      <h2>new password</h2>
      <h2>delete account</h2>
      <h2>stats?</h2>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: (cb) => dispatch(logout(cb)),
  authCheck: () => dispatch(authCheck()),
})

export default connect(null, mapDispatchToProps)(Account)
