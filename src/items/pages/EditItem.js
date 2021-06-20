import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import ItemForm from "../components/ItemForm";
import { updateItem, LoadItems, clearItems } from "../../actions/ItemActions";

const EditItem = ({ items, editAction, load, clear }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { list_id, item_id } = useParams();

  const [record, set] = useState({
    ...items.find((i) => i.id === parseInt(item_id)),
  });

  useEffect(() => {
    load(list_id);

    return () => {
      clear();
    };
  }, []);

  const formHandler = (info) => {
    editAction(list_id, { id: item_id, ...info });
    history.push(
      url
        .split("/")
        .slice(0, url.split("/").length - 2)
        .join("/")
    );
  };

  return (
    <div>
      <div className="wrapper">
        <h1>EDIT: {record.name}</h1>
        <button className="cancel-button" onClick={() => history.goBack()}>
          cancel?
        </button>
      </div>
      <ItemForm cb={formHandler} record={record} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = (dispatch) => ({
  editAction: (listId, item) => dispatch(updateItem(listId, item)),
  load: (listId) => dispatch(LoadItems(listId)),
  clear: () => dispatch(clearItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
