import React from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import ItemForm from '../components/ItemForm'
import { CancelButton, Wrapper } from '../../common/elements'
import { connect } from 'react-redux'
import { Edit } from '../../actions/ItemActions'
import { TestItems } from '../../common/TestData'

const EditItem = ({ lists, editAction }) => {
  const history = useHistory()
  const { url } = useRouteMatch()
  const { list_id, item_id } = useParams()

  const formHandler = (info) => {
    editAction(list_id, { id: item_id, ...info })
    history.push(url.split('/').slice(0, url.split('/').length - 2).join('/'))
  }

  const list = lists.find(l => l.id == list_id)
  const record = list.items[parseInt(item_id)]

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
  lists: state
})
const mapDispatchToProps = dispatch => ({
  editAction: (listId, item) => dispatch(Edit(listId, item))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditItem)
