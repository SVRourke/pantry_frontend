const ROOTURL = 'http://localhost:3000/'

// ALERT ADD ENDPOINTS TO SCHEMAS
export const Schemas = {
  logout: {
    method: "DELETE",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  },
  login: (user) => {
    return {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    }
  },
  checkauth: {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
    }
  }, 
  basicGet: {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
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
