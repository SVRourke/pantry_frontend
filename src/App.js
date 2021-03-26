import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Lists from './components/Lists'
import Friends from './components/Friends'
import Welcome from './components/Welcome'
import Login from './components/Login'

function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/lists' component={Lists} />
        <Route path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default App
