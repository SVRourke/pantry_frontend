import Cookies from 'js-cookie'

const BASEURL = "http://localhost:3000/"

const BASEOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }

}
const AUTHEDOPTIONS = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    "X-CSRF-Token": Cookies.get("CSRF-TOKEN")
  }
}

const requestOptions = {
  login: (user) => {
    return {
      method: "POST",
      ...BASEOPTIONS,
      body: JSON.stringify({
        user: user
      })
    }
  },
  logout: {
    method: "DELETE",
    ...AUTHEDOPTIONS
  },
  loadlists: {
    method: 'GET',
    ...BASEOPTIONS
  },
  checkauth: {
    method: 'GET',
    ...AUTHEDOPTIONS
  },
  createItem: (item) => {
    return {
      method: 'POST',
      ...AUTHEDOPTIONS,
      body: JSON.stringify({
        item: item
      })
    }
  },
  deleteItem: {
    method: 'delete',
    ...AUTHEDOPTIONS
  },
  updateItem: (item) => {
    return {
      method: 'PUT',
      ...AUTHEDOPTIONS,
      body: JSON.stringify({ "item": item })
    }
  },
  toggleItem: {
    method: 'PATCH',
    ...AUTHEDOPTIONS
  },
  loadItems: {
    method: 'GET',
    ...AUTHEDOPTIONS
  },
  loadMembers: {
    method: 'GET',
    ...AUTHEDOPTIONS
  }
}



const login = (user) => {
  return(
    fetch(
      `${BASEURL}login`,
      requestOptions['login'](user)
    ).then(r => r.json())
  )
}
const logout = () => {
  return(
    fetch(
      `${BASEOPTIONS}/logout`,
      requestOptions['logout']
    )
  )
}
const checkAuth = () => {
  return fetch( `${BASEURL}auth_check`, requestOptions['checkauth'] )
  .then(r => {
    return r.json()
  })
  
}
const loadLists = (userId) => {
  return fetch(`${BASEURL}users/${userId}/lists`, requestOptions['loadlists'] )
    .then(r => {
      return(r)
    })
}
const createItem = (listId, item) => {
  return fetch( `${BASEURL}lists/${listId}/items`, requestOptions['createItem'](item))
  .then(r => {
    return r.json()
  })
}
const deleteItem = (listId, itemId) => {
  return(
    fetch(
      `${BASEURL}lists/${listId}/items/${itemId}`,
      requestOptions['deleteItem']
    )
  )
}
const updateItem = (listId, item) => {
  return(
    fetch(
      `${BASEURL}lists/${listId}/items/${item.id}/update`,
      requestOptions['updateItem'](item)
    )
  )
}
const toggleItem = (listId, itemId) => {
  return(
    fetch(
      `${BASEURL}lists/${listId}/items/${itemId}/acquire`, 
      requestOptions['toggleItem']
    )
  )
}
const loadItems = (listId) => {
  return(
    fetch(
      `${BASEURL}lists/${listId}/items`, 
      requestOptions['loadItems']
    )
  )
}

const loadMembers = (listId) => {
  return(
    fetch(
      `${BASEURL}lists/${listId}/contributions`, 
      requestOptions['loadItems']
    )
  )
}
const Api = {
  login,
  logout,
  checkAuth,
  loadLists,
  createItem,
  deleteItem,
  updateItem,
  toggleItem,
  loadItems,
  loadMembers
}
export default Api