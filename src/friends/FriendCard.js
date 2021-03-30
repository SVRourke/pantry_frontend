// ALERT: Add mutual list count to friend serializer 
import React from 'react';
import {
  CardBody,
  CardHeading,
  UnFriend,
  TimeDisplay,
  SubHeading,
  Row
} from "../common/elements";

const FriendCard = (props) => {
  const { friend_id, friend_name, id, record_age } = props.record
  
  return (
    <CardBody>
      <CardHeading>{friend_name}</CardHeading>
      <Row>
        <TimeDisplay>{record_age}</TimeDisplay>
        {/* use id to post delete */}
        <UnFriend>unfriend?</UnFriend> 
      </Row>
      <SubHeading>{'mutual listcount'}</SubHeading>
    </CardBody>
  );
}

export default FriendCard;
