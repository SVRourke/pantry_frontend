// Alert: Add List Name to list Invite Serializer * Backend *
import React, { useState } from 'react'
import InvitesControls from '../common/InvitesControls'
import ListInviteCard from '../lists/ListInviteCard'
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
          <InvitesControls filter={filter} cb={filterChange} />
          {cards}
        </Block>
  )
}

export default ListInvitesContainer
