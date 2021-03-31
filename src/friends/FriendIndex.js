import React from 'react'
import FriendList from './FriendList'
import FriendRequestContainer from '../friends/FriendRequestContainer'
// TEST DATA
import { TestFriends, FriendRequests } from '../common/TestData'

const FriendIndex = () => {
  return (
    <div>
      <FriendList records={TestFriends} />

      <h5>Invite Friends Button</h5>

      <FriendRequestContainer requests={FriendRequests} />
    </div>
  )
}

export default FriendIndex
