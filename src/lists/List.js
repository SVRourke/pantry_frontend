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
  const listId = useParams().id
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


      <Route exact path={path} >
        <Redirect to={`${url}/items`} />
      </Route>

      <Route path={`${path}/items/:id/edit`} >
        <EditItem />
      </Route>

      <Route path={`${path}/items/new`} >
        <NewItem />
      </Route>

      <Route exact path={`${path}/items`} >
        <ItemsContainer records={list.items} />
      </Route>


      <Route exact path={`${path}/members`} >
        <MembersContainer contributors={list.contributors} />
      </Route>

      <Route path={`${path}/members/invite`} >
        <InvitePage />
      </Route>

    </div>
  );
}

export default List;
