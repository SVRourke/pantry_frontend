import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { connect } from "react-redux";
import { sendInvite } from "../../actions/ListInviteActions";

import InviteForm from "../../common/InviteForm";
import { GoBack } from "../../common/FormElements";

const InvitePage = ({ sendInvite }) => {
  const { goBack } = useHistory();
  const listId = useParams().list_id;

  const handleSubmit = (email) => {
    sendInvite(email, listId, () => {
      goBack();
    });
  };

  return (
    <div>
      <div className="row">
        <h2>invite a user</h2>
        <GoBack onClick={() => goBack()}>cancel?</GoBack>
      </div>
      <InviteForm cb={handleSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendInvite: (email, listId, cb) => dispatch(sendInvite(email, listId, cb)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvitePage);
