import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { 
  loadInvites, 
  cancelInvite, 
  acceptInviteThunk 
} from '../../actions/ListInviteActions'

import InvitesControls from '../../common/InvitesControls'
import ListInviteCard from '../components/ListInviteCard'
import { Block } from '../../common/elements'


const ListInvitesContainer = (props) => {
  const { invites, accept, cancel, load, userId } = props
  const [filter, setFilter] = useState('received')

  useEffect(() => {
    load(userId)
  }, [])

  const inviteHandler = (id, action) => {
    const matrix = {
      DELETE: (id) => cancel(userId, id),
      ACCEPT: (id) => accept(userId, id)
    }
    return matrix[action](id)
  }

  const filtered = invites.filter(r => r.type === filter)

  const cards = filtered.map(r => {
    return (
      <ListInviteCard
        record={r}
        clickHandler={inviteHandler}
        key={r.id}
      />
    )
  })

  const filterChange = (event) => {
    setFilter(event.target.id)
  }

  return (
    <>
      <InvitesControls filter={filter} cb={filterChange} />
      <Block style={{maxHeight: "30vh"}}>
        {cards}
      </Block>
    </>
  )
}

const mapStateToProps = state => ({
  invites: state.listInvites,
  userId: state.profile.userId
})

const mapDispatchToProps = dispatch => ({
  accept: (userId, inviteId) => dispatch(acceptInviteThunk(userId, inviteId)),
  cancel: (userId, itemId) => dispatch(cancelInvite(userId, itemId)),
  load: (id) => dispatch(loadInvites(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListInvitesContainer)
