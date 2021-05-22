import Cookies from 'js-cookie'

const BASEURL = process.env.REACT_APP_API_DOMAIN

const BASEOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  }
  
}
const authOptions = token => (
  {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'must-revalidate',
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': token
    }
  }

)

const buildOptions = (method, authed, body, token) => {
  const options = {
    method: method,
    ...(authed ? authOptions(token) : BASEOPTIONS),
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  return options
}

export const baseRequest = (endpoint, method, authed, body) => {
  return (
    fetch(
      `${BASEURL}${endpoint}`,
      buildOptions(
        method,
        authed,
        body,
        Cookies.get('CSRF-TOKEN')
      )
    )
  )
}
