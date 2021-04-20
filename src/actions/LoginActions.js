import Api from '../api/Interface'

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
    Api.login(data)
      .then(res => { dispatch(loginSuccess(res)) })
      .catch(error => dispatch(loginFailure(error)))
  }
}

export const authCheck = () => {
  return dispatch => {
    Api.checkAuth()
      .then(r => {
        if (r.ok) {
          return r.json()
        } else {
          return Promise.reject(r)
        }
      })
      .then(res => {
        dispatch(loginSuccess(res))
      })
      .catch(error => { console.log(loginFailure(error)) })
  }
}