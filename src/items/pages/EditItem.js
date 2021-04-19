import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { CancelButton, Wrapper } from '../../common/elements'
import ItemForm from '../components/ItemForm'
import { updateItem } from '../../actions/ItemActions'

const EditItem = (props) => {
  const { items, editAction } = props

  const history = useHistory()
  const { url } = useRouteMatch()

  const { list_id, item_id } = useParams()

  const record = items.find(i => i.id === parseInt(item_id))

  const formHandler = (info) => {
    editAction(list_id, { id: item_id, ...info })
    history.push(url.split('/').slice(0, url.split('/').length - 2).join('/'))
  }

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
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  editAction: (listId, item) => dispatch(updateItem(listId, item))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditItem)
