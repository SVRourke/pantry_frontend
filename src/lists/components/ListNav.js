import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListNavLink = styled(Link)`
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: ${(props) => (props.active ? "600" : "400")};
`;

const ListNav = ({ id, url }) => {
  const currentPage = window.location.href.split("/").pop();

  const isActive = (name) => {
    return currentPage === name;
  };
  return (
    <nav className="nav-container">
      <ListNavLink active={isActive("items")} to={`${url}/items`}>
        items
      </ListNavLink>

      <ListNavLink active={isActive("members")} to={`${url}/members`}>
        members
      </ListNavLink>

      <ListNavLink to={`/users/${id}`}>home</ListNavLink>
    </nav>
  );
};

export default ListNav;
