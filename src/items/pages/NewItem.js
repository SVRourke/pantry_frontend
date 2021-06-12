import React from "react";
import ItemForm from "../components/ItemForm";
import { useHistory, useParams } from "react-router-dom";

import { connect } from "react-redux";
import { createItem } from "../../actions/ItemActions";

const NewItem = ({ createAction }) => {
  const history = useHistory();
  const listId = useParams().list_id;

  const formHandler = (info) => {
    createAction(listId, info);
    history.goBack();
  };

  return (
    <div>
      <div className="wrapper">
        <h1>new item</h1>
        <button className="cancel-button" onClick={() => history.goBack()}>
          cancel?
        </button>
      </div>
      <ItemForm cb={formHandler} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  lists: state,
});

const mapDispatchToProps = (dispatch) => ({
  createAction: (listId, item) => dispatch(createItem(listId, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
