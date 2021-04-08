import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom'
import styled from "styled-components"

const NavLinkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  padding-top: 2rem;

`;

const NavLink = styled(Link)`
  font-weight: ${props => props.$active ? "800" : "500"};
  font-size: 1.5rem;
  padding-right: 1rem;
  text-decoration: ${props => props.$active ? 'underline' : 'none'};
  text-decoration-thickness: 3px;
  &:after {
    content: ":";
    display: ${props => props.$active ? "true" : "none"};
  }
`;

const MainNav = () => {
  const { url } = useRouteMatch()
  const [page, setPage] = useState("lists")

  const switchPage = (event) => {
    setPage(event.target.name)
  }

  const isActive = (name) => {
    return page === name ? true : false;
  }

  return (
    <NavLinkContainer>
      <NavLink
        $active={isActive('lists')}
        to={`${url}/lists`}
        onClick={switchPage}
        name='lists'
      >lists
      </NavLink>

      <NavLink
        $active={isActive('friends')}
        to={`${url}/friends`}
        onClick={switchPage}
        name='friends'
      >friends
      </NavLink>

      <NavLink
        $active={isActive('account')}
        to={`${url}/account`}
        onClick={switchPage}
        name='account'
      >account
      </NavLink>

    </NavLinkContainer>
  );
}

export default MainNav;
