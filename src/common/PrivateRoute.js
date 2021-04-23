import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ loggedIn, userId, path, component, authCheck, ...others }) => {
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

export default connect(mapStateToProps,)(PrivateRoute);
