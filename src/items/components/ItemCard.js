import React from 'react'
import styled from 'styled-components'
import {
  CardHeading,
  MemberCount,
  Row
} from '../../common/elements'
import { Route, Link, useRouteMatch } from 'react-router-dom'

const Acquired = styled.button`
  border-color: ${props => props.acquired ? 'var(--green-color)' : 'var(--blue-color)'};
  color: ${props => props.acquired ? '#fff' : 'var(--blue-color)'};
  background: ${props => props.acquired ? 'var(--green-color)' : 'none'};
  padding: .5rem .7rem;
  border-style: solid;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;

  &:hover {
    color: white;
    background-color: ${props => props.acquired ? '#fff' : 'var(--blue-color)'};
    color: ${props => props.acquired ? 'var(--green-color)' : '#fff'};
  }
`;

const Trash = styled.button`
  background: none;
  padding: .5rem .7rem;
  border-radius: 2rem;
  border-style: solid;
  border-color: var(--red-color);
  color: var(--red-color);
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;
  
  &:hover {
    color: white;
    background-color: var(--red-color);
  }
`;

const Edit = styled(Link)`
  border: solid var(--gray-color) 2px;
  color: var(--gray-color);
  padding: .5rem .7rem;
  border-radius: 2rem;
  font-weight: 600;
  margin: 1rem .6rem 1rem 0;
  transition: 10 ease-in;

  &:hover {
    color: white;
    background-color: var(--gray-color);
  }
`;


export default function ItemCard ({ record }) {
  const acquire = () => {
    alert(`marking ${record.name} acquired ID: ${record.id}`)
  }
  const trash = () => {
    alert(`trashing ${record.name} ID: ${record.id}`)
  }

  const { path, url } = useRouteMatch()

  return (
    <div style={{margin: '0 0 2rem 0'}}>
      <Route exact path={path}>
        <CardHeading>
          {record.name}
        </CardHeading>

        <MemberCount>
          {record.amount}
        </MemberCount>

        <Row>
          <Acquired 
            onClick={acquire}
            acquired={record.acquired}
          >
            acquired
          </Acquired>

          <Edit to={`${url}/${record.id}/edit`}>edit</Edit>
          <Trash onClick={trash}>trash</Trash>
        </Row>
      </Route>

    </div>
  )
}
