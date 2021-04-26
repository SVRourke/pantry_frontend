import React from 'react'
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  SubHeading
} from "../../common/elements"

import ageFormatter from '../../common/TimeFormatter'

const MemberCard = ({
  user: {
    username,
    record_age,
    item_count
  }
}) => {
  return (
    <CardBody>
      <CardHeading>
        {username}
      </CardHeading>

      <SubHeading>
        since {ageFormatter(record_age, 2)} ago
      </SubHeading>

      <TimeDisplay>
        {item_count} items
      </TimeDisplay>

    </CardBody>
  );
}

export default MemberCard;
