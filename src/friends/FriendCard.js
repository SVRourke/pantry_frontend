// ALERT: Add mutual list count to friend serializer 
import React from 'react';
import {
  CardBody,
  CardHeading,
  TimeDisplay,
  SubHeading,
  Row
} from "../common/elements";

import styled from 'styled-components'
const UnFriend = styled.button`
  background: none;
  border: none;
  margin: 0 1rem;
  color: var(--red-color);
  &:hover {
    font-weight: 600;
  }
`;


const FriendCard = (props) => {
  const { /*friend_id,*/ friend_name, id, record_age } = props.record

  return (
    <CardBody>
      <CardHeading>{friend_name}</CardHeading>
      <Row>
        <TimeDisplay>{record_age}</TimeDisplay>

        <UnFriend onClick={(event) => props.cb(id)}>unfriend?</UnFriend> 
      </Row>
      <SubHeading>{'mutual listcount'}</SubHeading>
    </CardBody>
  );
}

export default FriendCard;
