import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  RequestCancel,
  AcceptButton,
  DeclineButton,
  Row
} from '../common/elements'

import ageFormatter from '../common/TimeFormatter'

const FriendRequestCard = ({
  record: {
    requestor_name,
    requestee_name,
    record_age,
    type,
    id
  },
  clickHandler
}) => {
  const style = { color: type === 'sent' ? '#ccc' : 'var(--offblack-color)'}
  const heading = type === 'sent' ? requestee_name : requestor_name

  return (
    <CardBody typeStyle={type}>
      <CardHeading style={style}>{heading}</CardHeading>

      <Row>
        <TimeDisplay>
          {ageFormatter(record_age, 2)} ago
        </TimeDisplay>

        <RequestCancel
          displayType={type}
          onClick={() => clickHandler(id, "CANCEL")}
        >
          cancel?
        </RequestCancel>
      </Row>

      <Row>
        <AcceptButton
          onClick={() => clickHandler(id, "ACCEPT")}
          displayType={type}
        >
          accept
        </AcceptButton>

        <DeclineButton
          onClick={() => clickHandler(id, "CANCEL")}
          displayType={type}
        >
          decline
        </DeclineButton>
      </Row>

    </CardBody>
  )
}

export default FriendRequestCard;
