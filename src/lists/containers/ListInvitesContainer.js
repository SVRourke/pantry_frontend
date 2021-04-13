import React, { useState } from 'react'
import InvitesControls from '../../common/InvitesControls'
import ListInviteCard from '../components/ListInviteCard'

import { connect } from 'react-redux'
import { Accept, Decline, Cancel } from '../../actions/ListInviteActions'

import { Block } from '../../common/elements'

const ListInvitesContainer = (props) => {
  const { invites, accept, decline, cancel } = props
  const [filter, setFilter] = useState('received')

  const inviteHandler = (id, action) => {
    switch (action) {
      case 'DELETE':
        cancel(id)
        break
        case 'ACCEPT':
        accept(id)
        break
      default:
        return false
    }
  }
  console.log(props)

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


const mapStateToProps = state => ({
  invites: state.listInvites
})

const mapDispatchToProps = dispatch => ({
  accept: (id) => dispatch(Accept(id)),
  decline: (id) => dispatch(Decline(id)),
  cancel: (id) => dispatch(Cancel(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListInvitesContainer)
