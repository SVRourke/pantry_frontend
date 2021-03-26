import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Lists from "./components/Lists";
import Friends from "./components/Friends";
import Welcome from "./components/Welcome";
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/" >home</Link>
        <Link to="/lists" >Lists</Link>
        <Link to="/friends" >Friends</Link>

        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/lists' component={Lists} />
          <Route path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
