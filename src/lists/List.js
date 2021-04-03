// ALERT: make items default
import React from 'react';
import ListInvitesContainer from './containers/ListInvitesContainer';
import ItemsContainer from '../items/containers/ItemsContainer'
import ItemCard from '../items/components/ItemCard'
import EditItem from '../items/pages/EditItem'
import NewItem from '../items/pages/NewItem'
import MembersContainer from '../list_members/MembersContainer'
import {
  Redirect,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'


// REPLACED BY REDUX 
import { TestLists } from '../common/TestData'

const List = () => {
  const { path, url } = useRouteMatch()

  // REPLACED BY REDUX
  const listId = useParams().id
  const list = TestLists.find(l => l.id === parseInt(listId))


  return (
    <div>
      <h1>{list.name}</h1>
      <Link to={`${url}/items`}>items</Link>
      <Link to={`${url}/members`}>users</Link>
      {/* ALERT: Make Dynamic Call to Store? */}
      <Link to={'/users/3'}>home</Link>


      <Route exact path={path} >
        <Redirect to={`${url}/items`} />
      </Route >

      <Route path={`${path}/items/:id/edit`} >
        <EditItem />
      </Route>

      <Route path={`${path}/items/new`} >
        <NewItem />
      </Route>

      <Route exact path={`${path}/items`} >
        <ItemsContainer records={list.items} />
      </Route>

      <Route path={`${path}/members`} >
        <MembersContainer contributors={list.contributors} />
      </Route>
    </div>
  );
}

export default List;
