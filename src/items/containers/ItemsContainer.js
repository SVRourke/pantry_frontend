import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import ItemCard from '../components/ItemCard'
import styled from 'styled-components'

const AddLink = styled(Link)`
    border: solid black 2px;
    background-color: white;
    padding: .5rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    display: block;
    width: fit-content;
`

const containerStyles = {
  height: '100vh',
  overflow: 'hidden'
}

const innerContainerStyles = {
  height: '80vh',
  overflowY: 'scroll'
}

export default function ItemContainer ({ records }) {
  const { path, url } = useRouteMatch()
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
