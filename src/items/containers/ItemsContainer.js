import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import { AddLink, containerStyles, innerContainerStyles} from '../../common/elements'

// Attach To REDUX?
export default function ItemContainer ({ records }) {
  const { url } = useRouteMatch()
  const cards = records.map(r => <ItemCard record={r} />)

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        {cards}
      </div>

      <AddLink to={`${url}/new`}>new</AddLink>
    </div>
  )
}
