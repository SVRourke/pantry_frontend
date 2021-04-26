import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import FriendRequestContainer from '../friends/FriendRequestContainer'
import NewFriendRequest from '../friends/NewFriendRequest'
import FriendCard from './FriendCard'
import { NewFriend } from '../common/elements'

import { loadFriends, unfriend } from '../actions/FriendActions'


const friendPageContainer = {
  maxHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 0 2rem 0"
}

const FriendIndex = ({ load, userId, friends, unfriend }) => {
  const { path, url } = useRouteMatch()

  useEffect(() => {
    load(userId)
  }, [])

  const handleUnFriend = (friendId, friendshipId) => {
    unfriend(userId, friendId, friendshipId)
  }

  const cards = friends.map(r => (
    <FriendCard
      record={r}
      cb={handleUnFriend}
      key={r.id}
    />
  ))

  return (
    <Switch>
      <Route exact path={path}>
        <div style={friendPageContainer}>

          <div style={{ overflowY: "scroll" }}>
            {cards}
          </div>

          <NewFriend to={`${url}/new`}>add friend</NewFriend>
        </div>

        <FriendRequestContainer />
      </Route>

      <Route path={`${path}/new`} component={NewFriendRequest} />
    </Switch>
  )
}

const mapStateToProps = state => ({
  userId: state.profile.userId,
  friends: state.friends
})

const mapDispatchToProps = dispatch => ({
  load: (userId) => dispatch(loadFriends(userId)),
  unfriend: (userId, friendId, friendshipId) => dispatch(unfriend(userId, friendId, friendshipId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex)
