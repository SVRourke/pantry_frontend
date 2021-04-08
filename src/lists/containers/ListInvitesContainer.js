// ALERT CONNECT TO REDUX
// Alert: Add List Name to list Invite Serializer * Backend *
import React, { useState } from 'react'
import InvitesControls from '../../common/InvitesControls'
import ListInviteCard from '../components/ListInviteCard'
import { Block } from '../../common/elements'

const ListInvitesContainer = ({ invites }) => {
  const [filter, setFilter] = useState('received')

  const inviteHandler = (id, action) => {
    switch (action) {
      case 'DELETE':
        alert(`DELETE INVITE ${id}`)
        break
      case 'ACCEPT':
        alert(`ACCEPT INVITE ${id}`)
        break
      default:
        return false
    }
  }

  const cards = invites.filter(r => r.type === filter).map(r => <ListInviteCard record={r} clickHandler={inviteHandler} key={r.id} />)

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
