import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { LoadLists } from '../actions/ListActions'

// ALERT: MAKE INDEXES
import ListCardContainer from './containers/ListCardContainer'
import ListInvitesContainer from './containers/ListInvitesContainer'
import NewList from '../lists/pages/NewList'
import { FancyLink } from '../common/GlobalElements'

import {
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

const ListIndex = ({ lists, load, userId }) => {
  const { path, url } = useRouteMatch()

  useEffect(() => {
    load(userId)
  }, [])

  return (
    <>
      <Route exact path={path} >
        <ListCardContainer records={lists} />

        <FancyLink>
          <Link to={`${url}/new`}>New List Button</Link>
        </FancyLink>

        <ListInvitesContainer />
      </Route>

      <Route path={`${path}/new`} component={NewList} />
    </>
  )
}

const mstp = state => ({
  lists: state.lists,
  userId: state.profile.userId,
})
const mdtp = dispatch => ({
  load: userId => dispatch(LoadLists(userId))

})

export default connect(mstp, mdtp)(ListIndex)
