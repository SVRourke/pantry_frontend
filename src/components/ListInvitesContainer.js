// Alert: Add List Name to list Invite Serializer * Backend *
import React, { useState } from 'react'
import ListInvitesControls from './ListInvitesControls'
import ListInviteCard from './cards/ListInviteCard'
import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    overflow-y: scroll;
    ${'' /* height: 20vh; */}
    ${'' /* background-color: #CACACA; */}
`

const ListInvitesContainer = ({ invites }) => {
  const [filter, setFilter] = useState('received')
  const cards = invites.filter(r => r.type === filter).map(r => <ListInviteCard record={r} />)

  const filterChange = (event) => {
    setFilter(event.target.id)
  }

    return (
      <Block>
          <h3>Invites Component</h3>
          <ListInvitesControls filter={filter} cb={filterChange} />
          {cards}
        </Block>
  )
}

export default ListInvitesContainer
