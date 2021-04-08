import React from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { CancelButton, Wrapper } from '../../common/elements'

// REPLACE WITH CALL TO STORE
import { TestItems } from '../../common/TestData'

export default function EditItem () {
  const history = useHistory()
  const { url } = useRouteMatch()

  const formHandler = (info) => {
    alert(`Form Submitted ${info.name}: ${info.amount}|`)
    history.push(url.split('/').slice(0, url.split('/').length - 2).join('/'))
  }

  // REPLACE WITH CALL TO STORE
  const userId = parseInt(useParams().id)
  const record = TestItems.find(i => i.id === userId)

  return (
      <div>
          <Wrapper>
              <h1>EDIT: {record.name}</h1>
              <CancelButton onClick={() => history.goBack()}>cancel?</CancelButton>
            </Wrapper>
          <ItemForm cb={formHandler} record={record} />
        </div>
  )
}
