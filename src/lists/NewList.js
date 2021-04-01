import React from 'react';
import { useHistory } from "react-router-dom";

const NewList = () => {
  let history = useHistory();

  return (
    <div>
      <h2>NEW LIST</h2>
      <button
        onClick={() => history.goBack()}
      >cancel</button>
    </div>
  );
}

export default NewList;
