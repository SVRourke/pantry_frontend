import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authCheck } from '../actions/LoginActions'

const PrivateRoute = ({ loggedIn, userId, path, component, authCheck, ...others }) => {
  if (loggedIn !== 'TRUE') {
    authCheck()
  }

  return (
    loggedIn === 'TRUE'
      ? <Route path={path} component={component} />
      : <Redirect to='/login' />
  )
}

const mapStateToProps = state => ({
  userId: state.profile.userId,
  loggedIn: state.profile.isLoggedIn
})

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
