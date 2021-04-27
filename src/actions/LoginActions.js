import Api from '../api/Interface'
import api from '../api/Index'

export const loginSuccess = (info) => {
  return {
    type: "LOGGEDIN",
    id: info.id
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
  api.auth.login(data)
      .then(res => {
        return (
          res.ok
            ? res.json()
            : Promise.reject(res)
        )
      })
      .then(d => {
        dispatch(loginSuccess(d))
      })
      .catch(error => dispatch(loginFailure(error)))
  }
}

export const authCheck = () => {
  return dispatch => {
    api.auth.checkAuth()
      .then(res => {
        return (
          res.ok
            ? res.json()
            : Promise.reject(res)
        )
      })
      .then(d => {
        dispatch(loginSuccess(d))
      })
      .catch(error => {
        alert("Request could not be completed try again")
        console.log("THUNK ERROR", error)
        dispatch(loginFailure(error))
      })
  }
}