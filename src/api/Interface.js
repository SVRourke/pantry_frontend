const ROOTURL = 'http://localhost:3000/'

export const Schemas = {
  logout: {
    method: "DELETE",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  },
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
