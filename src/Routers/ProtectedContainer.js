
// RENAME UserRouter

import React from 'react'
import { 
    Route,
    Switch,
    Link, 
    Redirect,
    useRouteMatch,
    useParams } from 'react-router-dom'

import Lists from '../components/Lists'
import Friends from '../components/Friends'

const ProtectedContainer = () => {
  const params = useParams()
  const { path, url } = useRouteMatch();

  return (
    <div>
        <Redirect to={`${url}/lists`} />

        <Link to={`${url}/lists`} >lists</Link>
        <Link to={`${url}/friends`} >friends</Link>
        <Link to={`${url}/account`} >account</Link>
        {/* 
            Lists *DEFAULT
            Friends 
            Account
         */}
         <Switch>
             <Route path={`${path}/lists`} component={Lists} />  
             {/* <Route path={`${path}/friends`} component={Friends} />
             <Route path={`${path}/account`} component={Account} />   */}

         </Switch>

        {params['id']}
    </div>
  )
}

export default ProtectedContainer
