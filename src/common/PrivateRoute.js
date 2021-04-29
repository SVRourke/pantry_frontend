import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authCheck } from '../actions/LoginActions'

const PrivateRoute = ({ component: Component, loggedIn, ...others }) => ( 
// {
  <Route {...others} render={(props) => (
    loggedIn === 'TRUE'
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
)

const mapStateToProps = state => ({
  userId: state.profile.userId,
  loggedIn: state.profile.isLoggedIn
})

export default connect(mapStateToProps, )(PrivateRoute);