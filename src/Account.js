import React from 'react'
import Api from './api/Interface'
const Account = () => {
  const logout = () => {
    Api.logout()
      .then(d => {
        console.log(d)
      })
      .catch(error => {
        console.log(error)
        alert('Log Out Failed, try again soon...')
      })
  }
  return (
    <div>
      <button onClick={logout} >Logout</button>
      <h2>Account</h2>
      <h2>edit info</h2>
      <h2>log out</h2>
      <h2>new password</h2>
      <h2>delete account</h2>
      <h2>stats?</h2>
    </div>
  )
}

export default Account
