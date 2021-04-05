import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  padding: .7rem 0;
`;

const ListNavLink = styled(Link)`
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: ${props => props.active ? '600' : '400'};
`;

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
