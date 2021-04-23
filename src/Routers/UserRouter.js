import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

import {connect} from 'react-redux'
import { authCheck } from '../actions/LoginActions'

import PrivateRoute from '../common/PrivateRoute'

import ListsIndex from '../lists/ListsIndex'
import Friends from '../friends/FriendIndex'
import Account from '../Account'
import MainNav from '../common/MainNav'

const UserRouter = (props) => {
  const { path, url } = useRouteMatch()

  props.authCheck()


  return (
    <div>
      <MainNav />

      <Switch>
        <Route exact path={`${path}/`} >
          <Redirect to={`${url}/lists`} />
        </Route>
        <PrivateRoute path={`${path}/lists`} component={ListsIndex} />
        <PrivateRoute path={`${path}/friends`} component={Friends} />
        <PrivateRoute path={`${path}/account`} component={Account} />
      </Switch>
    </div>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authCheck())
  }
}

const mapStateToProps = state => ({
  userId: state.profile.userId,
  loggedIn: state.profile.isLoggedIn
})

export default connect( mapStateToProps, mapDispatchToProps)(UserRouter)
