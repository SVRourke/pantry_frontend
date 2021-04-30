import React, { useEffect } from 'react'
import ListCard from '../components/ListCard'
import { Block } from '../../common/elements'
import { connect } from 'react-redux'
import { LoadLists } from '../../actions/ListActions'

const ListCardContainer = ({ records, lists, userId, load }) => {
  useEffect(() => {
    load(userId)
  }, [])

  const cards = records.map(r => <ListCard key={r.id} list={r} />)

  return (
    <Block>
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
