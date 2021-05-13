import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import '../sass/MainNav.scss'
const MainNav = () => {
  const { url } = useRouteMatch()
  const suffix = window.location.href.split('/').pop()
  const [page, setPage] = useState(suffix)

  useEffect(() => {
    setPage(suffix)
  })

  const isActive = (name) => {
    return page === name ? true : false;
  }

  return (
    <div className={'main-nav'}>
      <Link
        className={isActive('lists') ? 'active' : ''}
        $active={isActive('lists')}
        to={`${url}/lists`}
      >lists
      </Link>

      <Link
        className={isActive('friends') ? 'active' : ''}
        to={`${url}/friends`}
      >friends
      </Link>

      <Link
        className={isActive('account') ? 'active' : ''}
        to={`${url}/account`}
      >account
      </Link>

    </div>
  );
}

export default MainNav;
