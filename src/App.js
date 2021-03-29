import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Lists from './components/indexes/ListsIndex'
import Friends from './components/indexes/FriendIndex'
import Welcome from './components/pages/Welcome'
import Login from './components/pages/Login'
import UserRouter from './Routers/UserRouter'

function App () {
  return (
    <div id="app-container">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        {/* <Route path='/about' component={About} /> */}
        <Route path={`/users/:id`} component={UserRouter} />
      </Switch>
    </div>
  )
}

export default App
