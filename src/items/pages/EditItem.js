import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import ItemForm from '../components/ItemForm'

// REPLACE WITH CALL TO STORE
import { TestItems } from '../../common/TestData'

export default function EditItem() {
    const history = useHistory()

    const formHandler = (info) => {
        alert(`Form Submitted ${info.name}: ${info.amount}`)
    }

    // REPLACE WITH CALL TO STORE
    const userId = parseInt(useParams().id)
    const record = TestItems.find(i => i.id === userId)



    return (
        <div>
            <h1>EDIT ITEM</h1>
            <button onClick={() => history.goBack()}>cancel</button>
            <ItemForm cb={formHandler} record={record} />
        </div>
    )
}
