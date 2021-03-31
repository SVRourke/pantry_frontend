const TestFriends = [
  {
    "id": 1,
    "friend_name": "Sharain",
    "record_age": "1 days",
    "friend_id": 2
  },
  {
    "id": 3,
    "friend_name": "Maya",
    "record_age": "1 days",
    "friend_id": 3
  }
]
const FriendRequests = [
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
const TestLists = [
  { 
    id: 3,
    name: 'Squad',
    contributor_count: 5,
    item_count: 0 
  },
  { 
    id: 2,
    name: "Rain & Sam's List",
    contributor_count: 2,
    item_count: 5
  },
  { 
    id: 1,
    name: "Sam's List",
    contributor_count: 1,
    item_count: 0
  }
]

const TestInvites = [
  {
    id: 1,
    record_age: '1 days',
    requestor_name: 'Sam',
    requestee_name: 'Jake',
    contributor_count: 1,
    type: 'sent' 
  },
  {
    id: 7,
    record_age: '5 days',
    requestor_name: 'Sam',
    requestee_name: 'Rohan',
    contributor_count: 3,
    type: 'sent' 
  },
  {
    id: 2,
    record_age: '5 days',
    requestor_name: 'Autumn',
    requestee_name: 'Sam',
    contributor_count: 10,
    type: 'received' 
  },
  {
    id: 3,
    record_age: '5 days',
    requestor_name: 'Autumn',
    requestee_name: 'Sam',
    contributor_count: 4,
    type: 'received' 
  }
]

export { 
  FriendRequests,
  TestFriends,
  TestLists,
  TestInvites
}