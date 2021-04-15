const ROOTURL = 'http://localhost:3000/'

const LOGOUT = 'logout'
const LOGIN = 'login'
const CHECKAUTH = 'checkauth'

// const setups = {
//   'logout': {

//   }
//   'login': {

//   }
//   'checkauth': {

//   }
// }
const baseOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
}

// ALERT ADD ENDPOINTS TO SCHEMAS
export const Schemas = {
  logout: {
    method: "DELETE",
    ...baseOptions
  },
  login: (user) => {
    return {
      method: "POST",
      ...baseOptions,
      body: JSON.stringify({
        user: user
      })
    }
  },
  checkauth: {
    method: 'GET',
    ...baseOptions
  },
  basicGet: {
    method: 'GET',
    ...baseOptions
  }
}


export const Interface = (endpoint, schema) => {
  return (fetch(`${ROOTURL}${endpoint}`, schema)
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      } else {
        return Promise.reject(resp)
      }
    }))
}
