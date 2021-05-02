import React, { useEffect } from 'react'
import ListCard from '../components/ListCard'
import { Block } from '../../common/elements'
import { connect } from 'react-redux'
import { LoadLists } from '../../actions/ListActions'

const ListCardContainer = ({ records, lists, userId, load }) => {
  useEffect(() => {
    load(userId)
  }, [])

  const cards = lists.length ? lists.map(r => <ListCard key={r.id} list={r} />) : <h3 style={{padding: '2rem 0 4rem'}}>create a list!</h3>

  return (
    <Block style={{maxHeight: '50vh'}}>
      {cards}
    </Block>
  )
}

const mstp = state => ({
  lists: state.lists,
  userId: state.profile.userId
})
const mdtp = dispatch => ({
  load: userId => dispatch(LoadLists(userId))
})

export default connect(mstp, mdtp)(ListCardContainer)
