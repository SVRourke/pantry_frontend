const LOGIN = 'LOGGEDIN'
const LOGOUT = 'LOGOUT'
const PROFILE = 'GETPROFILE'
const RESET = 'RESET'

const initialState = {
  isLoggedIn: false,
  userId: '',
  email: '',
  name: '',
  list_count: 0,
  friend_count: 0,
  sent_requests: 0,
  received_requests: 0
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, userId: action.id }
    case LOGOUT:
      return initialState
    case PROFILE:
      return { ...state, ...action.info}
    case RESET:
      return initialState
    default:
      return state
  }
}
export default LoginReducer