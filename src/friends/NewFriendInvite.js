import React from 'react';
import InviteForm from '../common/InviteForm'
import { useHistory } from "react-router-dom";
import { Row } from '../common/elements'
import styled from "styled-components"

const PageHeading = styled.h1`
  
`;

const GoBack = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--gray-color);
  padding-left: 1rem;

  &:hover {
    color: var(--red-color)
  }
`;

const NewFriendInvite = () => {
  let history = useHistory();
  // replace with dispatch
  const handleForm = (info) => {
    alert(info)
  }


  return (
    <div style={{
      padding: "1rem 0"
    }}>
      <Row>
        <PageHeading>add friend</PageHeading>
        <GoBack
          onClick={() => history.goBack()}
        >cancel?</GoBack>
      </Row>
      <InviteForm cb={handleForm} />

    </div>
  );
}

export default NewFriendInvite;
