import React from 'react'
import ItemForm from '../components/ItemForm'
import { useHistory } from 'react-router-dom'
import { CancelButton, Wrapper } from '../../common/elements'

export default function NewItem () {
  const history = useHistory()

  const formHandler = (info) => {
    alert(`Form Submitted ${info.name}: ${info.amount}`)
    history.goBack()
  }

  return (
    <div>
      <Wrapper>
        <h1>new item</h1>
        <CancelButton onClick={() => history.goBack()}>cancel?</CancelButton>
      </Wrapper>
      <ItemForm cb={formHandler} />
    </div>
  )
}
