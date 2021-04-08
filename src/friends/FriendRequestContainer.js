import React, { useState } from 'react'
import InvitesControls from '../common/InvitesControls'
import FriendRequestCard from '../friends/FriendRequestCard'
import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    overflow-y: scroll;
`


const FriendRequestContainer = ({ requests }) => {
  const handleRequest = (id, action) => {
    switch(action) {
      case 'CANCEL':
        alert(`CANCEL ID: ${id}`)
        break;
      case 'ACCEPT':
        alert(`ACCEPT ID: ${id}`)
        break;
      case 'DECLINE':
        alert(`DENY ID: ${id}`)
        break;
      default:
        return false
    }
  }


  const [filter, setFilter] = useState('received')
  const cards = requests.filter(r => r.type === filter).map(r => <FriendRequestCard record={r} clickHandler={handleRequest}key={r.id} />)

  const filterChange = (event) => { setFilter(event.target.id) }

  return (
    <Block>
      <InvitesControls filter={filter} cb={filterChange} />
      {cards}
    </Block>
  );
}

export default FriendRequestContainer;