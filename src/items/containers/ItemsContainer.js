import React from 'react'
import {
  useRouteMatch,
  useParams
} from 'react-router-dom'

import ItemCard from '../components/ItemCard'

import {
  AddLink,
  containerStyles,
  innerContainerStyles
} from '../../common/elements'

import { connect } from 'react-redux'
import { Trash } from '../../actions/ItemActions'

// Attach To REDUX
function ItemContainer({lists, trashAction, records}) {
  const listId = parseInt(useParams().id)
  const { url } = useRouteMatch()


  const toggleAcquired = (id) => {
    const item = records.find(e => e.id === id)
    alert(`TOGGLE: ${item.name}, ${item.id}`)
  }

  const cards = lists.find(e => e.id === listId).items.map(r => {
    return (
      <ItemCard
        key={r.id}
        record={r}
        toggle={toggleAcquired}
        trash={
          () => trashAction(listId, r.id)
        }
      />
    )
  })

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        {cards}
      </div>

      <AddLink to={`${url}/new`}>new</AddLink>
    </div>
  )
}

const mapStateToProps = state => ({
  lists: state
})

const mapDispatchToProps = dispatch => ({
  trashAction: (listId, itemId) => dispatch(Trash(listId, itemId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
