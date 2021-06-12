import React from "react";
import { connect } from "react-redux";

import InviteForm from "../common/InviteForm";

import { sendRequest } from "../actions/FriendRequestActions";

const NewFriendRequest = ({ userId, send, history }) => {
  const handleForm = (info) => {
    send(userId, info, () => history.goBack());
  };

  return (
    <div
      style={{
        padding: "1rem 0",
      }}
    >
      <div className="row">
        <h1>add friend</h1>
        <button className="cancel-button" onClick={() => history.goBack()}>
          cancel?
        </button>
      </div>
      <InviteForm cb={handleForm} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.profile.userId,
});

const mapDispatchToProps = (dispatch) => ({
  send: (userId, email, cb) => dispatch(sendRequest(userId, email, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFriendRequest);
