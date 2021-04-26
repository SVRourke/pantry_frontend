// ALERT: Add mutual list count to friend serializer 
import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  SubHeading,
  Row,
  UnFriend
} from "../common/elements";

const FriendCard = (props) => {
  const { friend_id, friend_name, id, record_age, mutual_list_count } = props.record

  return (
    <CardBody>
      <CardHeading>{friend_name}</CardHeading>
      <Row>
        <TimeDisplay>since {record_age} minutes ago</TimeDisplay>

        <UnFriend onClick={(event) => props.cb(friend_id, id)}>unfriend?</UnFriend> 
      </Row>
      <SubHeading>{mutual_list_count} lists together</SubHeading>
    </CardBody>
  );
}

export default FriendCard;
