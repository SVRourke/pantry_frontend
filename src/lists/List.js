import React from 'react';
import InvitePage from '../list_members/pages/InvitePage'
import ItemsContainer from '../items/containers/ItemsContainer'
import EditItem from '../items/pages/EditItem'
import NewItem from '../items/pages/NewItem'
import MembersContainer from '../list_members/MembersContainer'
import ListNav from './components/ListNav'
import {
  Redirect,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom'


// REPLACED BY REDUX 
import { TestLists } from '../common/TestData'

const List = () => {
  const { path, url } = useRouteMatch()

  // REPLACED BY REDUX
  const listId = useParams().list_id
  const list = TestLists.find(l => l.id === parseInt(listId))
  const userId = 3;


  return (
    <div>
      <h1 style={{
        fontSize: '3rem',
        textDecoration: 'underline',
        textDecorationThickness: '4px',
        fontWeight: '600'
      }}>{list.name}</h1>
      
      <ListNav id={userId} url={url} />

      {/* Root, redirects to items */}
      <Route exact path={path} >
        <Redirect to={`${url}/items`} />
      </Route>

      {/* Edit Item Page */}
      <Route path={`${path}/items/:item_id/edit`} >
        <EditItem />
      </Route>

      {/* New Item Page */}
      <Route path={`${path}/items/new`} >
        <NewItem />
      </Route>

      {/* Main List View, Shows items */}
      {/* ? MAYBE MOVE REDUX OUT OF ItemsContainer */}
      <Route exact path={`${path}/items`} >
        <ItemsContainer />
      </Route>

      {/* List Members Page */}
      <Route exact path={`${path}/members`} >
        <MembersContainer contributors={list.contributions} />
      </Route>

      {/* New List Member Page */}
      <Route path={`${path}/members/invite`} >
        <InvitePage />
      </Route>

    </div>
  );
}

export default List;
