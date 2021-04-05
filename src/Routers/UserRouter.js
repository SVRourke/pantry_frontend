import React, {useState} from 'react'
import {
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch,
  // useParams 
} from 'react-router-dom'

import Lists from '../lists/ListsIndex'
import Friends from '../friends/FriendIndex'
import Account from '../Account'
import MainNav from '../common/MainNav'
const UserRouter = () => {
  const { path, url } = useRouteMatch()
  // const user_id = useParams()

  return (
    <div>
      <MainNav />

      <Switch>
        <Route exact path={`${path}/`} >
          <Redirect to={`${url}/lists`} />
        </Route>
        <Route path={`${path}/lists`} component={Lists} />
        <Route path={`${path}/friends`} component={Friends} />
        <Route path={`${path}/account`} component={Account} />
      </Switch>
    </div>
  )
}

export default UserRouter
