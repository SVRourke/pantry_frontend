// ALERT: RENAME
import React from 'react'

import { connect } from 'react-redux'
import {LoadLists} from '../actions/ItemActions'

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
// import { TestLists } from '../common/TestData'


const ListIndex = (props) => {
  const {lists, load, userId} = props
  
  const { path, url } = useRouteMatch()

  return (
      <div>
      <p>{lists.length}</p>
      <button onClick={() => load(userId, () => {console.log(lists)})} >LOAD</button>
        <Route exact path={path} >
          <ListCardContainer records={lists} />

          <FancyLink>
            <Link to={`${url}/new`}>New List Button</Link>
          </FancyLink>

          <ListInvitesContainer />
        </Route>

        <Route path={`${path}/new`} component={NewList} />
      </div>
  )
}

const mapStateToProps = state => ({
  lists: state.lists,
  userId: state.profile.userId,
  loggedIn: state.profile.isLoggedIn
})
const mapDispatchToProps = dispatch => {
  return {
    load: userId => dispatch(LoadLists(userId))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex)

// Connects to slice of redux store
