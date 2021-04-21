import React, { useState, useEffect } from 'react'
import InvitesControls from '../../common/InvitesControls'
import ListInviteCard from '../components/ListInviteCard'

import { connect } from 'react-redux'
import { Accept, Cancel, loadInvites, cancelInvite } from '../../actions/ListInviteActions'

import { Block } from '../../common/elements'

const ListInvitesContainer = (props) => {
  const { invites, accept, cancel, load, userId } = props
  const [filter, setFilter] = useState('received')

  useEffect(() => {
    load(userId)
  },[])


  const inviteHandler = (id, action) => {
    const matrix = {
      DELETE: (id) => cancel(userId, id),
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
  invites: state.listInvites,
  userId: state.profile.userId
})

const mapDispatchToProps = dispatch => ({
  accept: (id) => dispatch(Accept(id)),
  cancel: (userId, itemId) => dispatch(cancelInvite(userId, itemId)),
  load: (id) => dispatch(loadInvites(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListInvitesContainer)
