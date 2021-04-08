import React from 'react';
import { Link } from 'react-router-dom'
import { NavContainer, ListNavLink } from '../../common/elements'

const ListNav = ({id, url }) => {
  const currentPage = window.location.href.split('/').pop()

  const isActive = (name) => {
    return currentPage === name
  }
  return (
    <NavContainer>
    <p>{}</p>
      {/* MAKE COMPONENT */}
      <ListNavLink active={isActive('items')} to={`${url}/items`}>items</ListNavLink>
      <ListNavLink active={isActive('members')} to={`${url}/members`}>members</ListNavLink>
      <ListNavLink to={`/users/${id}`}>home</ListNavLink>
    </NavContainer>
  );
}

export default ListNav;
