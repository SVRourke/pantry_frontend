import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout, profile } from './actions/LoginActions'
// import api from './api/Index'

const Account = (props) => {
  const { logout, history, userId, profile } = props

  useEffect(() => {
    profile(userId)
  }, [])

  const handleLogout = () => {
    logout(() => history.push("/"))
  }

  return (
    <div>
      <button onClick={handleLogout} >Logout</button>

      {/* LIST COUNT */}
      {/* ITEM COUNT */}
      {/* FRIEND COUNT */}
      {/* LOGOUT */}
      {/* DELETE ACCOUNT */}


      <h2>Account</h2>
      <h2>log out</h2>
      <h2>delete account</h2>
      <h2>stats?</h2>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: (cb) => dispatch(logout(cb)),
  profile: (userId) => dispatch(profile(userId))
})
const mapStateToProps = state => ({
  userId: state.profile.userId
})
export default connect(mapStateToProps, mapDispatchToProps)(Account)
