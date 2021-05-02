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

const info = (info) => {
  return {
    type: 'GETPROFILE',
    info
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
      .then(r => dispatch(destroy()))
      .then(() => cb())
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
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
      .then(d => dispatch(loginSuccess(d)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
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
      .then(d => dispatch(loginSuccess(d)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}

const profile = (userId) => {
  return dispatch => {
    api.auth.profile(userId)
      .then(response => {
        return (
          response.ok
            ? response.json()
            : Promise.reject(response)
        )
      })
      .then(data => dispatch(info(data.user)))
      .catch(error => (
        error.status === 401
          ? dispatch({ type: 'LOGOUT' })
          : alert("That didn't work, try again later")
      )
      )
  }
}

export {
  authCheck,
  handleLogin,
  logout,
  profile
}