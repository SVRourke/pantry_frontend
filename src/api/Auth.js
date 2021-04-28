import { baseRequest } from './Interface'

const login = user => {
  return baseRequest('login', 'POST', false, { user: user})
}

const logout = () => {
  return baseRequest('logout', 'DELETE', true)
}

const checkAuth = () => {
  return baseRequest('auth_check', 'GET', true)
}

const auth = {
  login,
  logout,
  checkAuth
}

export default auth