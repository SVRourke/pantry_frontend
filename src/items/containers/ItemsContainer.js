import React, { useEffect, useState } from "react";

import { Link, useRouteMatch, useParams } from "react-router-dom";

import styled from "styled-components";
import ItemCard from "../components/ItemCard";

import { connect } from "react-redux";
import {
  toggleItem,
  loadItems,
  deleteItem,
  clearItems,
} from "../../actions/ItemActions";

const FilterButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  display: block;
  width: fit-content;
  background-color: ${(props) =>
    props.filtered ? "var(--green-color)" : "white"};
  color: ${(props) => (props.filtered ? "white" : "var(--offblack-color)")};
  border: ${(props) =>
    props.filtered ? "var(--green-color)" : "solid black 2px"};
`;

function ItemContainer({ items, toggleAction, load, clear, deleteItem }) {
  const { url } = useRouteMatch();
  const listId = parseInt(useParams().list_id);

  const [filtered, setFiltered] = useState(false);

  const filteredItems = filtered
    ? items.filter((item) => !item.acquired)
    : items;

  const cards = filteredItems
    .sort((a, b) => a.id > b.id)
    .map((record) => {
      return (
        <ItemCard
          key={record.id}
          record={record}
          toggle={() => toggleAction(listId, record.id)}
          trash={() => deleteItem(listId, record.id)}
        />
      );
    });

  useEffect(() => {
    load(listId);

    return () => {
      clear();
    };
  }, []);

  const handleFilter = () => setFiltered(!filtered);

  return (
    <div className="container-styles">
      <div className="container-styles-inner">
        {cards.length ? (
          cards
        ) : (
          <h2 style={{ margin: "2rem 0 3rem" }}>add an item!</h2>
        )}
      </div>

      <div className="row" style={{ paddingTop: "1rem" }}>
        <Link className="add-link" to={`${url}/new`}>
          new
        </Link>
        <FilterButton filtered={filtered} onClick={handleFilter}>
          filter acquired
        </FilterButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  load: (listId) => dispatch(loadItems(listId)),
  toggleAction: (listId, itemId) => dispatch(toggleItem(listId, itemId)),
  deleteItem: (listId, itemId) => dispatch(deleteItem(listId, itemId)),
  clear: () => dispatch(clearItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
