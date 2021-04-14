import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Login from './pages/Login'
import UserRouter from './Routers/UserRouter'
import List from './lists/List'
function App () {
  return (
    <div id="app-container">
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path={`/users/:user_id`} component={UserRouter} />
        <Route path={`/lists/:list_id`} component={List} />
      </Switch>
    </div>
  )
}

export default App
