import React from 'react'
import ListCardContainer from './ListCardContainer'
import ListInvitesContainer from './ListInvitesContainer'
import styled from 'styled-components'
import NewList from '../pages/NewList'
import {
  Route,
  Switch,
  Link,
  useRouteMatch
} from 'react-router-dom'

// TEST DATA
import { TestLists, TestInvites } from '../common/TestData'


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



const ListIndex = () => {
  const { path, url } = useRouteMatch()

  return (
      <Switch>
        <Route exact path={path} >
          <ListCardContainer records={TestLists} />

          <FancyLink>
            <Link to={`${url}/new`}>New List Button</Link>
          </FancyLink>

          <ListInvitesContainer invites={TestInvites} />
        </Route>

        <Route path={`${path}/new`} component={NewList} />
      </Switch>
  )
}

export default ListIndex

// Connects to slice of redux store
