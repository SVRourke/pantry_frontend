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
import { ToggleItem, Trash, Toggle } from '../../actions/ItemActions'

// Attach To REDUX
function ItemContainer({lists, trashAction, toggleAction, createAction}) {
  const { url } = useRouteMatch()
  const listId = parseInt(useParams().list_id)


  const items = lists.find(l => l.id === listId).items

  const cards = Object.entries(items).map(r => {
    const [idx, record] = r

    return (
      <ItemCard
        key={idx}
        record={record}
        toggle={() => toggleAction(listId, record.id)}
        trash={
          () => trashAction(listId, record.id)
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
  ...state
})

const mapDispatchToProps = dispatch => ({
  trashAction: (listId, itemId) => dispatch(Trash(listId, itemId)),
  toggleAction: (listId, itemId) => dispatch(ToggleItem(listId, itemId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
