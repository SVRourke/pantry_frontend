const TestFriends = [
  {
    id: 1,
    friend_name: 'Sharain',
    record_age: 30243,
    friend_id: 2,
    mutual_list_count: 3
  },
  {
    id: 3,
    friend_name: 'Maya',
    record_age: 30243,
    friend_id: 3,
    mutual_list_count: 3
  }
]
const FriendRequests = [
  {
    id: 4,
    requestor_id: 1,
    requestor_name: 'Sam',
    requestee_name: 'Autumn',
    type: 'sent',
    record_age: 23102
  },
  {
    id: 3,
    requestor_id: 5,
    requestor_name: 'Jake',
    requestee_name: 'Sam',
    type: 'received',
    record_age: 23107
  }
]

const TestLists = [
  {
    id: 3,
    name: 'Squad',
    items: {},
    contributions: [
      {
        id: 1,
        user_id: 1,
        username: 'Sam',
        record_age: 34725,
        item_count: 0
      },
      {
        id: 2,
        user_id: 2,
        username: 'Sharain',
        record_age: 34725,
        item_count: 0
      },
      {
        id: 3,
        user_id: 3,
        username: 'Maya',
        record_age: 34725,
        item_count: 0
      },
      {
        id: 4,
        user_id: 4,
        username: 'Rohan',
        record_age: 34725,
        item_count: 0
      },
      {
        id: 5,
        user_id: 6,
        username: 'Autumn',
        record_age: 34725,
        item_count: 0
      }
    ]
  },
  {
    id: 2,
    name: "Rain \u0026 Sam's List",
    items: {
      1: {
        id: 1,
        name: 'Garlic',
        amount: '3 bulbs',
        acquired: false,
        record_age: 28971
      },
      2: {
        id: 2,
        name: 'Coffee',
        amount: '1 tub',
        acquired: false,
        record_age: 28970
      },
      3: {
        id: 3,
        name: 'butter',
        amount: '1 lb',
        acquired: false,
        record_age: 28970
      },
      4: {
        id: 4,
        name: '3 mangoes',
        amount: '',
        acquired: false,
        record_age: 28970
      },
      5: {
        id: 5,
        name: 'potatoes',
        amount: '1 little bag',
        acquired: false,
        record_age: 28970
      }
    },
    contributions: [
      {
        id: 6,
        user_id: 1,
        username: 'Sam',
        record_age: 34725,
        item_count: 5
      },
      {
        id: 7,
        user_id: 2,
        username: 'Sharain',
        record_age: 34725,
        item_count: 0
      }
    ]
  },
  {
    id: 1,
    name: "Sam's List",
    items: {},
    contributions: [
      {
        id: 8,
        user_id: 1,
        username: 'Sam',
        record_age: 34725,
        item_count: 0
      }
    ]
  }
]

const TestInvites = [
  {
    id: 1,
    type: 'sent',
    list_name: "Sam's List",
    requestor_name: 'Sam',
    requestee_name: 'Jake',
    contributor_count: 1,
    record_age: 30250
  },
  {
    id: 7,
    type: 'sent',
    list_name: "Sam's List",
    requestor_name: 'Sam',
    requestee_name: 'Rohan',
    contributor_count: 1,
    record_age: 23072
  },
  {
    id: 2,
    type: 'received',
    list_name: 'new list',
    requestor_name: 'Autumn',
    requestee_name: 'Sam',
    contributor_count: 0,
    record_age: 23960
  },
  {
    id: 3,
    type: 'received',
    list_name: 'New New List',
    requestor_name: 'Autumn',
    requestee_name: 'Sam',
    contributor_count: 0,
    record_age: 23958
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
