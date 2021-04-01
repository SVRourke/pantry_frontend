import React from 'react';
import { useHistory } from "react-router-dom";

const NewFriendInvite = () => {
  let history = useHistory();
  console.log("TESTTESTESTEST")

  return (
    <div>
      <h1>NEW FRIEND PAGE</h1>
      <button
        onClick={() => history.goBack()}
      >cancel</button>
    </div>
  );
}

export default NewFriendInvite;
