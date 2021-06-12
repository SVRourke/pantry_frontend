import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";
import { MemberCount } from "../../common/elements";

const Acquired = styled.button`
  border-color: ${(props) =>
    props.acquired ? "var(--green-color)" : "var(--blue-color)"};
  color: ${(props) => (props.acquired ? "#fff" : "var(--blue-color)")};
  background: ${(props) => (props.acquired ? "var(--green-color)" : "none")};
  padding: 0.5rem 0.7rem;
  border-style: solid;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem 0.6rem 1rem 0;

  &:hover {
    color: white;
    background-color: ${(props) =>
      props.acquired ? "#fff" : "var(--blue-color)"};
    color: ${(props) => (props.acquired ? "var(--green-color)" : "#fff")};
  }
`;

export default function ItemCard({ record, toggle, trash }) {
  const { url } = useRouteMatch();
  return (
    <div style={{ margin: "0 0 2rem 0" }}>
      <h3 className="card-heading">{record.name}</h3>

      <MemberCount>{record.amount}</MemberCount>

      <div className="row">
        <Acquired onClick={() => toggle(record.id)} acquired={record.acquired}>
          acquired
        </Acquired>

        <Link className="edit" to={`${url}/${record.id}/edit`}>
          edit
        </Link>
        <button className="trash-button" onClick={() => trash(record.id)}>
          trash
        </button>
      </div>
    </div>
  );
}
