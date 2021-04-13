// ALERT: RENAME
import React from 'react'
import ListCardContainer from './containers/ListCardContainer'
import ListInvitesContainer from './containers/ListInvitesContainer'
import NewList from '../lists/pages/NewList'
import { FancyLink } from '../common/GlobalElements'

import {
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

// TEST DATA
import { TestLists } from '../common/TestData'


const ListIndex = () => {
  const { path, url } = useRouteMatch()

  return (
      <div>
        <Route exact path={path} >
          <ListCardContainer records={TestLists} />

          <FancyLink>
            <Link to={`${url}/new`}>New List Button</Link>
          </FancyLink>

          <ListInvitesContainer />
        </Route>

        <Route path={`${path}/new`} component={NewList} />
      </div>
  )
}

export default ListIndex

// Connects to slice of redux store