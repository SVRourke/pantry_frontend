import React from 'react'
import {
  Route,
  Switch,
  Link,
  Redirect,
  useRouteMatch,
  useParams 
} from 'react-router-dom'

import Lists from '../components/indexes/ListsIndex'
import Friends from '../components/indexes/FriendIndex'
import Account from '../components/pages/Account'
const UserRouter = () => {
  const user_id = useParams()
  const { path, url } = useRouteMatch()

  return (
    <div>
      <Link to={`${url}/lists`}>lists</Link>
      <Link to={`${url}/friends`}>friends</Link>
      <Link to={`${url}/account`}>account</Link>

      <Switch>
        <Route exact path={`${path}/`} >
          <Redirect to={`${url}/lists`} />
        </Route>
        <Route path={`${path}/lists`} component={Lists} />
        <Route path={`${path}/friends`} component={Friends} />
        <Route path={`${path}/account`} component={Account} />
      </Switch>
    </div>
  )
}

export default UserRouter
