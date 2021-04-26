import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  SubHeading,
  Row,
  UnFriend
} from "../common/elements";
import ageFormatter from '../common/TimeFormatter'

const FriendCard = ({
  record: {
    mutual_list_count,
    friend_name,
    record_age,
    friend_id,
    id,
  },
  cb,
}) => {
  const callBackHandler = (event) => cb(friend_id, id)

  return (
    <CardBody>
      <CardHeading>
        {friend_name}
      </CardHeading>

      <Row>
        <TimeDisplay>
          since {ageFormatter(record_age, 1)} ago
        </TimeDisplay>

        <UnFriend onClick={callBackHandler}>
          unfriend?
        </UnFriend>
      </Row>

      <SubHeading>
        {mutual_list_count} shared lists
      </SubHeading>
    </CardBody>
  );
}

export default FriendCard;
