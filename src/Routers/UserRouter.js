import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'

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
        <Route path={`${path}/lists`} component={ListsIndex} />
        <Route path={`${path}/friends`} component={Friends} />
        <Route path={`${path}/account`} component={Account} />
      </Switch>
    </div>
  )
}

export default UserRouter
