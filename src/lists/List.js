// ALERT: make items default
import React from 'react';
import ListInvitesContainer from './ListInvitesContainer';
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
  const items = TestItems.map(i => <p>{i.name}<br/>{i.amount}<br/><br/></p>)

  return (
    <div>
      <h1>{list.name}</h1>
      <Link to={`${url}/items`}>items</Link>
      <Link to={`${url}/members`}>users</Link>
      <Link to={`/`}>home</Link>

      <Route exact path={path} >
        <Redirect to={`${url}/items`}/> 
      </Route >


      <Route path={`${path}/items`} >
        {items}
      </Route>
      
      <Route path={`${path}/members`} >
        <h1>users</h1>
      </Route>
    </div>
  );
}

export default List;
