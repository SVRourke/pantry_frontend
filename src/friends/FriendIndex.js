import React from 'react'
import FriendList from './FriendList'
import FriendRequestContainer from '../friends/FriendRequestContainer'
import NewFriendInvite from '../pages/NewFriendInvite'
import { FancyLink } from '../common/GlobalElements'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'

// TEST DATA
import { TestFriends, FriendRequests } from '../common/TestData';


const FriendIndex = () => {
  const { path, url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} >
        <FriendList records={TestFriends} />

        <FancyLink>
          <Link to={`${url}/new`}>add friend</Link>
        </FancyLink>

        <FriendRequestContainer requests={FriendRequests} />
      </Route>

      <Route path={`${path}/new`} component={NewFriendInvite} />
    </Switch>
  )
}

export default FriendIndex
