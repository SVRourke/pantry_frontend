import React from 'react';
import { useHistory } from 'react-router-dom'

import InviteForm from '../../common/InviteForm'
import { GoBack } from '../../common/FormElements'
import { Row } from '../../common/elements'
const InvitePage = () => {
  const { goBack } = useHistory()

  return (
    <div>
      <Row>
        <h2>invite a user</h2>
        <GoBack onClick={() => goBack()}>cancel?</GoBack>
      </Row>
      {/* TODO: cb REDUX Action */}
      <InviteForm cb={(data) => alert(data)} />
    </div>
  );
}

export default InvitePage;
