import React, {
  useEffect,
  useState
} from 'react'

import {
  useRouteMatch,
  useParams
} from 'react-router-dom'

import ItemCard from '../components/ItemCard'

import {
  AddLink,
  containerStyles,
  innerContainerStyles,
  FilterButton,
  Row
} from '../../common/elements'

import { connect } from 'react-redux'
import { ToggleItem, LoadItems, deleteItem, clearItems } from '../../actions/ItemActions'


function ItemContainer({ items, toggleAction, load, clear, deleteItem }) {
  const { url } = useRouteMatch()
  const listId = parseInt(useParams().list_id)

  const [filtered, setFiltered] = useState(false)

  const filteredItems = filtered ? items.filter((item) => !item.acquired) : items

  const cards = filteredItems.sort((a, b) => a.id > b.id).map((record) => {
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
    
    return () => {
      alert("Cleanup!")
      clear()
    }
  }, [])

  const handleFilter = () => (setFiltered(!filtered))

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        {cards.length ? cards : <h2 style={{margin: '2rem 0 3rem'}}>add an item!</h2>}
      </div>

      <Row style={{paddingTop: '1rem'}}>
        <AddLink to={`${url}/new`}>new</AddLink>
        <FilterButton filtered={filtered} onClick={handleFilter}>filter acquired</FilterButton>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  load: (listId) => dispatch(LoadItems(listId)),
  toggleAction: (listId, itemId) => dispatch(ToggleItem(listId, itemId)),
  deleteItem: (listId, itemId) => dispatch(deleteItem(listId, itemId)),
  clear: () => dispatch(clearItems())
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
