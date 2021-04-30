import React from 'react'
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  InvitedDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
  Row,
  MemberCount
} from '../../common/elements'

import ageFormatter from '../../common/TimeFormatter'

const ListInviteCard = ({record, clickHandler}) => {
  const { id, list_name, record_age, requestor_name, requestee_name, contributor_count, type } = record
  
  const style = {
    color: type === 'sent' ? '#ccc' : 'var(--offblack-color)'
  }

  return (
    <CardBody typeStyle={type}>
      <CardHeading style={style}>{type === 'sent' ? requestee_name : list_name}</CardHeading>

      <Row>
        <InvitedDisplay style={style}>
          {type === 'sent' ? list_name : requestor_name}
        </InvitedDisplay>

        <RequestCancel displayType={type} onClick={() => clickHandler(id, 'DELETE')} > 
          cancel?
          </RequestCancel>
      </Row>

      <TimeDisplay displayType={type}>{ageFormatter(record_age, 1)} ago</TimeDisplay>
      <MemberCount displayType={type}>{contributor_count} members</MemberCount>

      <Row>
        <AcceptButton displayType={type} onClick={() => clickHandler(id, 'ACCEPT')} >accept</AcceptButton>
        <DeclineButton displayType={type} onClick={() => clickHandler(id, 'DELETE')} >decline</DeclineButton>
      </Row>

    </CardBody>
  )
}

export default ListInviteCard
