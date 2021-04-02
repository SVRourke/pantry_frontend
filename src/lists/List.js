// ALERT: make items default
import React from 'react';
import ListInvitesContainer from './containers/ListInvitesContainer';
import ItemsContainer from '../items/containers/ItemsContainer'
import ItemCard from '../items/components/ItemCard'
import EditItem from '../items/pages/EditItem'
import NewItem from '../items/pages/NewItem'
import {
  Redirect,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom'


// REPLACED BY REDUX 
import { TestLists, TestItems } from '../common/TestData'

const List = () => {
  const { path, url } = useRouteMatch()

  // REPLACED BY REDUX
  const listId = useParams().id
  const list = TestLists.find(l => l.id === parseInt(listId))
  
  // CREATE An Item Card
  const items = TestItems.map(i => <ItemCard record={i} />)

  return (
    <div>
      <h1>{list.name}</h1>
      <Link to={`${url}/items`}>items</Link>
      <Link to={`${url}/members`}>users</Link>
      <Link to={`/`}>home</Link>

      <Route exact path={path} >
        <Redirect to={`${url}/items`}/>
      </Route >

      <Route path={`${path}/items/:id/edit`} >
        <EditItem  />
      </Route>

      <Route path={`${path}/items/new`} >
        <NewItem />
      </Route>

      <Route exact path={`${path}/items`} >
        <ItemsContainer records={TestItems} />
      </Route>
      
      <Route path={`${path}/members`} >
        <h1>users</h1>
      </Route>
    </div>
  );
}

export default List;
