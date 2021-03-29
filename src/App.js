import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import Lists from './components/Lists'
import Friends from './components/Friends'
import Welcome from './components/Welcome'
import Login from './components/Login'
import ProtectedContainer from './Routers/ProtectedContainer'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        {/* <Route path='/about' component={About} /> */}
        <Route path={`/users/:id`} component={ProtectedContainer} />
      </Switch>
    </div>
  )
}

export default App
