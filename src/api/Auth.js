import { baseRequest } from './Interface'

const login = user => {
  return (
    baseRequest(
      'login',
      'POST',
      true,
      { user: user }
    )
  )
}

const logout = () => {
  return (
    baseRequest(
      'logout',
      'DELETE',
      true
    )
  )
}

const checkAuth = () => {
  return (
    baseRequest(
      'auth_check',
      'GET',
      true
    )
  )
}

const profile = (userId) => {
  return (
    baseRequest(
      `users/${userId}`,
      'GET',
      true
    )
  )
}

const signUp = (user) => {
  return(
    baseRequest(
      'users',
      'POST',
      true,
      { user: user }
    )
  )
}
const auth = {
  login,
  logout,
  checkAuth,
  profile,
  signUp
}

export default auth