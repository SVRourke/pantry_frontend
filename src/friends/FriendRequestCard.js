import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  // InvitedDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
  Row,
  // MemberCount
} from "../common/elements"




const FriendRequestCard = ({record, clickHandler}) => {
  const { id,/* requestor_id,*/ requestor_name, requestee_name, type, record_age } = record
  const style = type === 'sent' ? { color: '#cccccc' } : { color: 'var(--offblack-color)' }
  const heading = type === 'sent' ? requestee_name : requestor_name

  return (
    <CardBody typeStyle={type}>
      <CardHeading style={style}>{heading}</CardHeading>

      <Row>
        <TimeDisplay>{record_age} ago</TimeDisplay>

        <RequestCancel displayType={type} onClick={() => clickHandler(id, "CANCEL")}>
          cancel?
          </RequestCancel>
      </Row>

      <Row>
        <AcceptButton onClick={() => clickHandler(id, "ACCEPT")} displayType={type} >accept</AcceptButton>
        <DeclineButton onClick={() => clickHandler(id, "DECLINE")} displayType={type} >decline</DeclineButton>
      </Row>

    </CardBody>
  );
}

export default FriendRequestCard;
