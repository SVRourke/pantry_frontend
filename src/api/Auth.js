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
const auth = {
  login,
  logout,
  checkAuth,
  profile
}

export default auth