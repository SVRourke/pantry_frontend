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

const logout = (cb) => {
  return dispatch => {
    cb()
    api.auth.logout()
      .then(r => {
        return (
          r.ok
            ? r.json()
            : Promise.reject(r)
        )
      })
      // .then(d => {
      //   console.log("DISP DEST")
      //   dispatch(destroy)
      // })
      .then(() => {
        console.log("REMOVING COOKIE")
      })
      .catch(error => {
        Cookies.remove('CSRF-TOKEN', {path: '/'})
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
        console.log(error)
        dispatch(loginFailure(error))
      })
  }
}

export {
  authCheck,
  handleLogin,
  logout,
}