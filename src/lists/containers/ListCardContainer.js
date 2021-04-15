import React, {useEffect} from 'react'
import ListCard from '../components/ListCard'
import { Block } from '../../common/elements'

import { connect } from 'react-redux'
import {LoadLists} from '../../actions/ItemActions'


const ListCardContainer = ({ records, lists, userId, loggedIn, load }) => {
  const cards = records.map(r => <ListCard key={r.id} list={r} />)

  useEffect(() => {
    if (lists.length === 0) {
      load(userId)
    }
  })

  return (
    <Block>
      {cards}
    </Block>
    
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCardContainer)

// Connects to slice of redux store
