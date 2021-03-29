import React from 'react'

import ListCard from './cards/ListCard'

import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
    ${'' /* background-color: #CACACA; */}
`

const ListCardContainer = ({ records }) => {
  const cards = records.map(r => <ListCard key={r.id} user={r} />)

  return (
    <Block>
      <h3>Lists List Component </h3>
      {cards}
    </Block>
  )
}

export default ListCardContainer
