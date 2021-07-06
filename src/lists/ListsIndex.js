import React from "react";
import ListCardContainer from "./containers/ListCardContainer";
import ListInvitesContainer from "./containers/ListInvitesContainer";
import NewList from "../lists/pages/NewList";
import { FancyLink } from "../common/elements";

import { Route, Link, useRouteMatch } from "react-router-dom";

const ListIndex = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Route exact path={path}>
        <ListCardContainer />

        <FancyLink>
          <Link to={`${url}/new`}>new list</Link>
        </FancyLink>

        <ListInvitesContainer />
      </Route>

      <Route path={`${path}/new`} component={NewList} />
    </>
  );
};

export default ListIndex;
