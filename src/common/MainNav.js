import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom'
import { NavLink, NavLinkContainer  } from '../common/elements'

const MainNav = () => {
  const { url } = useRouteMatch()
  const suffix = window.location.href.split('/').pop()
  const [page, setPage] = useState(suffix)

  const switchPage = (event) => {
    setPage(event.target.name)
  }

  useEffect(() => {
    setPage(suffix)
  })

  const isActive = (name) => {
    return page === name ? true : false;
  }

  return (
    <NavLinkContainer>
      <NavLink
        $active={isActive('lists')}
        to={`${url}/lists`}
      >lists
      </NavLink>

      <NavLink
        $active={isActive('friends')}
        to={`${url}/friends`}
      >friends
      </NavLink>

      <NavLink
        $active={isActive('account')}
        to={`${url}/account`}
      >account
      </NavLink>

    </NavLinkContainer>
  );
}

export default MainNav;
