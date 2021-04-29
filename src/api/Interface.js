import Cookies from 'js-cookie'

const BASEURL = "http://localhost:3000/"

const BASEOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }

}
const AUTHEDOPTIONS = token => (
  {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'must-revalidate',
      'X-Requested-With': 'XMLHttpRequest',
      "X-CSRF-Token": token
    }
  }

) 

const buildOptions = (method, authed, body, token) => {
  const options = {
    method: method,
    ...(authed ? AUTHEDOPTIONS(token) : BASEOPTIONS),
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  return options
}

export const baseRequest = (endpoint, method, authed, body) => {
  // console.log(`REQUESTING ${endpoint}, ${method}, ${Cookies.get("CSRF-TOKEN")}`)
  return (
    fetch(
      `${BASEURL}${endpoint}`,
      buildOptions(method, authed, body, Cookies.get("CSRF-TOKEN"))
    )
  )
}
