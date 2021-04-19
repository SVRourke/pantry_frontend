import React, { useEffect } from 'react'
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
import { ToggleItem, Trash, Toggle, LoadItems, deleteItem } from '../../actions/ItemActions'

// Attach To REDUX
function ItemContainer(props) {
  const { items, trashAction, toggleAction, createAction, load, deleteItem } = props
  const { url } = useRouteMatch()
  const listId = parseInt(useParams().list_id)

  const cards = items.sort((a, b) => a.id > b.id).map((record) => {
    return (
      <ItemCard
        key={record.id}
        record={record}
        toggle={() => toggleAction(listId, record.id)}
        trash={() => deleteItem(listId, record.id)}
      />
    )
  })

  useEffect(() => {
    load(listId)
  }, [])

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
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  load: (listId) => dispatch(LoadItems(listId)),
  trashAction: (listId, itemId) => dispatch(Trash(listId, itemId)),
  toggleAction: (listId, itemId) => dispatch(ToggleItem(listId, itemId)),
  deleteItem: (listId, itemId) => dispatch(deleteItem(listId, itemId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
