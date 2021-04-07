import React from 'react'
import FriendList from './FriendList'
import FriendRequestContainer from '../friends/FriendRequestContainer'
import NewFriendInvite from '../friends/NewFriendInvite'
import { FancyLink } from '../common/GlobalElements'
import FriendCard from './FriendCard'
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

const friendPageContainer = {
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 0 2rem 0"
}

const FriendIndex = () => {
  const { path, url } = useRouteMatch()

  const handleUnFriend = (id) => {
    alert(`{action: DELETE, id: ${id} }`)

  }
  const cards = TestFriends.map(r => <FriendCard record={r} cb={handleUnFriend} />)
  // Connect to REDUX 
  return (
    <Switch>
      <Route exact path={path} >
        <div style={friendPageContainer}>

          <div style={{overflowY: "scroll"}}>
            {cards}
          </div>

          {/* <FriendList records={TestFriends} /> */}
          <NewFriend to={`${url}/new`}>add friend</NewFriend>
        </div>

        <FriendRequestContainer requests={FriendRequests} />
      </Route>

      <Route path={`${path}/new`} component={NewFriendInvite} />
    </Switch>
  )
}

export default FriendIndex
