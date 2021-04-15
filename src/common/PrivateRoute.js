import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const { loggedIn, userId, path, component, ...others } = props

  return loggedIn === 'TRUE' ? <Route path={path} component={component} /> : <Redirect to='/login' />
}

const mapStateToProps = state => ({
  userId: state.profile.userId,
  loggedIn: state.profile.isLoggedIn
})

// const mapDispatchToProps = dispatch => {
// CHECK AUTH THUNK
// }

export default connect(mapStateToProps,)(PrivateRoute);
