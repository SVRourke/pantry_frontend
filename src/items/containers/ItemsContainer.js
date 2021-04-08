import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { AddLink, containerStyles, innerContainerStyles } from '../../common/elements'

// Attach To REDUX
export default function ItemContainer({ records }) {
  const { url } = useRouteMatch()

  const toggleAcquired = (id) => {
    const item = records.find(e => e.id === id)
    alert(`TOGGLE: ${item.name}, ${item.id}`)
  }

  const trash = (id) => {
    alert(`DELETE: ${id}`)
  }
  const cards = records.map(r => <ItemCard record={r} toggle={toggleAcquired} trash={trash} />)

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        {cards}
      </div>

      <AddLink to={`${url}/new`}>new</AddLink>
    </div>
  )
}
