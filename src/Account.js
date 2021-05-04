import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout, profile, closeAccount } from './actions/LoginActions'

const Account = ({ logout, history, getProfile, profile, closeAccount }) => {
  useEffect(() => {
    getProfile(profile.userId)
  }, [])

  const handleLogout = () => {
    logout(() => history.push('/login'))
  }

  const handleDelete = () => {
    closeAccount(profile.userId)
    history.push('/')
  }

  return (
    <div>

      <h1>hi {profile.name}!</h1>
      <p>email: {profile.email}</p>

      <h3>lists: {profile.list_count}</h3>
      <h3>friends: {profile.friend_count}</h3>
      <h3>Friend Requests</h3>
      <p>sent: {profile.sent_requests} received: {profile.received_requests}</p>
      <h3>list invites</h3>
      <p>sent: {profile.sent_invites} received: {profile.received_invites}</p>
      <h2>delete account</h2>
      <button onClick={handleLogout} >logout</button>
      <button onClick={handleDelete} >delete account</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: cb => dispatch(logout(cb)),
  getProfile: userId => dispatch(profile(userId)),
  closeAccount: userId => dispatch(closeAccount(userId))
})
const mapStateToProps = state => ({
  profile: state.profile
})
export default connect(mapStateToProps, mapDispatchToProps)(Account)
