import React from 'react'
import FriendList from '../FriendList'
const FriendIndex = () => {
  const testFriends = [
    {"id": 1, "friend_name": "Sharain", "record_age": "1 days", "friend_id": 2},
    {"id": 3, "friend_name": "Maya", "record_age": "1 days", "friend_id": 3}
  ]
  return (
    <div>
      <FriendList records={testFriends} />

      <h5>Invite Friends Button</h5>

      {/* 
        Tabbed Requests Component filters rendered requests by 'sent' or 'received'  
      */}
      <h3>Friends Requests component</h3>

      {/* <div>
      <ListCardContainer records={testLists} />

      <FancyLink>
        <Link to="lists/new">New List Button</Link>
      </FancyLink>

      <ListInvitesContainer invites={testInvites} />
    </div> */}
    </div>
  )
}

export default FriendIndex
