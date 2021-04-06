import React from 'react'
import FriendList from './FriendList'
import FriendRequestContainer from '../friends/FriendRequestContainer'
import NewFriendInvite from '../friends/NewFriendInvite'
import { FancyLink } from '../common/GlobalElements'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
// TEST DATA
import { TestFriends, FriendRequests } from '../common/TestData';

const NewFriend = styled(Link)`
  border: solid var(--offblack-color) 2px;
  padding: .3rem .7rem;
  border-radius: 3rem;
  width: 11ch;
  margin: 1rem 0;

  &:hover {
    background: var(--offblack-color);
    color: white;

  }

`;

const FriendIndex = () => {
  const { path, url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path} >
        <div style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 0 2rem 0"
          }}>
          <FriendList records={TestFriends} />
          <NewFriend to={`${url}/new`}>add friend</NewFriend>
        </div>


        <FriendRequestContainer requests={FriendRequests} />
      </Route>

      <Route path={`${path}/new`} component={NewFriendInvite} />
    </Switch>
  )
}

export default FriendIndex
