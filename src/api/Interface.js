import Cookies from 'js-cookie'

const BASEURL = "http://localhost:3000/"

const BASEOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }

}
const AUTHEDOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    "X-CSRF-Token": Cookies.get("CSRF-TOKEN")
  }
}

const buildOptions = (method, authed, body) => {
  const options = {
    method: method,
    ...(authed ? AUTHEDOPTIONS : BASEOPTIONS),
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
      buildOptions(method, authed, body)
    )
  )
}
