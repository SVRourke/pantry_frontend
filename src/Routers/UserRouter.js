import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

import PrivateRoute from '../common/PrivateRoute'
import ListsIndex from '../lists/ListsIndex'
import Friends from '../friends/FriendIndex'
import Account from '../Account'
import MainNav from '../common/MainNav'

const UserRouter = (props) => {
  const { path, url } = useRouteMatch()


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

export default UserRouter
