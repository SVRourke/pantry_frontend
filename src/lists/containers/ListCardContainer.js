import React from 'react'
import ListCard from '../components/ListCard'
import { Block } from '../../common/elements'

const ListCardContainer = ({ records }) => {
  const cards = records.map(r => <ListCard key={r.id} list={r} />)

  return (
    <Block>
      {cards}
    </Block>
  )
}

export default ListCardContainer
