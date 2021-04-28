const SUCCESS = 'LOGGEDIN'
const FAILURE = 'LOGINFAILURE'
const LOGOUT = "LOGOUT"
const initialState = {
  isLoggedIn: 'Logged Out',
  userId: ''
}

const LoginReducer = (state=initialState, action) => {
  switch(action.type) {
    case SUCCESS:
      return {...state, isLoggedIn: 'TRUE', userId: action.id }
    case FAILURE:
      return {...state, isLoggedIn: 'FAILED'}
    case LOGOUT:
      return { isLoggedIn: 'Logged Out', userId: '' }
    default:
      return state
  }
}
export default LoginReducer