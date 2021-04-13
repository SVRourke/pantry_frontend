import React, { useState } from 'react'
import InvitesControls from '../../common/InvitesControls'
import ListInviteCard from '../components/ListInviteCard'

import { connect } from 'react-redux'
import { Accept, Cancel } from '../../actions/ListInviteActions'

import { Block } from '../../common/elements'

const ListInvitesContainer = ({ invites, accept, cancel }) => {
  const [filter, setFilter] = useState('received')

  const inviteHandler = (id, action) => {
    const matrix = {
      DELETE: (id) => cancel(id),
      ACCEPT: (id) => accept(id)
    }
    return matrix[action](id)
  }

  const filtered = invites.filter(r => r.type === filter)
  const cards = filtered.map(r => <ListInviteCard record={r} clickHandler={inviteHandler} key={r.id} />)

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


const mapStateToProps = state => ({
  invites: state.listInvites
})

const mapDispatchToProps = dispatch => ({
  accept: (id) => dispatch(Accept(id)),
  cancel: (id) => dispatch(Cancel(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListInvitesContainer)
