const PENDING = 'LOGINPENDING'
const SUCCESS = 'LOGGEDIN'
const FAILURE = 'LOGINFAILURE'

const initialState = {
  isLoggedIn: 'Logged Out',
  userId: ''
}
// Check Auth,
//     If Authed- dispatch({ type: SUCCESS, userId: response.userId})


const LoginReducer = (state=initialState, action) => {
  switch(action.type) {
    case PENDING:
      return { ...state, isLoggedIn: 'pending' }
    case SUCCESS:
      return {...state, isLoggedIn: 'TRUE', userId: action['info']['id'] }
    case FAILURE:
      return {...state, isLoggedIn: 'FAILED'}
    default:
      return state
  }
}
export default LoginReducer