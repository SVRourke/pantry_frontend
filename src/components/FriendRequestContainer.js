import React, { useState } from 'react'
import InvitesControls from './InvitesControls'
import FriendRequestCard from './cards/FriendRequestCard'
import styled from 'styled-components'

const Block = styled.div`
    width: 100%;
    overflow-y: scroll;
    ${'' /* height: 20vh; */}
    ${'' /* background-color: #CACACA; */}
`

const FriendRequestContainer = ({ requests }) => {
  const [filter, setFilter] = useState('received')
  const cards = requests.filter(r => r.type === filter).map(r => <FriendRequestCard record={r} />)

  const filterChange = (event) => { setFilter(event.target.id) }

  return (
    <Block>
      <InvitesControls filter={filter} cb={filterChange} />
      {cards}
    </Block>
  );
}

export default FriendRequestContainer;





