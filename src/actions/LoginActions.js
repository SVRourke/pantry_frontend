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
      .then(res => {
        return (
          res.status === 'authorized'
            ? res
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