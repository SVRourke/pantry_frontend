import React from 'react'
import ListCardContainer from './ListCardContainer'
import ListInvitesContainer from './ListInvitesContainer'
import NewList from '../pages/NewList'
import { FancyLink } from '../common/GlobalElements'

import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'

// TEST DATA
import { TestLists, TestInvites } from '../common/TestData'


const ListIndex = () => {
  const { path, url } = useRouteMatch()

  return (
      <div>
        <Route exact path={path} >
          <ListCardContainer records={TestLists} />

          <FancyLink>
            <Link to={`${url}/new`}>New List Button</Link>
          </FancyLink>

          <ListInvitesContainer invites={TestInvites} />
        </Route>

        <Route path={`${path}/new`} component={NewList} />
      </div>
  )
}

export default ListIndex

// Connects to slice of redux store