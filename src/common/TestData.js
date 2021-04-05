const TestFriends = [
  {
    id: 1,
    friend_name: 'Sharain',
    record_age: '1 days',
    friend_id: 2
  },
  {
    id: 3,
    friend_name: 'Maya',
    record_age: '1 days',
    friend_id: 3
  }
]
const FriendRequests = [
  {
    id: 4,
    requestor_id: 1,
    requestor_name: 'Sam',
    requestee_name: 'Autumn',
    type: 'sent',
    record_age: '5 days'
  },
  {
    id: 3,
    requestor_id: 5,
    requestor_name: 'Jake',
    requestee_name: 'Sam',
    type: 'received',
    record_age: '5 days'
  }
]
const TestLists = [
  {
    id: 3,
    name: 'Squad',
    contributors: [
      {
        id: 1,
        email: 'Sam@gmail.com',
        name: 'Sam'
      },
      {
        id: 2,
        email: 'Sharain@gmail.com',
        name: 'Sharain'
      },
      {
        id: 3,
        email: 'Maya@gmail.com',
        name: 'Maya'
      },
      {
        id: 4,
        email: 'Rohan@gmail.com',
        name: 'Rohan'
      },
      {
        id: 6,
        email: 'Autumn@gmail.com',
        name: 'Autumn'
      }
    ],
    items: []
  },
  {
    id: 2,
    name: "Rain & Sam's List",
    contributors: [
      {
        id: 1,
        email: 'Sam@gmail.com',
        name: 'Sam'
      },
      {
        id: 2,
        email: 'Sharain@gmail.com',
        name: 'Sharain'
      }
    ],
    items: [
      {
        id: 1,
        name: 'Garlic',
        amount: '3 bulbs',
        acquired: true
      },
      {
        id: 2,
        name: 'Coffee',
        amount: '1 tub',
        acquired: null
      },
      {
        id: 3,
        name: 'butter',
        amount: '1 lb',
        acquired: null
      },
      {
        id: 4,
        name: '3 mangoes',
        amount: '',
        acquired: true
      },
      {
        id: 5,
        name: 'potatoes',
        amount: '1 little bag',
        acquired: null
      }
    ]
  },
  {
    id: 1,
    name: "Sam's List",
    contributors: [
      {
        id: 1,
        email: 'Sam@gmail.com',
        name: 'Sam'
      }
    ],
    items: []
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
const TestItems = [
  {
    id: 1,
    name: 'Garlic',
    amount: '3 bulbs',
    acquired: null
  },
  {
    id: 2,
    name: 'Coffee',
    amount: '1 tub',
    acquired: null
  },
  {
    id: 3,
    name: 'butter',
    amount: '1 lb',
    acquired: null
  },
  {
    id: 4,
    name: 'mangoes',
    amount: '3',
    acquired: null
  },
  {
    id: 5,
    name: 'potatoes',
    amount: '1 little bag',
    acquired: null
  }
]

export {
  FriendRequests,
  TestFriends,
  TestLists,
  TestInvites,
  TestItems
}
