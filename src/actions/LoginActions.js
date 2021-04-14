import { Interface, Schemas } from '../api/Interface'

export const loginPending = () => {
  return { type: "LOGINPENDING" }
}

export const loginSuccess = (info) => {
  return {
    type: "LOGGEDIN",
    info: info
  }
}

export const loginFailure = (error) => {
  return {
    type: 'LOGINFAILURE',
    error: error
  }
}
// ADD LOGOUT

export const handleLogin = (data) => {
  return dispatch => {
    dispatch(loginPending())
    Interface('login', Schemas['login'](data))
      .then(res => { dispatch(loginSuccess(res)) })
      .catch(error => dispatch(loginFailure(error)))
  }
}