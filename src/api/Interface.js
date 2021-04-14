const ROOTURL = 'http://localhost:3000/'

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
  }
}


export const Interface = (endpoint, schema) => {
  return (fetch(`${ROOTURL}${endpoint}`, schema)
    .then(resp => {
      if (resp.ok) {
        return resp
      } else {
        return Promise.reject(resp)
      }
    }))
}
