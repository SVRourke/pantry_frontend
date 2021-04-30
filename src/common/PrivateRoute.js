import React from 'react'
import { 
  Route, 
  Redirect 
} from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, loggedIn, ...others }) => (
  <Route
    {...others} // Drilling but w/e it's a good excuse to do so
    render={(props) => (
      loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)

const mstp = state => ({ 
  loggedIn: state.profile.isLoggedIn
})

export default connect(mstp,)(PrivateRoute);