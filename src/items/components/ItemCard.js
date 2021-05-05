import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import {
  CardHeading,
  MemberCount,
  Row,
  Acquired,
  Edit,
  Trash
} from '../../common/elements'


export default function ItemCard({ record, toggle, trash }) {
  const { url } = useRouteMatch()
  return (
    <div style={{ margin: '0 0 2rem 0' }}>
      <CardHeading>{record.name}</CardHeading>

      <MemberCount>{record.amount}</MemberCount>

      <Row>
        <Acquired
          onClick={() => toggle(record.id)}
          acquired={record.acquired}
        >
          acquired
          </Acquired>

        <Edit to={`${url}/${record.id}/edit`}>edit</Edit>
        <Trash onClick={() => trash(record.id)}>trash</Trash>
      </Row>
    </div>
  )
}
