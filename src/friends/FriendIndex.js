import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FriendRequestContainer from '../friends/FriendRequestContainer'
import NewFriendRequest from '../friends/NewFriendRequest'
import FriendCard from './FriendCard'
import { NewFriend } from '../common/elements'

// TEST DATA
import { TestFriends } from '../common/TestData';

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
  const cards = TestFriends.map(r => <FriendCard record={r} cb={handleUnFriend} key={r.id} />)
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

        <FriendRequestContainer />
      </Route>

      <Route path={`${path}/new`} component={NewFriendRequest} />
    </Switch>
  )
}

export default FriendIndex
