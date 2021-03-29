import React from 'react'
import {
    Container,
    Heading,
    Button
} from './GlobalElements'

const ListInvitesControls = ({ cb, filter }) => {
  return (
    <Container>
      <Heading>requests:</Heading>
      <Button
        active={filter === 'received'}
        id='received'
        onClick={(event) => cb(event)}
      >
        received
      </Button>

      <Button
        active={filter === 'sent'}
        id='sent'
        onClick={(event) => cb(event)}
      >
        sent
      </Button>
    </Container>
  )
}

export default ListInvitesControls

