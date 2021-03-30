import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Lists from './lists/ListsIndex'
import Friends from './friends/FriendIndex'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import UserRouter from './Routers/UserRouter'
import List from './pages/List'
function App () {
  return (
    <div id="app-container">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        {/* <Route path='/about' component={About} /> */}
        <Route path={`/users/:id`} component={UserRouter} />
        <Route path={`/lists/:id`} component={List} />
      </Switch>
    </div>
  )
}

export default App
