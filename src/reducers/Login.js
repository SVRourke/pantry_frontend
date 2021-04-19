const PENDING = 'LOGINPENDING'
const SUCCESS = 'LOGGEDIN'
const FAILURE = 'LOGINFAILURE'

const initialState = {
  isLoggedIn: 'Logged Out',
  userId: ''
}

const LoginReducer = (state=initialState, action) => {
  switch(action.type) {
    case PENDING:
      return { ...state, isLoggedIn: 'pending' }
    case SUCCESS:
      return {...state, isLoggedIn: 'TRUE', userId: action['info']['userId'] }
    case FAILURE:
      return {...state, isLoggedIn: 'FAILED'}
    default:
      return state
  }
}
export default LoginReducer