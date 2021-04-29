import Cookies from 'js-cookie'
import api from '../api/Index'

const loginSuccess = (info) => {
  return {
    type: "LOGGEDIN",
    id: info.id
  }
}

const loginFailure = (error) => {
  return {
    type: 'LOGINFAILURE',
    error: error
  }
}

const destroy = () => {
  return {
    type: 'LOGOUT'
  }
}

const reset = () => {
  return {
    type: 'RESET'
  }
}

const logout = (cb) => {
  return dispatch => {
    api.auth.logout()
      .then(r => {
        return (
          r.status === 410
            ? r.json()
            : Promise.reject(r)
        )
      })
      .then(r => {
        dispatch(destroy())
        // localStorage.clear(['persist:root'])
      })
      .then(() => cb())
      .catch(error => {
        alert("logout failed, try again")
      })
  }
}

const handleLogin = (data) => {
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

const authCheck = () => {
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
        dispatch(reset())
      })
  }
}

const profile = (userId) => {
  return dispatch => {
    api.auth.profile(userId)
      .then(res => {
        return (
          res.ok
            ? res.json()
            : Promise.reject(res)
        )
      })
      .then(d => console.log(d))
      .catch(error => console.log("ERROR", error))
  }
}

export {
  authCheck,
  handleLogin,
  logout,
  profile
}