import React from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserRouter from "./Routers/UserRouter";
import List from "./lists/List";
import FlashContainer from "./flash/FlashContainer";

function App() {
  return (
    <div id="app-container">
      <FlashContainer />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path={`/users/:user_id`} component={UserRouter} />
        <Route path={`/lists/:list_id`} component={List} />
      </Switch>
    </div>
  );
}

export default App;
