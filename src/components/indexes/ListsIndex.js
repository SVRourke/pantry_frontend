import React from 'react'
import ListCardContainer from '../ListCardContainer'
import ListInvitesContainer from '../ListInvitesContainer'
import styled from 'styled-components'
import NewList from '../pages/NewList'
import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'

const FancyLink = styled.div`
  display: block;
  margin: 1rem 0;   
    a {
      text-decoration: none;
      border: solid black 2px;
      padding: .5rem 2rem;
      margin: 2rem 0;
    }
`

const testLists = [
  { id: 3, name: 'Squad', contributor_count: 5, item_count: 0 },
  { id: 2, name: "Rain & Sam's List", contributor_count: 2, item_count: 5 },
  { id: 1, name: "Sam's List", contributor_count: 1, item_count: 0 }
]

const testInvites = [
  { id: 1, record_age: '1 days', requestor_name: 'Sam', requestee_name: 'Jake', contributor_count: 1, type: 'sent' },
  { id: 7, record_age: '5 days', requestor_name: 'Sam', requestee_name: 'Rohan', contributor_count: 3, type: 'sent' },
  { id: 2, record_age: '5 days', requestor_name: 'Autumn', requestee_name: 'Sam', contributor_count: 10, type: 'received' },
  { id: 3, record_age: '5 days', requestor_name: 'Autumn', requestee_name: 'Sam', contributor_count: 4, type: 'received' }
]

const ListIndex = () => {
  const { path, url } = useRouteMatch()

  return (
      <Switch>
        <Route exact path={path} >
          <ListCardContainer records={testLists} />

          <FancyLink>
            <Link to={`${url}/new`}>New List Button</Link>
          </FancyLink>

          <ListInvitesContainer invites={testInvites} />
        </Route>

        <Route path={`${path}/new`} component={NewList} />
      </Switch>
  )
}

export default ListIndex

// Connects to slice of redux store
