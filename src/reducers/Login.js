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
    case LOGOUT:
      return { isLoggedIn: '', userId: '' }
    default:
      return state
  }
}
export default LoginReducer