import React from 'react';
import InviteForm from '../common/InviteForm'
import { useHistory } from "react-router-dom";
import { Row, CancelButton } from '../common/elements'


const NewFriendInvite = () => {
  const history = useHistory();
  // replace with dispatch
  const handleForm = (info) => {
    alert(info)
  }


  return (
    <div style={{
      padding: "1rem 0"
    }}>
      <Row>
        <h1>add friend</h1>
        <CancelButton
          onClick={() => history.goBack()}
        >cancel?</CancelButton>
      </Row>
      <InviteForm cb={handleForm} />

    </div>
  );
}

export default NewFriendInvite;
