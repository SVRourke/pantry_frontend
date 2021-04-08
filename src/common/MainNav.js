import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { NavLink, NavLinkContainer  } from '../common/elements'

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
