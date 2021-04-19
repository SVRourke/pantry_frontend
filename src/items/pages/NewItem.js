import React from 'react'
import ItemForm from '../components/ItemForm'
import { useHistory, useParams } from 'react-router-dom'
import { CancelButton, Wrapper } from '../../common/elements'

import { connect } from 'react-redux'
import { createItem } from '../../actions/ItemActions'

const NewItem = ({ createAction }) => {
  const history = useHistory()
  const listId = useParams().list_id

  const formHandler = (info) => {
    createAction(listId, info)
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

const mapStateToProps = state => ({
  lists: state
})

const mapDispatchToProps = dispatch => ({
  createAction: (listId, item) => dispatch(createItem(listId, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)