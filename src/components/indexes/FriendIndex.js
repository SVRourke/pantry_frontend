import React from 'react'
import FriendList from '../FriendList'
import FriendRequestContainer from '../FriendRequestContainer'

const FriendIndex = () => {
  const testFriends = [
    {"id": 1, "friend_name": "Sharain", "record_age": "1 days", "friend_id": 2},
    {"id": 3, "friend_name": "Maya", "record_age": "1 days", "friend_id": 3}
  ]

  const testRequests = [
    {
      "id": 4,
      "requestor_id": 1,
      "requestor_name": "Sam",
      "requestee_name": "Autumn",
      "type": "sent",
      "record_age": "5 days"
    },
    {
      "id": 3,
      "requestor_id": 5,
      "requestor_name": "Jake",
      "requestee_name": "Sam",
      "type": "received",
      "record_age": "5 days"
    }
  ]

  return (
    <div>
      <FriendList records={testFriends} />

      <h5>Invite Friends Button</h5>

      <FriendRequestContainer requests={testRequests} />
    </div>
  )
}

export default FriendIndex
