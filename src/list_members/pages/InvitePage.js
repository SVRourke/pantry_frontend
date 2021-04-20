import React from 'react';
import { useHistory, useParams } from 'react-router-dom'

import { connect } from 'react-redux'
import { sendInvite } from '../../actions/ListInviteActions'

import InviteForm from '../../common/InviteForm'
import { GoBack } from '../../common/FormElements'
import { Row } from '../../common/elements'


const InvitePage = ({sendInvite}) => {
  const { goBack } = useHistory()
  const listId = useParams().list_id

  return (
    <div>
      <Row>
        <h2>invite a user</h2>
        <GoBack onClick={() => goBack()}>cancel?</GoBack>
      </Row>
      {/* TODO: cb REDUX Action */}
      <InviteForm cb={(email) => sendInvite(email, listId)} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sendInvite: (email, listId) => dispatch(sendInvite(email, listId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InvitePage)
